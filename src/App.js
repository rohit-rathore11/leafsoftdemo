import Login from './Login';
import Dashboard from './Dashboard';
import Invoice from './Invoice';
import {BrowserRouter ,Routes, Route} from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
    <Route path={"/"} element={ <Login/>} ></Route>
    
    <Route path={"dashboard"} element={<Dashboard/>} >  </Route>
    <Route path={"invoice"}element={<Invoice/>} > </Route>
    
    </Routes>   
    </BrowserRouter>
  
  
  );
}

export default App;
