import React from "react";
import { useParams } from "react-router-dom";
import pastorsInfo from "../pastors";

const PastorsInfo = () => {
  const params = useParams();
  const currentPastor = params.id;
  console.log(currentPastor);
  const findPastor = pastorsInfo.find((pastor) => pastor.id == currentPastor);
  console.log(findPastor);
  return (
    <div className="pastors-info">
      <h1>Pastors Info</h1>
    </div>
  );
};

export default PastorsInfo;
