import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Flex,
} from '@chakra-ui/react'
import {TriangleDownIcon} from '@chakra-ui/icons'
import {TableContent} from '../TableContent'
import {useState, useEffect} from 'react'
import axiosInstance from '@/services/axiosInstance'
import styles from '@/styles/User.module.scss'

interface IUser {
  name: string
  value: string
  avt: string
}

declare global {
  interface Window {
    __bt_users: any
  }
}

export const User = () => {
  const [res, setResponse] = useState([] as any[])
  const [filter, setFilter] = useState('')
  const [users, setUsers] = useState([] as IUser[])
  const [snapshot, setSnapshot] = useState([] as any[])

  const handleFilter = (name: string) => {
    if (name === 'All') {
      setResponse(snapshot)
      setFilter(name)
    } else {
      const newRes = snapshot.filter((item) => item.name === name)
      setFilter(name)
      setResponse(newRes)
    }
  }

  const renderTables = () => {
    if (res?.length)
      return (
        <>
          {res.map((item, index) => {
            return (
              <Box
                key={index}
                justifyContent="center"
                maxW="1000px"
                marginTop="30px"
                paddingX="100px"
              >
                <TableContent title={item.name} listItem={item.scoreDetails} />
              </Box>
            )
          })}
        </>
      )
    return (
      <div className={styles['no-data']}>
        <p>No data available!</p>
      </div>
    )
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const usersResp = await axiosInstance.get('users')
        const ledgerResp = await axiosInstance.get('ledger')
        setUsers(usersResp.data)
        // HOOK
        window.__bt_users = usersResp.data
        setSnapshot(ledgerResp.data)
        setResponse(ledgerResp.data)
      } catch (error) {
        console.log('🚀 ~ file: User.tsx:46 ~ fetchData ~ error:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Box paddingX="100px">
        <Flex flexDirection="row" alignItems="center">
          <div className={styles.legend}>Filter by Name:</div>
          <Menu>
            <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
              {filter ? filter : 'All'}
            </MenuButton>
            <MenuList>
              <MenuItem minH="40px" onClick={() => handleFilter('All')}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://i.pravatar.cc/300"
                  alt="All avt"
                  mr="12px"
                />
                <span>All</span>
              </MenuItem>
              {users.map((item, index) => (
                <MenuItem
                  minH="48px"
                  key={index}
                  onClick={() => handleFilter(item.value)}
                >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={item.avt}
                    alt="avt"
                    mr="12px"
                  />
                  <div className={styles['filter-name__container']}>
                    <span>{item.value}</span>
                    <span className={styles['filter-name__sub']}>
                      {item.name}
                    </span>
                  </div>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {renderTables()}
    </>
  )
}
