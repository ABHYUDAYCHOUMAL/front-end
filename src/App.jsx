import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, AllHospitals } from "./Pages";

class App extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <Router>
    <Switch>
     <Route exact path="/" component={Home} />
     {/* <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/> */}
     <Route exact path="/login" component={Login} />
     <Route exact path="/allhospital" component={AllHospitals} />
    </Switch>
   </Router>
  );
 }
}

export default App;
