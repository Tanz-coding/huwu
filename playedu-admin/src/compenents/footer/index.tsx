import React from "react";

interface PropInterface {
  type?: string;
}

export const Footer: React.FC<PropInterface> = ({ type }) => {
  void type;
  return null;
};
