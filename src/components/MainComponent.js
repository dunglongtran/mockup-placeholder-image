import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Flex
} from "@chakra-ui/core";
import { FacemaskContext, useStore } from "./context";
import { ChooseColor } from "./ChooseColor";
import { InputImage } from "./InputImage";
import { FaceMask } from "./Facemask";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
export const Main = props => {
  const [state] = useStore(); //useReducer(reducer, initialState);
  return (
    <FacemaskContext.Provider value={state}>
      <Flex align="center" height="100%">
        <FaceMask />
        <Stack height="100%" width={["30%"]}>
          <Feature title={"Cloth Facemask"} />
          <Tabs variant="enclosed" isFitted>
            <TabList>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Images</Tab>
              <Tab _selected={{ color: "white", bg: "green.400" }}>
                Customize
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <InputImage />
              </TabPanel>
              <TabPanel>
                <ChooseColor />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Flex>
    </FacemaskContext.Provider>
  );
};
