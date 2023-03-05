import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { loading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={loading} onClick={() => handlePage("DEC")}>
        Prev
      </button>
      <p>
        {page + 1} og {nbPages}
      </p>
      <button disabled={loading} onClick={() => handlePage("INC")}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
