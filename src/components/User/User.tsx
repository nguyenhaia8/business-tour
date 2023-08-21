import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import { result, listUser } from '@/data/score'
import { TableContent } from '../TableContent'
import { useState } from 'react'
export const User = () => {
  const [res, setResponse] = useState(result)
  const [filter, setFilter] = useState('')
  const handleFilter = (name: string) => {
    if (name === 'All') {
      setResponse(result)
      setFilter(name)
    } else {
      const newRes = result.filter((item) => item.name === name)
      setFilter(name)
      setResponse(newRes)
    }
  }
  return (
    <Box
      paddingBottom="20px"
      minH="100vh"
      backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://i.ytimg.com/vi/52r7rbtxuIQ/maxresdefault.jpg)"
      backgroundSize="100%"
      backgroundRepeat="repeat-y"
    >
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
        BUSINESS TOUR LEADERBOARD
      </Box>
      <Box paddingX="100px">
        <Menu>
          <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
            {filter ? filter : 'All'}
          </MenuButton>
          <MenuList>
            <MenuItem minH="40px" onClick={() => handleFilter('All')}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://placekitten.com/120/120"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>All</span>
            </MenuItem>
            {listUser.map((item, index) => (
              <MenuItem
                minH="48px"
                key={index}
                onClick={() => handleFilter(item.name)}
              >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>{item.name}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

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
    </Box>
  )
}
