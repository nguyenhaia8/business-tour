import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from '@chakra-ui/react'
import {useMemo} from 'react'
import {UserName} from '../UserName'

import styles from '@/styles/User.module.scss'
interface TableProps {
  title: string
  listItem: Item[]
}

interface Item {
  date: number
  debtorName: string
  rank: number
  score: number
}

export const TableContent = (props: TableProps) => {
  const {title, listItem} = props
  const listItemSorted = listItem.sort((a: any, b: any) => {
    if (a.date > b.date) return -1
    if (b.date > a.date) return 1
    return 0
  })

  const totalScore = useMemo(() => {
    const total = listItem.reduce((acc, item) => acc + item.score, 0)
    return total
  }, [listItem])

  const formatDate = (time: number) => {
    const date = new Date(time)
    return date.toLocaleString()
  }
  return (
    <Box>
      <Flex
        gap="5px"
        width="150px"
        padding="10px"
        borderRadius="5px"
        flexDirection="column"
        marginBottom="5px"
        className={styles['glass-morphism']}
      >
        <Box fontWeight="bold" textAlign="center" fontSize="30px">
          {totalScore}
        </Box>

        <Flex flexDirection="column">
          <Box fontWeight="bold" textAlign="center">
            {title}
          </Box>
        </Flex>
      </Flex>

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
                Deptor
              </Th>
              <Th width="fit-content" whiteSpace="nowrap">
                Rank
              </Th>
              <Th width="fit-content" whiteSpace="nowrap">
                Score
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {listItemSorted?.map((item, index) => (
              <Tr
                key={index}
                whiteSpace="nowrap"
                bg={item.score > 0 ? 'green.100' : 'red.100'}
              >
                <Td width="fit-content" whiteSpace="break-spaces">
                  {formatDate(item.date)}
                </Td>
                <Td width="fit-content" whiteSpace="break-spaces">
                  <UserName value={item.debtorName}></UserName>
                </Td>
                <Td width="fit-content" whiteSpace="break-spaces">
                  {item.rank}
                </Td>
                <Td width="fit-content" whiteSpace="break-spaces">
                  {item.score}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
