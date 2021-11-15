// default imports.
import React from "react";
import { TimeQuerierStore } from "../store/timeQuerier";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return (
    <TimeQuerierStore.Provider>{props.children}</TimeQuerierStore.Provider>
  );
};

export default BasicLayout;
