// default imports.
import React, { Fragment } from "react";
import { SelectedMachine } from "../store/machineContainer";

interface PageProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<PageProps> = (props: PageProps) => {
  return (
    <Fragment>
      <SelectedMachine.Provider>{props.children}</SelectedMachine.Provider>
    </Fragment>
  );
};

export default BasicLayout;
