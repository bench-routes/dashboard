import React, { Fragment, useState } from "react";

import { VStack, Icon, Text, Collapse } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { menu } from "../../utils/menu";
import {
  renderCollapsedAccordion,
  renderExpandedAccordion,
  getIcon,
} from "./helpers";

const SiderMenu: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleToggle = () => setDrawerOpen(!isDrawerOpen);
  // returns early.
  if (!isDrawerOpen) {
    return (
      <Fragment>
        <VStack mt={6}>
          <Icon
            cursor="pointer"
            as={FaAngleRight}
            w={6}
            h={6}
            onClick={handleToggle}
            mb={10}
          />
        </VStack>
        <VStack spacing={6} mx={2} textAlign="center">
          {menu.map((menuItem) => {
            if (!menuItem.routes) {
              const { name } = menuItem;
              return <Icon as={getIcon(name)} w={6} h={6} />;
            } else return renderCollapsedAccordion(menuItem);
          })}
        </VStack>
      </Fragment>
    );
  }
  return (
    <Collapse in={isDrawerOpen}>
      <Icon
        cursor="pointer"
        mx={8}
        mt={6}
        as={FaAngleLeft}
        w={6}
        h={6}
        mb={10}
        onClick={handleToggle}
      />
      <VStack spacing={6} mx={8} align="start">
        {menu.map((menuItem) => {
          if (!menuItem.routes) {
            return (
              <Text key={menuItem.path} fontWeight="bold" fontSize="md">
                {menuItem.name}
              </Text>
            );
          } else return renderExpandedAccordion(menuItem);
        })}
      </VStack>
    </Collapse>
  );
};

export default SiderMenu;
