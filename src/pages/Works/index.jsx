import React, { useState, useEffect } from "react";
import WorksNav from "../../components/WorksNav";
import DataWorks from "../../data/DataWorks";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import Work from "../../components/Work"

const Works = () => {

  return (
    <div>
      <h1>Welcome to the works page. Please, select a category.</h1>
      <WorksNav />
      <Switch>
        <Route path="/works/:workSlug">
          <Work />
        </Route>
      </Switch>
    </div>
  );
};

export default Works;
