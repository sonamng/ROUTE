

import './App.css';
import Home from './Component/Home'
import About from './Component/About';
import Contact from './Component/Contact';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        <Route path='Home' component={Home}/>
        <Route path='Contact' component={Contact}/>
        <Route path='About' component={About}/>
      <Home/>
      <About/>
      <Contact/>


      {/* </Switch> */}
    </div>
  );
}
export default App;
