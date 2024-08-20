import React from "react";
import { useParams } from "react-router-dom";

const PastorsInfo = () => {
  const params = useParams();
  const currentPastor = params.id;
  console.log(currentPastor);
  return (
    <div className="pastors-info">
      <h1>Pastors Info</h1>
    </div>
  );
};

export default PastorsInfo;
