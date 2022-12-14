//import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/header"
import {Footer} from "./mycomponents/footer"
import {Todo} from "./mycomponents/todo"

import {About} from "./mycomponents/About"
import {Todos} from "./mycomponents/todos" 
//curlly brackets for const in function
// if we want variable work with html then we wrap in {}
// if we want html with js so wrap in div or <> </>
// bootstap react and bootstrap also used
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom'


function App() {
  return (
   <>

   <Router>
   <Header title="Todos App" searchbar= {false}/>
   <Switch>
        <Route exact path="/" render={()=>{
     return (<>  
      <Todos/>
     <Todo/></>)

 }} >
     </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
 
   <Footer/>
   </Router>
   </>
  );
}

export default App;
