import {Box, Image, Flex} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import styles from '@/styles/UserName.module.scss'
interface IUser {
  name?: string
  value?: string
  avt?: string
}

const userDefault: IUser = {
  name: '',
  value: '',
  avt: '',
}

export const UserName = (props: {value: string}) => {
  const [user, setUser] = useState({} as IUser)

  const findUser = (value: string) => {
    const users = window.__bt_users
    if (!users) return userDefault
    if (!users.length) return userDefault
    const user = users.find((item: IUser) => {
      return item.value === value
    })
    return user
  }

  useEffect(() => {
    setTimeout(() => {
      const user = findUser(props.value)
      setUser(user)
    }, 300)
  }, [props.value])

  return (
    <div className={styles.username}>
      <div className={styles.avt}>
        <Image
          boxSize="2rem"
          borderRadius="full"
          src={user.avt}
          alt="avt"
          mr="12px"
        />
      </div>
      <div className={styles['name__container']}>
        <div className={styles.name}>{user.value}</div>
        <div className={styles.nickname}>{user.name}</div>
      </div>
    </div>
  )
}
