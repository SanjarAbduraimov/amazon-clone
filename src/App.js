import Header from "./components/Header"
import "./App.css"
import Home from "./components/Home";
// import Auth from "./components/Auth";
import Checkout from "./components/Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Auth /> */}
          <Route path="/checkout" >
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
