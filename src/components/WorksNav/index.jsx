import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import DataWorks from "../../data/DataWorks";

const WorksNav = () => {

  return (
    <>
      <nav>
        <h1>Je suis sur WorksNav</h1>
        {DataWorks.map((data, index) => (
          <div>
            <Link to={`/works/${data.slug}`} key={index}>
              {data.slug}
            </Link>
            <br />
          </div>
        ))}
      </nav>
    </>
  );
};

export default WorksNav;
