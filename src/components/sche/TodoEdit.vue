<style lang="scss">
	
</style>
<template>
	<div class="router-view">
		<r-todo-edit
				:is-checkable="true"
				transition="right-slide">
			<r-input-title
					slot="slotTitle"
					:is-checkable="true"
					:item-title.sync="editItem.pTitle"
					:item-checked.sync="editItem.pIsDone"
					@text-blur="titleBlur"
					@click-checkout="finishChecked"
			></r-input-title>
			<r-input-note
					slot="slotNote"
					:item-note.sync="editItem.pNote"
					@text-blur="noteBlur"
			></r-input-note>
			<r-input-date
					slot="slotDate"
					:item-start-date.sync="editItem.startDate"
					:item-end-date.sync="editItem.endDate"
					:item-dates.sync="editItem.dates"
					:item-sep="'/'"
			        @date-changed="updateDate"
			></r-input-date>
			<r-input-member
					slot="slotMember"
					:is-native="true"
					:index-title="'成员'"
					:select-title="'请选择成员'"
					:user-rsq-ids="[]"
					:selected-rsq-ids="joinUsers"
					:disabled-rsq-ids="[]"
					@member-changed="saveMember"
			></r-input-member>
			<r-comment-list
					slot="slotComment"
					:item-list="normalCommonList"
					:todo-type="'todo'"
			></r-comment-list>
		</r-todo-edit>
	</div>
</template>
<script>
	import TodoEditView from 'comps/public/TodoEditView';
	import InputTitleText from 'comps/public/InputTitleText';
	import InputNoteText from 'comps/public/InputNoteText';
	import InputDate from 'comps/public/InputDate';
	import InputMember from 'comps/public/InputMember';

	import CommentList from 'comps/public/CommentList';

	import util from 'utils/jsUtil';

	import { getTodo, updateTodo, updateTodoDate, deleteTodo } from 'vuexx/actions';

	export default{
		data(){
			return{
				editItem:{}
			};
		},
		computed: {
			normalCommonList(){
				var list = this.editItem.comments;
				if(list){
					return list.filter(function(ele){
						return ele.type === 0;
					});
				}else{
					return [];
				}
			}
		},
		components: {
			'r-todo-edit': TodoEditView,
			'r-input-title': InputTitleText,
			'r-input-date': InputDate,
			'r-input-member': InputMember,
			'r-input-note': InputNoteText,
			'r-comment-list': CommentList
		},
		route: {
			//  暂时采用同步的方式，只有当获取到了数据之后，才显示页面
			waitForData: true,
			//  本页面的状态数据
			data(t){
				rsqadmg.exec('showLoader');
				return this.getTodo()
						.then(function(){
					rsqadmg.exec('hideLoader');
				});
//				var that = this;
//
//				setTimeout(function(){
//					rsqadmg.exec('showLoader');
//					return that.getTodo()
//							.then(function(){
//								var newItem = {};
//								util.extendObject(newItem, that.currentTodo);
//								t.next({editItem: newItem});
//								that.$nextTick(function(){
//									that.$broadcast('todo-data-ready');
//								});
//								rsqadmg.exec('hideLoader');
//							});
//				}, 0);
			}
		},
		vuex: {
			actions: {
				getTodo, updateTodo, updateTodoDate, deleteTodo
			},
			getters: {
				currentDate(state){
					return state.schedule.strCurrentDate;
				},
				currentTodo(state){
					return state.todo.currentTodo || {};
				},
				joinUsers(state){
					var todo = state.todo.currentTodo;
					if(todo){
						return util.getMapValuePropArray(todo.receiverUser, 'joinUser');
					}else{
						return [];
					}
				}
			}
		},
		methods:{
			titleBlur(){
				var title = this.editItem.pTitle;
				if(!title){
					return rsqadmg.execute('alert', {message: '任务标题不能为空'});
				}
				if(title != this.currentTodo.pTitle){
					rsqadmg.exec('showLoader', {text: '保存中...'});
					this.updateTodo(this.currentTodo, {pTitle: title})
							.then(function(){
								rsqadmg.exec('hideLoader');
								rsqadmg.execute('toast', {message: '保存成功'});
							});
				}
			},
			noteBlur(){
				var note = this.editItem.pNote;
				if(note != this.currentTodo.pNote){
					rsqadmg.execute('showLoader', {text: '保存中...'});
					this.updateTodo(this.currentTodo, {pNote: note})
							.then(function(){
								rsqadmg.exec('hideLoader');
								rsqadmg.execute('toast', {message: '保存成功'});
							});
				}
			},
			updateDate(){
				//  如果未发生改变则不保存
				if(this.currentTodo.startDate == this.editItem.startDate &&
					this.currentTodo.endDate == this.editItem.endDate &&
					this.currentTodo.dates == this.editItem.dates){
					return;
				}
				rsqadmg.execute('showLoader', {text: '保存中...'});
				var paramObj = {
					startDate: this.editItem.startDate,
					endDate: this.editItem.endDate,
					dates: this.editItem.dates
				};
				if(this.editItem.startDate == null &&
					this.editItem.endDate == null &&
					this.editItem.dates == null){
					paramObj['pContainer'] = 'inbox';
				}
				this.updateTodoDate(this.currentTodo, paramObj)
						.then(function(){
							rsqadmg.exec('hideLoader');
							rsqadmg.execute('toast', {message: '保存成功'});
						});
			},
			saveMember(selList){
				var oldArray = this.joinUsers.map(function(obj){
					return obj['id'] + '';
				});
				var idArray = util.extractProp(selList, 'rsqUserId');
				var compRes = util.compareList(oldArray, idArray);
				rsqadmg.execute('showLoader', {text: '保存中...'});
				var that = this;
				this.updateTodo(this.currentTodo, {
					receiverIds: idArray.join(','),
					addJoinUsers: compRes.addList.join(','),
					deleteJoinUsers: compRes.delList.join(',')
				}).then(function(){
					rsqadmg.exec('hideLoader');
					rsqadmg.execute('toast', {message: '保存成功'});
				});
			},
			finishChecked(){
				var status = this.editItem.pIsDone;
				if(status !=this.currentTodo.isDone){
					this.updateTodo(this.currentTodo, {pIsDone: status})
							.then(function(){
								var str = status ? '任务已完成':'任务已重启';
								rsqadmg.execute('toast', {message: str});
							});
				}
			},
			deleteCurrentTodo(){
				var that = this;
				rsqadmg.exec('confirm', {
					message: '确定要删除此任务？',
					success: function(){
						rsqadmg.execute('showLoader', {text: '删除中...'});
						that.deleteTodo(that.currentTodo)
								.then(function(){
									rsqadmg.exec('hideLoader');
									rsqadmg.execute('toast', {message: '删除成功'});
									that.$router.replace(window.history.back());
								});
					}
				});
			}
		},
		ready(){
			util.extendObject(this.editItem, this.currentTodo);
			rsqadmg.execute('setTitle', {title: '任务'});
			var that = this;
			rsqadmg.execute('setOptionButtons',{
				btns: [{key: 'deleteTodo', name: '删除'}],
				success: function(res){
					if(res.key == 'newTodo'){
						that.$router.replace(window.history.back());
					} else if(res.key == 'deleteTodo'){
						that.deleteCurrentTodo();
					}
				}
			});
		}
	};
</script>
