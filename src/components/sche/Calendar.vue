<template>
	<v-touch class="c-cal-main"
	     @panstart="onPanMove" @panmove="onPanMove"
	     @panend="onPanEnd"
	     @pancancel="onPanEnd"
       :pan-options="{ direction: 'horizontal', threshold: 10 }">

	<!--<div class="cal-title z-index-3xs">-->
			<!--<span>{{focusDate ? months[focusDate.getMonth()] : ''}}月</span>-->
			<!--<span>{{focusDate ? focusDate.getFullYear() : ''}}</span>-->
			<!--<span class="cal-title-today"-->
			      <!--v-touch:tap="backToToday"-->
			      <!--v-show="!isToday()">今</span>-->
		<!--</div>-->
		<div class="cal-week-title z-index-2xs">
			<table>
				<tr>
					<td class="cal-weekday" v-for="week in weeks">{{week}}</td>
				</tr>
			</table>
		</div>
		<div class="cal-content z-index-2xs">
			<div class="cal-outer">
				<div class="cal-inner" id="hMoveBar"
				     :style="{'transform': translateX}"
				     :class="{'animate': easeTrans }">
					<r-cal-bar
            v-for="(days, index) in daysArray"
            :key="index"
            :days="days"
            :bar-index="index"
            :highlight-day="selectDate"
            @click-cal-bar-day="triggerSelectDate"
					></r-cal-bar>
				</div>
			</div>
		</div>
	</v-touch>
</template>
<script>
	import CalendarBar from 'com/sche/CalendarBar';

	import dateUtil from 'ut/dateUtil';

	export default {
		name: 'Calendar',
		data(){
			return{
				daysArray:[], //有当前月份（周）、前一个月份（周）、后一个月份（周）三个数组组成
				focusDate: null,  //每一个当前显示的月份（周）都需要有一个focusDate
				selectDate: null,  //当前选中（高亮显示）的日期
				easeTrans: false,
				translateX: 'translateX(0)',
				weeks:['日', '一', '二', '三', '四', '五', '六'],
				months:['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
			};
		},
		props: {
			defaultSelectDate: Date
		},
		computed: {
		},
		components:{
			'r-cal-bar': CalendarBar
		},
		methods: {
			triggerSelectDate(date){
//				this.$broadcast('sche-clear-highlight-day');
				this.selectDate = date;
				this.$emit('click-cal-day', date);
			},
			backToToday(){
				var today = this.clearTime(new Date());
				this.focusDate = today;
				this.resetBar();
				this.triggerSelectDate(today);
			},
			isToday(){
				if(!this.selectDate){
					return false;
				}
				return this.selectDate.getTime() == this.clearTime(new Date()).getTime();
			},
			resetDays(focusDate){
				return [
						this.getWeekDays(this.firstDayOfWeek(focusDate, -1)),
						this.getWeekDays(this.firstDayOfWeek(focusDate, 0)),
						this.getWeekDays(this.firstDayOfWeek(focusDate, 1))
				]
			},
			clearTime: function(date){
				return new Date(date.setHours(0,0,0,0));
			},
			getWeekDays(focusDate){
				return dateUtil.getWeekDays(focusDate);
			},
			firstDayOfWeek(date, offset){
				return dateUtil.firstDayOfWeek(date, offset);
			},
			onPanMove(ev){
				if(this.easeTrans){
					return;
				}
				var delta = ev.deltaX;
				this.translateX = 'translateX(' + delta + 'px)';
			},
			onPanEnd(ev){
				if(this.easeTrans){
					return;
				}
				this.easeTrans = true;

				var delta = ev.deltaX;
				var direction;

				if (Math.abs(delta) > 20 && ev.type == 'panend') {
					direction = delta > 0 ? 1 : -1;
					this.translateX = 'translateX(' + (direction * 100) + '%)';
				}else{
					direction = 0;
					this.translateX = 'translateX(0)';
				}

				this.focusDate = this.firstDayOfWeek(this.focusDate, -direction);
			},
			resetBar(){
				this.daysArray = this.resetDays(this.focusDate);
				this.easeTrans = false;
				this.translateX = 'translateX(0)';
			}
		},
		mounted(){
			//  初始化工作
			this.focusDate = this.defaultSelectDate;
			this.resetBar();

			this.triggerSelectDate(this.defaultSelectDate);

			var ele = document.getElementById('hMoveBar');
			ele.addEventListener('transitionend', this.resetBar);
			ele.addEventListener('webkitTransitionEnd', this.resetBar);
		}
	};
</script>
<style lang="scss" scope>
  @import '../../assets/css/variables.scss';

  .c-cal-main {
    position: relative;color:#999;font-size: 1.4rem;
    height: 3.786rem;background: $bgColor;margin-bottom:12px;
    border-bottom: 0.5px solid #E4E4E4;
  }
  .cal-title {
    position: absolute;top: 0;left: 0;right: 0;
    text-align: center;height: 53px;line-height: 52px;
    margin-bottom: -1px;background: $mainColor;
  }
  .cal-title-today {position:absolute;top:0;height:100%;left:50%;margin-left:65px;
    font-size: 1.8rem;font-weight: bold;}
  .cal-week-title {
    position: absolute;top: 0px;left: 0;right: 0;width: 100%;
    padding: 0;height: 31px;line-height: 30px;
    margin-bottom: -1px;color:#999;background: $bgColor;font-size:1.2rem;
  }
  .c-cal-main table {
    text-align: center;table-layout: fixed;
    width: 100%;height: 100%;margin: 0;
  }
  .c-cal-main td {}
  .cal-weekday {font-size: 0.293rem}
  .cal-content {
    position: absolute; top: 30px;left: 0;right: 0;padding:0;
    width: 100%;height:40px;overflow: hidden;
  }
  .cal-outer {position:relative;width:100%;height:100%;overflow:hidden;}
  .cal-inner {
    left: -100%;
    position: absolute;top:0;width:100%;bottom:0;overflow: visible;white-space:nowrap;
  }
  .cal-day{

  }
  .animate {
    transition: transform 0.3s ease;
  }
</style>
