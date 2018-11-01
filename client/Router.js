import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { HomePage, SecondPage} from "./pages"

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/secondpage" component={SecondPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Router
