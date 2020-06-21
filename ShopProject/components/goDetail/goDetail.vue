<template>
	<view @click="handleClick">
		<!-- 组件 -->
		组件
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			console.log(this.list)
			console.log(this.index)
		},
		methods: {
			handleClick(){
				console.log("将数据缓存")
				getApp().globalData.imglist = this.list
				getApp().globalData.imgIndex = this.index
				uni.navigateTo({
					url:"/pages/imgDetail/imgDetail"
				})
			}
		},
		props:{
			list :Array,
			index: Number,
		}
	}
</script>

<style>

</style>
