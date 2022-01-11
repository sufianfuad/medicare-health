
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
// import Header from './pages/Shared/Header/Header';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Appointment from './pages/Home/Appointment/Appointment';
import ErrorFound from './pages/ErrorFound/ErrorFound';
// import Footer from './pages/Shared/Footer/Footer';
import SitBooking from './pages/SitBooking/SitBooking';
import AuthProvider from './contexts/AuthProvider';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AddTreatments from './pages/AddTreatments/AddTreatments';
import Payment from './pages/Payment/Payment';
import ManageTreatments from './pages/ManageTreatments/ManageTreatments';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          {/* Header route  */}
          {/* <Header></Header> */}

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

            <PrivateRoute path="/sitbooking/:bookingId">
              <SitBooking></SitBooking>
            </PrivateRoute>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <PrivateRoute path="/addTreatments">
              <AddTreatments></AddTreatments>
            </PrivateRoute>

            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute path="/manageTreatments">
              <ManageTreatments></ManageTreatments>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="*">
              <ErrorFound></ErrorFound>
            </Route>

          </Switch>
          {/* footer route */}
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
