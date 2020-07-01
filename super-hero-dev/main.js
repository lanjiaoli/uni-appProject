import Vue from 'vue'
import App from './App'
import {myRequest} from "./comment/api.js"

Vue.config.productionTip = false

Vue.prototype.$myRuquest = myRequest

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

this.$m

cons