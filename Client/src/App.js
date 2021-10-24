import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Home from "./Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Account from "./components/Dashboard/Account/Account";
import Profile from "./components/Dashboard/Profile/Profile";
import About from "./components/About";
import Terms from "./components/Dashboard/Sitting/Terms";
import Privacy from "./components/Dashboard/Sitting/Privacy";
import PrivateRoute from "./PrivateRoute";
import JobPost from "./components/job/JobPost";
import JobList from "./components/job/JobList";
import Job from "./components/job/Job";
import Freelancer from "./components/Freelancer";
import ClientProfilePost from"./components/User/Client";
import ClientProfile from"./components/User/ClientProfile";
import ProfileList from "./components/Dashboard/Profile/ProfileList";


import Messenger from "./components/Chat/messenger/Massenger";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientProfileUser from "./components/User/ClientProfileUser";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/jobList" exact component={JobList} />
          <Route path="/freelancer/:id" exact component={Freelancer} />
          <Route path="/client/:id" exact component={ClientProfileUser} />
          <Route path="/profileList" exact component={ProfileList} />
          <Route path="/job/:id" exact component={Job} />
          <Route path="/messenger" component={Messenger} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/clientProfile/:id" exact component={ClientProfile} />
          <PrivateRoute exact path="/clientProfilePost" component={ClientProfilePost} />
          <PrivateRoute exact path="/jobPost" component={JobPost} />
          <Route path="/about" exact component={About} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy" exact component={Privacy} />
        </Switch>
      </Router>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
