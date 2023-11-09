import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme={"purple"}>

      <TabList>
        <Tab _selected={{ bg:'purple.400' , color:'white' }}> Account Info </Tab>
        <Tab _selected={{ bg: 'purple.400', color: 'white' }}> Task History </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
