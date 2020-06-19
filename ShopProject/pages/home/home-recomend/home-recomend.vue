<template>
	<scroll-view @scrolltolower="handleToLower" class="recommend_view" scroll-y v-if="recomends.length > 0">
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
					<view class="mothed_title_more"> 更多></view>
			</view>
			<view class="moneths_content">
				<view class="mothens_item" v-for="item in months.items"
				:key="item.id">
					<image :src="item.thumb" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 月份结束 -->
		
		<!-- 热门开始 -->
			<view class="hots_wrap">
				<view class="hots_title">
					<text>热门</text>
				</view>
				
				<view class="hots_content">
					<view class="hot_item"
					v-for="item in hots"
					:key = "item.id"
					>
					<image :src="item.thumb" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		<!-- 热门结束 -->
		
	</scroll-view >
</template>

<script>
	import monent from "../../../components/uni-segmented-control/monent.js"
	export default {
		data() {
			return {
				recomends:[],
				
				months:{},
				// 热门
				hots:[],
				params:{
					limit:30,
					oreder:"hot",
					skip:0,
				},
				hasMore : true,
			}
		},
		methods: {
			handleToLower(){
				console.log("触底了")
				if (!this.hasMore){
					uni.showToast({
						title:"没有更多了"
					})
				}else{
					this.params.skip += this.params.limit
					this.getlists()
				}
			},
			getlists(){
				const res =  this.$myRequest({
					url: 'v3/homepage/vertical',
					data:this.params,
					
				}).then(result => {	
					if(result.res.vertical.length === 0){
						// this.hasMore = false;
					}
					if(this.recomends.length === 0){
						this.recomends = result.res.homepage[1].items
						
						this.months = result.res.homepage[2]
						this.months.MM = monent(this.months.stime).format('MM')
						this.months.DD = monent(this.months.stime).format('DD')
						// 将时间戳
						console.log(this.recomends)
					}
					// 推荐模块
					
					///获取热门数据的列表
					this.hots = [...this.hots, ...result.res.vertical];
				})
				
			}
		},
		mounted() {
			// 组件加载完毕
			this.getlists()
		}
		
		
	}
</script>

<style lang="scss" scoped  >
	
	.recommend_view{
		//
		height: calc(100vh - 36px);
		
	}
	
	.recomend_wrap {
		display: flex;
		flex-wrap: wrap;
		.recomend_item {
			width: 48%;
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
				padding-top: 5px;
				font-size: 24rpx;
				color: $uni_custom_color;
			}
		}
	}
	.moneths_content{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 5px;
		.mothens_item{
			width: 32% ;
			border: 5rpx solid #FFFFFF;
			image{
				width: 100%;
			}
		}
	}
	
	.hots_wrap{
		.hots_title{
			padding: 20rpx;
			text{
				border-left: 5rpx solid $uni_custom_color;
				padding-left: 10rpx;
				font: 35rpx;
				font-weight: bold;
				}
		}
		.hots_content{
			padding: 5px;
			display: flex;
			flex-wrap: wrap;
			.hot_item{
				width: 32%;
				border: 5rpx solid #FFFFFF;
				image{
					width: 100%;
				}
			}
		}
	}

</style>
