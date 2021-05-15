import React from "react";
import ContentOutline from "../ContentOutline";

import SupplierList from "./SupplierList";

function Supplier() {
  return (
    <ContentOutline heading="Supplier">
      <SupplierList />
    </ContentOutline>
  );
}

export default Supplier;
