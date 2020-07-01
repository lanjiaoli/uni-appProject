<template>
	<view class="page">
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carcousel">
			<swiper-item>
				<image src="../../static/carousel/spiderman.png" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/spiderman.png" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		},
		methods: {
			
			
		},
	}
</script>

<style>
	@import url("index.css");
</style>
