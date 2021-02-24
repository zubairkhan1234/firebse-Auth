import React from 'react'
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'


export default function App() {
  return (
    <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100 mt-5" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <AuthProvider>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute  path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </AuthProvider>
          </Switch>
        </Router>
      </div>
    </Container>
  )
}
