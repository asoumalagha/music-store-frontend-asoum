import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';
import GetAllPerson from './components/Person/GetAllPerson';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className="AppBody">
            <StoreContextProvider>
                <Route exact path='/' component={GetAllPerson}/>
            </StoreContextProvider>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
