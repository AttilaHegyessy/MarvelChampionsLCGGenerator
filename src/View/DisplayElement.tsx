import React from "react";

interface IDisplayElement {
  value: string;
}

export const DisplayElement = ({ value }: IDisplayElement) => {
  return <p>{value}</p>;
};
