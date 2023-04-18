import { createUseStyles } from 'react-jss'
import { pallet } from '../utils'

const useStyles = createUseStyles({
  root: {
    maxWidth: '1450px',
    margin: '0 auto',

    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
  },
})

export default useStyles
