<style lang="scss">

</style>
<template>
	<div class="router-view">
		<r-todo-edit
				:is-checkable="true"
				:is-show-note="false"
				transition="right-slide">
			<r-input-title
					slot="slotTitle"
					:is-checkable="false"
          v-model="editItem.pTitle"
			></r-input-title>
			<r-input-date
					slot="slotDate"
					:item-start-date="editItem.startDate"
					:item-end-date="editItem.endDate"
					:item-dates="editItem.dates"
					:item-sep="'/'"
          v-if="todoType == 'schedule'"
          @date-changed="saveDate"
			></r-input-date>
			<r-input-member
					slot="slotMember"
					:is-native="true"
					:index-title="'成员'"
					:select-title="'请选择成员'"
					:user-rsq-ids="[]"
					:selected-rsq-ids="[]"
					:disabled-rsq-ids="[]"
					@member-changed="saveMember"
			></r-input-member>
		</r-todo-edit>
		<div class="bottom-fixed" v-if="dType == 'p'">
			<div class="clickable itm-outer itm-bordered">
				<v-touch class="itm-inner" @tap="saveTodo">
					<div class="itm-title itm-title--center is-active">创建任务</div>
				</v-touch>
			</div>
		</div>

	</div>
</template>
<script>
	import PublicEditView from 'com/pub/TodoEditView';
	import InputTitleText from 'com/pub/InputTitleText';
	import InputDate from 'com/pub/InputDate';
	import InputMember from 'com/pub/InputMember';

	import util from 'ut/jsUtil';
	import dateUtil from 'ut/dateUtil';
	import moment from 'moment';

	export default{
		data(){
//			var now = dateUtil.dateNum2Text(new Date().getTime());
			return{
				editItem:{
				  pTitle: '',
					dates: null,
					startDate: null,
					endDate: null
				}
			};
		},
    computed: {
		  todoType(){
        return this.$route.params.todoType
      },
      dType(){
        return this.$store.getters.dType;
      },
      currentDate(){
        return this.$store.state.schedule.strCurrentDate;
      }
    },
		components: {
			'r-todo-edit': PublicEditView,
			'r-input-title': InputTitleText,
			'r-input-member': InputMember,
			'r-input-date': InputDate
		},
    beforeRouteEnter(to, from, next){
		  next();
		  // beforeRouteEnter中不能获取到this，因为this还没有创建，只能通过next获取
//      next(vm => {
//        if('schedule' == vm.todoType){
//          var currentVal = moment(vm.currentDate, 'YYYY-MM-DD').valueOf();
//          var strDate = dateUtil.dateNum2Text(currentVal);
//
//          vm.editItem.startDate = strDate;
//          vm.editItem.endDate = strDate;
//          console.log('----this.editItem:' + JSON.stringify(vm.editItem));
//        }
//      });
    },
		methods:{
      initData(){
        if('schedule' == this.$route.params.todoType){
          var currentVal = moment(this.currentDate, 'YYYY-MM-DD').valueOf();
          var strDate = dateUtil.dateNum2Text(currentVal);

          this.editItem.startDate = strDate;
          this.editItem.endDate = strDate;
        }
      },
			//  从startDate endDate dates三个字段中转换成用户前台显示的date结构
			getPlanedTime(){
				var ei = this.editItem;
				var result = dateUtil.backend2frontend(ei.dates, ei.startDate, ei.endDate);
				return (result && result.dateResult) ? result.dateResult[0] : null;
			},
      saveDate({startDate, endDate, dates}){
        this.editItem.startDate = startDate;
        this.editItem.endDate = endDate;
        this.editItem.dates = dates;
      },
			saveMember(selList){
				var idArray = util.extractProp(selList, 'rsqUserId');
				this.editItem.receiverIds = idArray.join(',');
			},
			saveTodo(){
				if(!this.editItem.pTitle){
					return rsqadmg.execute('alert', {message: '请填写任务名称'});
				}

				var isInbox = false;
        console.log('===this.editItem:' + JSON.stringify(this.editItem))
				if((!this.editItem.dates) && (!this.editItem.startDate) && (!this.editItem.endDate)) {
          isInbox = true;
        }
        console.log('isInbox:===' + isInbox);
				if(!isInbox){
					var planTime = this.getPlanedTime();
//					if(!planTime){
//						return rsqadmg.execute('alert', {message: '请选择任务日期'});
//					}
					//  坑爹啊。。。格式不统一，需要做额外的hack
					this.editItem.pPlanedTime = dateUtil.dateNum2Text(planTime, '-') + ' 00:00:00';
				}

				rsqadmg.execute('showLoader', {text: '创建中...'});

				var that = this;
				this.$store.dispatch('submitCreateTodoItem', {props: this.editItem, todoType: isInbox?'inbox':'schedule'})
						.then(function(){
						  console.log("马上就创建成功了")
							rsqadmg.exec('hideLoader');
							rsqadmg.execute('toast', {message: '创建成功'});
							that.$router.replace(window.history.back());
						});
			}
		},
		mounted(){
		  this.initData();
			rsqadmg.execute('setTitle', {title: '新任务'});
			var btnParams;
			var that = this;
			btnParams = {
				btns: [{key: 'saveTodo', name: '完成'}],
				success: function(res){
					if(res.key == 'saveTodo'){
						that.saveTodo();
					}
				}
			};
			rsqAdMg.execute('setOptionButtons', btnParams);
		}
	};
</script>
