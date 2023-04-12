import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

let instance = null;

function render() {
  instance = createApp(App).mount('#app');
}
// 开发环境下直接渲染
if (process.env.NODE_ENV === 'development') {
  render();
}

// 导出渲染函数，qiankun 会调用此函数渲染子应用
export async function bootstrap() {}
export async function mount() {
  render();
}
export async function unmount() {
  instance.$destroy();
}
