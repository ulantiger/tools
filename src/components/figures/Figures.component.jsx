import React, { useContext } from "react";
// import { invertColor } from "../../store/util";
import { NeoContext } from "../../store/context";
import Boxes from "./boxes/boxes.component";
import "./figures.styles.scss";

const Figures = () => {
  const {
          state: { BACKGROUND_COLOR },
        } = useContext(NeoContext);

  return (
    <div
      className="figureBox flat"
      style={{
        background: BACKGROUND_COLOR,
        // color: invertColor(BACKGROUND_COLOR),
      }}
    >
      {/* <h2 style={{textAlign: 'center'}}>List of figures</h2> */}
      <Boxes />
    </div>
  );
};

export default Figures;
