// default imports.
import React, { Fragment } from "react";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return <Fragment>{props.children}</Fragment>;
};

export default BasicLayout;
