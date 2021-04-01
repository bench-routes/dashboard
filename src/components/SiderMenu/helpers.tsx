import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Icon,
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

export const renderExpandedAccordion = (root: MenuType): JSX.Element => {
  if (root.routes) {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton pl={0}>
            <Text fontWeight="bold" fontSize="md">
              {root.name}
            </Text>
          </AccordionButton>
          <AccordionPanel pb={4}>
            {root.routes?.map((route: MenuType) =>
              renderExpandedAccordion(route)
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else
    return (
      <Text key={root.path} fontWeight="bold" fontSize="sm" my={4}>
        {root.name}
      </Text>
    );
};

export const renderCollapsedAccordion = (root: MenuType): JSX.Element => {
  if (root.routes) {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Icon as={getIcon(root.name)} w={6} h={6} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {root.routes?.map((route: MenuType) =>
              renderCollapsedAccordion(route)
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else return <Icon as={getIcon(root.name)} w={5} h={5} my={2} />;
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
