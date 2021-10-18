
import './App.css';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//import components
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Appointment from './pages/Home/Appointment/Appointment';
import ErrorFound from './pages/ErrorFound/ErrorFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <ErrorFound></ErrorFound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
