import './global.scss';
import Home from './page/Home';
import {Routes, Route} from "react-router-dom"
import Layout from './page';

 
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
