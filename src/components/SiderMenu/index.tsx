import React, { Fragment, useState } from "react";

import { VStack, Icon, Text, Collapse, Tooltip } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { menu } from "../../utils/menu";
import {
  renderCollapsedAccordion,
  renderExpandedAccordion,
  getIcon,
} from "./helpers";

const SiderMenu: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleToggle = () => setDrawerOpen(!isDrawerOpen);
  const { pathname } = useLocation();
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
            color="#fff"
          />
        </VStack>
        <VStack spacing={6} mx={2} textAlign="center">
          {menu.map((menuItem) => {
            if (!menuItem.routes) {
              const { name, path } = menuItem;
              return (
                <Tooltip placement="right" key={path} label={name}>
                  <Link to={path}>
                    <Icon
                      as={getIcon(name)}
                      w={6}
                      h={6}
                      {...(path === pathname
                        ? { color: "brand.active" }
                        : { color: "#fff" })}
                    />
                  </Link>
                </Tooltip>
              );
            } else return renderCollapsedAccordion(menuItem, pathname);
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
        color="#fff"
      />
      <VStack spacing={6} mx={8} align="start">
        {menu.map((menuItem) => {
          const { name, path } = menuItem;
          if (!menuItem.routes) {
            return (
              <Link key={path} to={path}>
                <Text
                  {...(path === pathname
                    ? { color: "brand.active" }
                    : { color: "#fff" })}
                  key={menuItem.path}
                  fontWeight="bold"
                  fontSize="md"
                >
                  {name}
                </Text>
              </Link>
            );
          } else return renderExpandedAccordion(menuItem, pathname);
        })}
      </VStack>
    </Collapse>
  );
};

export default SiderMenu;
