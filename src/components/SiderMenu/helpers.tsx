import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { MenuType } from "../../utils/menu";
import {
  FaBell,
  FaChartLine,
  FaHome,
  FaRegPlusSquare,
  FaRoute,
  FaRss,
  FaSatelliteDish,
  FaSignal,
  FaTools,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

export const renderExpandedAccordion = (
  root: MenuType,
  currPath: string
): JSX.Element => {
  const { path, routes, name } = root;
  if (root.routes) {
    return (
      <Accordion key={path} allowToggle>
        <AccordionItem>
          <AccordionButton pl={0}>
            <Text key={path} fontWeight="bold" fontSize="md">
              {name}
            </Text>
          </AccordionButton>
          <AccordionPanel pb={4}>
            {routes?.map((route: MenuType) =>
              renderExpandedAccordion(route, currPath)
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else
    return (
      <Link key={path} to={path}>
        <Text
          {...(path === currPath && { color: "tomato" })}
          key={path}
          fontWeight="bold"
          fontSize="sm"
          my={4}
        >
          {name}
        </Text>
      </Link>
    );
};

export const renderCollapsedAccordion = (
  root: MenuType,
  currPath: string
): JSX.Element => {
  const { path, routes, name } = root;
  if (root.routes) {
    return (
      <Accordion key={path} allowToggle>
        <AccordionItem>
          <Tooltip placement="right" key={path} label={name}>
            <AccordionButton>
              <Icon as={getIcon(name)} w={6} h={6} />
            </AccordionButton>
          </Tooltip>
          <AccordionPanel pb={4}>
            {routes?.map((route: MenuType) =>
              renderCollapsedAccordion(route, currPath)
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else
    return (
      <Tooltip placement="right" key={path} label={name}>
        <Link to={path}>
          <Icon
            {...(path === currPath && { color: "tomato" })}
            as={getIcon(name)}
            w={5}
            h={5}
            my={2}
          />
        </Link>
      </Tooltip>
    );
};

export const getIcon = (key: string): IconType => {
  switch (key) {
    case "Home":
      return FaHome;
    case "Analytics":
      return FaChartLine;
    case "Input":
      return FaRegPlusSquare;
    case "Tests":
      return FaRoute;
    case "Config":
      return FaTools;
    case "Ping":
      return FaSignal;
    case "FPing":
      return FaSatelliteDish;
    case "Jitter":
      return FaRss;
    default:
      return FaBell;
  }
};
