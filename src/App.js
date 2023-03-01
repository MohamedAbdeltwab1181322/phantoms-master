import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Dummy from "./pages/dummy";
import Header from "./containers/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dum" component={Dummy} />
      </Switch>
    </div>
  );
}

export default App;
