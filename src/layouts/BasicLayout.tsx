// default imports.
import React, { Fragment } from "react";
import { GlobalStore } from "../store/global";
import { TimeQuerierStore } from "../store/timeQuerier";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Fragment>
      <GlobalStore.Provider>
        <TimeQuerierStore.Provider>{props.children}</TimeQuerierStore.Provider>
      </GlobalStore.Provider>
    </Fragment>
  );
};

export default BasicLayout;
