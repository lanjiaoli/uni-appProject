<template>
	<view>
		<view class="">
			<!-- 推荐开始 -->
			<view class="recomend_wrap">
				
				<view class="recomend_item" 
				v-for="item in recomends" 
				:key="item.id">
					<image :src="item.thumb" mode="widthFix">
					</image>
					
				</view>
			</view>
		</view>
		<!-- 推荐结束 -->
		<!-- 月份开始 -->
		<view class="monthed_wrap">
			<view class="monthed_title">
				<view class="monthed_title_info">
					<view class="moneths_info">
						<text>{{months.DD}}/</text>
						{{months.MM}}月
					</view>
					<view class="mothed_text">{{months.title}}</view>
				</view>
					<view class="mothed_title_more">更多></view>
			</view>
		</view>
		<!-- 月份结束 -->
	</view>
</template>

<script>
	import monent from "../../../components/uni-segmented-control/monent.js"
	export default {
		data() {
			return {
				recomends:[],
				months:{}
				
			}
		},
		methods: {
			
		},
		mounted() {
			// 组件加载完毕
			const res =  this.$myRequest({
				url: 'v3/homepage/vertical',
				data:{
					limit:30,
					oreder:"hot",
					skip:0,
				}
			}).then(result => {		
				// 推荐模块
				this.recomends = result.res.homepage[1].items
				
				this.months = result.res.homepage[2]
				this.months.MM = monent(this.months.stime).format('MM')
				this.months.DD = monent(this.months.stime).format('DD')
				// 将时间戳
				console.log(this.recomends)
				
			})
		}
	}
</script>

<style lang="scss" scoped  >
	.recomend_wrap {
		display: flex;
		flex-wrap: wrap;
		.recomend_item {
			width: 49%;
			border: 5rpx solid #FFFFFF;
			image{
				width: 100%;
			}
		}
	}

	
	.monthed_wrap{
		.monthed_title{
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			.monthed_title_info{
				color: $uni_custom_color;
				font-size: 30rpx;
				font-weight: 600rpx;
				display: flex;
				.moneths_info{
					text{
						font-size: 36rpx;
					}
				}
				.mothed_text{
					padding-left: 10px;
					color: #555555;
					font-size: 34rpx;
				}
			}
			.mothed_title_more{
				padding: 5px;
				font-size: 24rpx;
				color: $uni_custom_color;
			}
		}
	}

</style>
