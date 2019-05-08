import React from "react";
import { COUNT } from "./lib";

export default () => {
  return (
    <div>
      <div>It should say 20 if Normal</div>
      <div>It should say 100 if Mocked</div>
      {COUNT}
    </div>
  );
};
