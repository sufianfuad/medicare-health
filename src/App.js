
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
import Footer from './pages/Shared/Footer/Footer';
import SitBooking from './pages/SitBooking/SitBooking';
import AuthProvide from './contexts/AuthProvide';

function App() {
  return (
    <div className="App">

      <AuthProvide>
        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/sitbooking/:bookingId">
              <SitBooking></SitBooking>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="*">
              <ErrorFound></ErrorFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvide>

    </div>
  );
}

export default App;
