<template>
	<view >
		
	
	<scroll-view 
	class="album_scorll_view"
	scroll-y
	@scrolltolower="handleToLower"
	
	>
		<!-- swiper 	
			自定播放：autoplay
			指示器：indicator
			衔接轮播：circular
			
			swiper 默认高度 ： 150px;
			默认宽度  320px
		-->
		<!-- 轮播图开始 -->
		<view class="album_swiper">
			<swiper 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="1000" 
			circular>
				<swiper-item v-for="item in banner"
					:key= "item.id">
					<image :src="item.thumb" mode="">
					</image>
				</swiper-item>
			</swiper>
			
		</view>
		<!-- 轮播图结束 -->
		
		<!-- 列表开始 -->
		<view class="album_list">
			<navigator 
			class="album_item"
			v-for="item in albums"
			:key = "item.id"
			:url="`/pages/album/index?id=${item.id}`"
			>
	
		
			<!-- 左边图片 -->
			<view class="album_image">
				<image :src="item.cover" mode="aspectFill"></image>
			</view>
				<!-- 左边图片结束 -->
				<!--  -->
				<view class="album_info">
					<view class="album_name">
						{{item.name}}
					</view>
					
					<view class="album_desc">
						{{item.desc}}
					</view>
					<view class="album_btn">
						<view class="album_attention">
							+ 关注
						</view>
					</view>
					
				</view>
			<!-- </view> -->
			
			</navigator>
		</view>
		<!-- 列表结束 -->
	</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{
					limit : 30,
					order : "new",
					skip : 0,
					
				},
				
				// 轮播图
				banner:[],
				//专辑
				albums:[],
				hasMore: true,
				
			}
		},
		methods: {
			
			requestLists(){
				const res =	this.$myRequest({
					url: 'v1/wallpaper/album',
					data:this.params,
				}).then(result => {
					console.log(result.res)
					if(result.res.album.length === 0){
						this.hasMore = false
					}
					if (this.banner.length == 0){
						this.banner = result.res.banner	
					}
					
					this.albums = [...this.albums,...result.res.album]
					
				})
			},
			
			handleToLower(){
				console.log("触底了")
				if(!this.hasMore){
					uni.showToast({
						title:"没有更多数据了"
					})
				}else{
					this.params.skip += this.params.limit
					this.requestLists()
				}
			}
			
		},
		mounted() {
			uni.setNavigationBarTitle({
				title:"专辑"
			})
			this.requestLists()
		}
		
		
		
	}
</script>

<style lang="scss" scoped>
.album_scorll_view{
	height: calc(100vh - 36rpx);
}
.album_swiper {
	swiper {
		height: 362.2rpx;
		image{
			height: 100%;
		}
	}
}

	.album_list{
		padding: 10rpx;
		
		.album_item{
			padding: 10rpx 0;
			display: flex;
			border-bottom: 1rpx solid #f5f5f5;
			.album_image{
				flex: 1;
				padding: 10rpx;
				
				image{
					border-radius: 10rpx;
					width:  200rpx;
					height: 200rpx;
				}
			}
			.album_info{
				flex: 2;
				padding: 0 10rpx;
				.album_name{
					font-size: 30rpx;
					color: #000;
					padding: 10rpx 0;
				
				}
				.album_desc{
					font-size: 24rpx;
					padding: 10rpx 0;
					// text-overflow: ellipsis;
					
				}
				.album_btn{
					padding: 10rpx;
					display: flex;
					justify-content: flex-end;
					.album_attention{
						color: $uni_custom_color;
						border-radius: 10rpx;
						border: 1px solid $uni_custom_color ;
						background-color: #FFFFFF;
						// height: 50rpx;
						// width: 100rpx;
						padding: 10rpx;
						font-size: 28rpx;
					}
					
					// padding: ;
				}
			
		}
	}
}

</style>
