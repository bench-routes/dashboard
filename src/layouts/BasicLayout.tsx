// default imports.
import React from "react";

interface PageProps {
  children: React.ReactElement;
}

export default function BasicLayout(props: PageProps): React.ReactElement {
  return props.children;
}
