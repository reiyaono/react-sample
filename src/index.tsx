import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './components/Hello'
// import Name from './components/Name'
// import Message from './components/Message'
// import ContextSample from './components/ContextSample'
// import Counter from './components/Counter'
// import CounterReducer from './components/CounterReducer'
// import { Parent } from './components/Parent'
// import { Parent } from './components/UseCallbackSample'
// import { UseMemoSample } from './components/UseMemoSample'
// import { Clock } from './components/Clock'
// import { Parent } from './components/UseContextSample'
// import { ImageUploader } from './components/UseRefSample'
// import { Parent } from './components/useImperativeHandleSample'
import { Input } from './components/useCustomHookSample'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterReducer initialValue={1} /> */}
    {/* <Parent /> */}
    <Input></Input>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
