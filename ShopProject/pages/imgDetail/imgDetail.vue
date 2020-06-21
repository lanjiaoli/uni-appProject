<template>
	<view>
		<view class="user_info">
			<view class="user_icon">
				<image :src="imgDetail.user.avatar" mode="widthFix"></image>
			</view>
			
		</view>
		<!-- 点赞开始 -->
		<view class="user_rank">
			<view class="rank">
				<text class="iconfont icondianzan">{{imgDetail.rank}}</text>
			</view>
			<view class="collect">
				<text class="iconfont iconshouchang">收藏</text>
			</view>
		</view>
		<!-- 点赞结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgDetail:{}
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(options.id)
			const{imgList,imgIndex}=GetApp().globalData;
			this.imgDetail=imgList[imgIndex]
		}
	}
</script>

<style>

</style>
