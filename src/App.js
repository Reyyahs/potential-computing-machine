import React from 'react';
import './App.style.scss';
import Base from "./components/Base";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Base/>
         </BrowserRouter>
      </div>
   );
}


export default App;

