import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../components/login';
import '../styles/login.scss';

import Page from "../components/page";
import Nav from '../routes/nav';
// function header()
// {
//   return(
//     <>
      
//     </>
//   );
// }
function App() {
  return (
    
    <BrowserRouter>
         <Route path="/" exact={true}>
          <Page></Page>
          </Route>
          <Route path="/page/:id" exact={true}>
           <Page></Page>
          </Route>
          <Route path="/page"exact={true}>
           <Page></Page>
           </Route>
          <Route path="/login" exact={true}>
           <Login></Login>
          </Route>
        
       
   </BrowserRouter>
     
    
  );
}

export default App;
