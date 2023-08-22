import {
  Box,
  Divider,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import {User} from '../components/User'
import {History} from '../components/History'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles['user-main-page']}>
        <div className={styles['main-box__wrapper']}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            fontSize="40px"
            fontWeight="bold"
            height="100px"
            marginBottom="30px"
            color="white"
          >
            BUSINESS TOUR LEDGER
          </Box>
          <Flex justifyContent="center">
            <Tabs
              variant="soft-rounded"
              colorScheme="green"
              position="relative"
            >
              <TabList justifyContent="center" gap="20px" marginBottom="2rem">
                <Tab width={200} bg="#fff">
                  History
                </Tab>
                <Tab width={200} bg="#fff">
                  Ledger
                </Tab>
              </TabList>
              <Divider></Divider>
              <TabPanels>
                <TabPanel>
                  <History />
                </TabPanel>
                <TabPanel>
                  <User />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </div>
      </div>
    </>
  )
}
