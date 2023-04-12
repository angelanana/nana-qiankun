import { createApp } from 'vue'
import App from './App.vue'
import './public-path' // 引入public-path.js
// import routes from './router'
// import store from './store'
import VueRouter from 'vue-router'
// createApp(App).mount('#app')

Vue.config.productionTip = false
let instance = null;

function render(props = {}) {
  const { container, routerBase } = props
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes
  })
  instance = new Vue({
    // router,
    // store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 导出渲染函数，qiankun 会调用此函数渲染子应用
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props)

  render(props)
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
