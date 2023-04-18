import { createUseStyles } from 'react-jss'
import { pallet } from '../../utils'

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,

    '& .ant-card-cover': {
      display: 'flex',
      width: '100%',
      height: '250px',
    },
  },
  '& .ant-layout-content content': {
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
  },
  button: {
    maxHeight: '30px',
  },
})

export default useStyles
