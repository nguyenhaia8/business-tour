import {
  Box,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import {User} from '../components/User'
import {History} from '../components/History'
import styles from '@/styles/Home.module.scss'
import {useEffect, useState} from 'react'
import axiosInstance from '@/services/axiosInstance'
import {setUsers} from '@/store/usersSlice'
import {useDispatch} from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const usersResp = await axiosInstance.get('users')
        dispatch(setUsers(usersResp.data))
        setTimeout(() => {
          setIsLoading(false)
        }, 1800)
      } catch (error) {
        console.log('🚀 ~ file: User.tsx:46 ~ fetchData ~ error:', error)
      }
    }
    fetchData()
  })

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
            <div
              className={styles.progress}
              style={{display: loading ? 'block' : 'none'}}
            ></div>
            <div
              style={{display: loading ? 'none' : 'block', transition: '200ms'}}
            >
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
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}
