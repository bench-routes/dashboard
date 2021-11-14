// default imports.
import React from "react";
import { GlobalStore } from "../store/global";
import { TimeQuerierStore } from "../store/timeQuerier";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return (
    <GlobalStore.Provider>
      <TimeQuerierStore.Provider>{props.children}</TimeQuerierStore.Provider>
    </GlobalStore.Provider>
  );
};

export default BasicLayout;
