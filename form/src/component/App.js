import React from 'react'
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function App() {
  return (
    <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100 mt-5" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <AuthProvider>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </AuthProvider>
          </Switch>
        </Router>
      </div>
    </Container>
  )
}
