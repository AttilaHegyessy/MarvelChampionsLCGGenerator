import React from "react";
import { DisplayElement } from "./DisplayElement";

interface IAspect {
  aspectName: string;
}

const Aspect = ({ aspectName }: IAspect) => {
  return <>{<DisplayElement value={aspectName} />}</>;
};

export default Aspect;
