<template>
	<view>
		<view class="home_tab">
			<!-- 分段控制器 -->
			<view class="home_tab_title">
				<view class="home_tab_inner">
					<uni-segmented-control
					:current="current" 
					:values="items.map(v=>v.title)" 
					@clickItem="onClickItem" 
					style-type="text" 
					active-color="#d4234a"
					color = "#000000">
					</uni-segmented-control>
				</view>
				<!-- 搜索按钮 -->
				<view class="iconsearch">
					<image src="../../static/icon/searchicon.png" mode=""></image>
				</view>
				
				
			</view>
			
			<!-- 内容 -->
			<view class="home_tab_content">
					<view v-if="current === 0">
						<homeRecomend></homeRecomend>
					</view>
					<view v-show="current === 1">
					    <homeCategory></homeCategory>
					</view>
					<view v-show="current === 2">
						<homeNew></homeNew>
					</view>
					<view class="" v-if="current===3">
						<homeAlbum></homeAlbum>
					</view>
				</view>
			</view>
		</view>
		

	</view>
	
	
</template>

<script>
	import homeRecomend from 'pages/home/home-recomend/home-recomend'
	import homeCategory from 'pages/home/home-category/home-category'
	import homeNew from 'pages/home/home-new/home-new'
	import homeAlbum from 'pages/home/home-album/home-album'
	import uniSegmentedControl from "components/uni-segmented-control/uni-segmented-control.vue"
	
	export default {
		data() {
			return {
				items: [{
					title:"推荐",
				},
				{
					title:"分类",
				},
				{
					title:"最新",
				},
				{
					title:"专辑",
				},
				],
				current: 0,
				}
		},
		onLoad() {
			// const res =  this.$myRequest({
			// 	url: 'v3/homepage/vertical'
			// })
			// console.log(res)
			
		},
		methods: {
			onClickItem(e) {
			
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
					uni.setNavigationBarTitle({
						title:items[this.current].title
					})
				}
			},
			
			
			getSwipers(){
				
			}
		},
		
		components:{
			homeAlbum,
			homeCategory,
			homeRecomend,
			homeNew,
			uniSegmentedControl
		}
	}
</script>

<style lang="scss">
	.home_tab{
		.home_tab_title{
			position: relative;
			.home_tab_inner{
				width: 60%;
				margin: 0 auto;
			}

			.iconsearch{
				position: absolute;
				right: 5%;
				transform: translateY(-50%);
				top: 50%;
				width: 30upx;
				height: 30upx;
			}
			.iconsearch image{
				width: 30upx;
				height: 30upx;
			}
		}
		.home_tab_content{
			
		}
	}
	
</style>
