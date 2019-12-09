import React, {useContext} from 'react';
import './App.css';
import Project from './TodoListProject'
import Auth from './Auth'
import { AuthContext } from './context';

function App() {
  let content = <Auth />
  const authContext = useContext(AuthContext);
  if(authContext.isAuth){
      content = <Project />
  }
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
