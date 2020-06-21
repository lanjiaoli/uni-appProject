<template>
	<view>
		<!-- 专辑背景图 -->
		<view class="album_bg">
			<image :src="album.cover" mode="widthFix"></image>
			<view class="album_info">
				<view class="album_name">
					{{album.name}}
				</view>
				<view class="ablum_btn">
					关注专辑
				</view>
			</view>
			
		</view>
		<!-- 专辑背景结束 -->
		<!-- 作者信息 -->
		<view class="album_author">
			<view class="album_author_info">
				<image :src="album.user.avatar" mode=""></image>
				<view class="author_name">
					{{album.user.name}}
				</view>
			</view>
			<view class="album_author_desc">
				<text>{{album.desc}}</text>
			</view>
			
		</view>
		<!-- 作者信息完 -->
		
		<!-- 列表开始 -->
		<view class="album_list">
			<view class="album_item"
			v-for="item in wallpaper"
			:key = "item.id">
				<image :src="itme.rule" mode=""></image>
			</view>
		</view>
		<!-- 列表结束 -->
		
	</view>
</template>
 
<script>
	export default{
		data(){
			return {
				params:{
					limit :30,
					order:"new",
					skip:0,
					first : 1,
				},
				id : -1,
				// 专辑的详情数据
				album:{},
				wallpaper:[]				
				
			}
		},
		onLoad(options) {
			this.id = options.id
			console.log("id是？？"+options.id)
			this.getdetails()
		},
		methods:{
			
			 getdetails() {
				 uni.showLoading({
					title:"加载中..."
				 })
				this.$myRequest({
					url: `v1/wallpaper/album/${this.id}/wallpaper`,
					data: this.params,
				}).then(res =>{
					console.log(res.res)
					console.log(JSON.stringify(res.res.album.desc))
					this.album  = res.res.album
					this.wallpaper = res.res.wallpaper
				})
			}
		},
		onReachBottom() {
			console.log("我也是有底线的")
		}
	}
</script>

<style lang="scss" scoped>
	
	.album_bg{
		position: relative;
		.album_info {
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			height: 80rpx;
			align-items: center;
			color: #FFFFFF;
			
			.album_name{
				font-size: 40rpx;
			}
			.ablum_btn{
				background-color: $uni_custom_color;
				height: 50rpx;
				width: 152rpx;
				display: flex;
				justify-content: center;
				border-radius: 10rpx;
			}
		}
	}
	
	.album_author{
		padding: 10px;
		.album_author_info{
			padding: 10rpx 0;
			display: flex;
			image{
				height: 50rpx;
				width: 50rpx;
				border-radius: 25rpx;
				
			}
			.author_name{
				padding-left: 10rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #333333;
			}
		}
		
		.album_author_desc{
			color: #666666;
			
		}
	}
</style>
