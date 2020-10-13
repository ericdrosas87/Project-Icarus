import React from "react";

function Wrapper(parts) {
  return <main className="wrapper">{parts.children}</main>;
}

export default Wrapper;
