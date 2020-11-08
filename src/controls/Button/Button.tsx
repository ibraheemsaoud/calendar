import * as React from "react";
import { Button as AntDButton } from "antd";
import { ButtonProps } from "antd/lib/button";

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <AntDButton {...props} />
  );
};
