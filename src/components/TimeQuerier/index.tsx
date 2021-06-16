import React from "react";
import {
  Text,
  VStack,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useStyleConfig,
  Box,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import Datetime from "react-datetime";

const TimeQuerier: React.SFC = () => {
  const styles = useStyleConfig("DateTime", {});
  const handleChange = (e: any) => {
    console.log(e);
  };
  return (
    <VStack mt={4}>
      <HStack pb="1" w="100%" justifyContent="space-between">
        <Text>Start Time</Text>

        <Box sx={styles}>
          <Datetime
            inputProps={{ className: "class" }}
            onChange={handleChange}
          />
        </Box>
      </HStack>
      <HStack pb="1" w="100%" justifyContent="space-between">
        <Text>End Time</Text>
        <Box sx={styles}>
          <Datetime
            inputProps={{ className: "class" }}
            onChange={handleChange}
          />
        </Box>
      </HStack>
      <HStack pb="1" w="100%" justifyContent="space-between">
        <Text>Step Time</Text>
        <NumberInput
          fontFamily="Monaco"
          w="60%"
          size="sm"
          defaultValue={15}
          min={1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <HStack pt="2" pb="1" w="100%">
        <Button variant="fetch" w="60%" size="md">
          FETCH
        </Button>
      </HStack>
    </VStack>
  );
};

export default TimeQuerier;
