import React, { Fragment } from "react";
import { Box, HStack, Text, Icon, Tooltip } from "@chakra-ui/react";
import { FaDesktop } from "react-icons/fa";

import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";

interface PageProps {
  toggleSidebar: () => void;
}

const PageHeader: React.FC<PageProps> = (props: PageProps) => {
  const { toggleSidebar } = props;
  return (
    <Fragment>
      <Box p={4} d="flex" justifyContent="space-between">
        <Text fontWeight="bold" lineHeight="42px">
          Bench Routes
        </Text>
        <HStack>
          <Tooltip label="Toggle Full Screen">
            <div>
              <Icon
                cursor="pointer"
                as={FaDesktop}
                h={5}
                w={5}
                onClick={toggleSidebar}
              />
            </div>
          </Tooltip>
          <ColorModeSwitcher />
        </HStack>
      </Box>
    </Fragment>
  );
};

export default PageHeader;
