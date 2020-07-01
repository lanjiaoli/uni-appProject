const BASE_URL = 'http://service.picasso.adesk.com/'
export const myRequest = (options)=> {
	return new Promise((resolve,reject)=> {
		uni.request({
			url : BASE_URL+ options.url,
			method : options.method || 'GET',
			data: options.data || {},
			success : (res)=> {
				
				// uni.showToast({
				// 	title:res.data.msg
				// })
				if(res.data.code === 0) {
					// uni.showToast({
					// 	title:res.data.msg,
					// 	fail() {
							
					// 	}
					// })
					// uni.show
					// uni.showErrorMessage('请求接口失败')
				}
				resolve(res.data)
			},
			fail : (err) => {
				// uni.showErrorMessage({
				// 	title:'请求接口失败',
				// })
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
			
		})
	})
}
