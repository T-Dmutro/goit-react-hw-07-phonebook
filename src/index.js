
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import  { store }  from './components/Redux/store'
import { Provider } from 'react-redux';

import App from './components/APP/App';

const root = createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
    <Provider store={store}>

        <BrowserRouter >
            <App />
        </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
// basename ="/goit-react-hw-07-phonebook/"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter >
//             <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   // document.getElementById('root'),
// );
// basename ="/goit-react-hw-06-phonebook/"

