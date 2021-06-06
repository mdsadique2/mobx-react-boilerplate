import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComp  from './Router';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback="Loading">
      <RouterComp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
