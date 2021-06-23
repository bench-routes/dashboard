// default imports.
import React, { Fragment } from "react";
import { GlobalStore } from "../store/global";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Fragment>
      <GlobalStore.Provider>{props.children}</GlobalStore.Provider>
    </Fragment>
  );
};

export default BasicLayout;
