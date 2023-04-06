import * as React from "react";
// import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from 'react-dom/client';

/**
 * @author Delfina Maria Molter <delfi.molter@gmail.com>
 */

const rootElement: HTMLDivElement= document.querySelector('#root') as HTMLDivElement;

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

/**
 * Se comento este codigo porque en el navegador salia un error de que estaba deprecado y que mejor era utilizar el createRoot.
 * @deprecated
 */
// ReactDOM.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
