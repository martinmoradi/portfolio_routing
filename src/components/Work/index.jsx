import React, { useState, useEffect } from "react";
import dataWorks from "../../data/DataWorks";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Work = () => {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState();

  useEffect(() => {
    const foundWork = dataWorks.find((work) => work.slug === workSlug);
    setCurrentWork(foundWork);
  }, [workSlug]);

  return (
    <div>
      {currentWork && <h2>Titre : {currentWork.slug}</h2>}
      { currentWork &&
        currentWork.titles.length &&
        currentWork.titles.map((title) => <h4>{title}</h4>)}
    </div>
  );
};

export default Work;
