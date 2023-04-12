import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 定义子应用列表
const apps = [
  {
    name: 'vue3',
    entry: '//localhost:3032',
    container: '#subapp-vue',
    activeRule: '/vue3',
  },
  {
    name: 'react-app',
    entry: '//localhost:3001',
    container: '#root',
    activeRule: '/react-app',
  },
];

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 注册子应用
registerMicroApps(apps);

// 启动 qiankun
start();