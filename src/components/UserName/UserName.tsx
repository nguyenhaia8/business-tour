import {Image} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import styles from '@/styles/UserName.module.scss'
import {selectUsersState} from '@/store/usersSlice'
import {useSelector} from 'react-redux'
interface IUser {
  name: string
  value: string
  avt: string
}

const userDefault: IUser = {
  name: '',
  value: '',
  avt: '',
}

export const UserName = (props: {value: string}) => {
  const [user, setUser] = useState({} as IUser)
  const users = useSelector(selectUsersState)

  useEffect(() => {
    const findUser = (value: string): IUser => {
      if (!users) return userDefault
      if (!users.length) return userDefault

      const user = users.find((item: IUser) => {
        return item.value === value
      })

      if (user) return user
      return userDefault
    }
    const user = findUser(props.value)
    setUser(user)
  }, [props.value, users])

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
