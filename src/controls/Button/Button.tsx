import * as React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export const MainContainer = (props: ButtonProps) => {
  return (
    <Button {...props} />
  );
}