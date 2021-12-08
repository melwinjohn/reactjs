import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AutoSuggest from "./pages/autosuggest/AutoSuggest";
import States from "./pages/states/States";
import BlockUser from "./pages/blockuser/BlockUser";
import ActiveUsers from "./pages/activeusers/ActiveUsers";
import CollapsibleTable from "./pages/transactions/Transactions"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/autosuggest">
            <AutoSuggest></AutoSuggest>
          </Route>
          <Route path="/states">
            <States></States>
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/blockuser">
            <BlockUser />
          </Route>
          <Route path="/activeusers">
            <ActiveUsers />
          </Route>
          <Route path="/transactions">
            <CollapsibleTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
