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
import { useMemo } from 'react'

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
  const { title, listItem } = props
  const totalScore = useMemo(() => {
    const total = listItem.reduce((acc, item) => acc + item.score, 0)
    return total
  }, [listItem])
  const formatDate = (time: number) => {
    const date = new Date(time)
    return date.toDateString()
  }
  return (
    <Box>
      <Flex
        gap="5px"
        background="#fff6ed"
        width="150px"
        padding="10px"
        borderRadius="5px"
        flexDirection="column"
        marginBottom="5px"
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

      <TableContainer padding="30px" background="#d6f5e2" borderRadius="10px">
        <Table variant="striped" colorScheme="whatsapp">
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
            {listItem?.map((item, index) => (
              <Tr key={index} whiteSpace="nowrap">
                <Td width="fit-content" whiteSpace="break-spaces">
                  {formatDate(item.date)}
                </Td>
                <Td width="fit-content" whiteSpace="break-spaces">
                  {item.debtorName}
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
