const  BASE_SERVER_Url = "https://www.imovietrailer.com"

export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_SERVER_Url+options.url,
			data: options.data || {},
			header: options.header || {},
			method: options.method || "GET",
			success: (res)=>{
				reslve(res.data)
			},
			fail: (err) =>{
				reject(err);
			}
		
		})
	})		
}
