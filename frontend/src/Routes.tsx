import Dashboard from "pages/dashbord";
import Home from "pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;