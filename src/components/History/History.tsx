import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import {CheckCircleIcon} from '@chakra-ui/icons'
import {UserName} from '../UserName'
import styles from '@/styles/History.module.scss'
import {useState, useEffect} from 'react'
import axiosInstance from '@/services/axiosInstance'

export const History = () => {
  const [data, setData] = useState([] as any[])
  const formatDate = (time: number) => {
    const date = new Date(time)
    return date.toLocaleString()
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const ledgerResp = await axiosInstance.get('history')
        setData(ledgerResp.data)
      } catch (error) {
        console.log('🚀 ~ file: History.tsx:27 ~ fetchData ~ error:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Box>
        {/*<div className={styles.legend}>History</div>*/}
        <TableContainer
          padding="30px"
          borderRadius="10px"
          className={styles['glass-morphism']}
        >
          <Table>
            <Thead>
              <Tr>
                <Th width="fit-content" whiteSpace="nowrap" fontWeight="bold">
                  Date
                </Th>
                <Th width="fit-content" whiteSpace="nowrap">
                  Rank 1
                </Th>
                <Th width="fit-content" whiteSpace="nowrap">
                  Rank 2
                </Th>
                <Th width="fit-content" whiteSpace="nowrap">
                  Rank 3
                </Th>
                <Th width="fit-content" whiteSpace="nowrap">
                  Rank 4
                </Th>
                <Th width="fit-content" whiteSpace="nowrap">
                  Win x2
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item, index) => (
                <Tr key={index} whiteSpace="nowrap">
                  <Td width="fit-content" whiteSpace="break-spaces">
                    {formatDate(item.date)}
                  </Td>
                  <Td width="fit-content" whiteSpace="break-spaces">
                    <UserName value={item.rank1}></UserName>
                  </Td>
                  <Td width="fit-content" whiteSpace="break-spaces">
                    <UserName value={item.rank2}></UserName>
                  </Td>
                  <Td width="fit-content" whiteSpace="break-spaces">
                    <UserName value={item.rank3}></UserName>
                  </Td>
                  <Td width="fit-content" whiteSpace="break-spaces">
                    <UserName value={item.rank4}></UserName>
                  </Td>
                  <Td width="fit-content" whiteSpace="break-spaces">
                    {item.isDouble ? (
                      <CheckCircleIcon
                        color="#4CAF50"
                        w={6}
                        h={6}
                      ></CheckCircleIcon>
                    ) : (
                      ''
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
