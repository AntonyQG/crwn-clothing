import "./App.css";
import HomePage from "./page/homepage/homepage.component.jsx";
import ShopPage from "./page/shop/shop.component.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
