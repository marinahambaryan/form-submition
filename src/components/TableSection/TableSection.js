//libraries
import React from "react";

//components
import SectionTitle from "../SectionTitle/SectionTitle";
import Table from "./Table/Table";

function TableSection() {
  return (
    <div className="TableSection">
      <SectionTitle title="Table" />
      <Table />
    </div>
  );
}

export default TableSection;
