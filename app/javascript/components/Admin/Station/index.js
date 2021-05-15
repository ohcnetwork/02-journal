import React from "react";
import ContentOutline from "../ContentOutline";

import StationList from "./StationList";

function Station() {
  return (
    <ContentOutline heading="Station">
      <StationList />
    </ContentOutline>
  );
}

export default Station;
