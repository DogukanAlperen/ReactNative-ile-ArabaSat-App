import React from 'react'
import AnaNavigator from './android/app/src/navigation/anaNavigator';
import { Provider } from 'react-redux';
import { store } from './android/app/src/redux/store';


const App = () => {
 
  return 
  
  <Provider store={store}>
    
    <AnaNavigator/>
  
  </Provider>
}

export default App