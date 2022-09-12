import './App.css';
import Home from './screens/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './screens/About/About'
import Login from './screens/Login/Login'
// import Admin from './screens/Admin/Admin'
import HomeNav from './Router/HomeNav/Homenav'
function App() {
  return (
    <Router>
        <div className="App">
            <div className="home__nav">
                <div>
                  <HomeNav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
  );
}
export default App;