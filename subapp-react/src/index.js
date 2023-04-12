import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
let instance = null;
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// 开发环境下直接渲染
if (process.env.NODE_ENV === 'development') {
  render();
}

// 导出渲染函数，qiankun 会调用此函数渲染子应用
export async function bootstrap() {
  console.log('react app bootstraped');
}
export async function mount() {
  render();
}
export async function unmount() {
  instance.$destroy();
  // const { container } = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
export async function update(props) {
  console.log('update props', props);
}
