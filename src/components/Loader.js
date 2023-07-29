import React from "react";
import PropagateLoader from "react-spinners/PacmanLoader";

function Loader() {

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="sweet-loading text-center">
        <PropagateLoader color="#000" css="" size={25} />
      </div>
    </div>
  );
}

export default Loader;
