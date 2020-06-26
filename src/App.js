//libraries
import React from "react";

//style
import "./App.scss";

//components
import FormSection from "./components/FormSection/FormSection";
import TableSection from "./components/TableSection/TableSection";
import Dialog from "./components/Dialog/Dialog";

function App() {
  return (
    <div className="App">
      <Dialog />
      <FormSection />
      <TableSection />
    </div>
  );
}

export default App;
