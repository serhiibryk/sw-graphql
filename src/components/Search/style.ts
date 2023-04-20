import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {},
  search: {
    width: '350px',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 3em 0 1.5em',
    marginTop: '15px',
    backgroundColor: 'grey',
    color: 'white',

    '& .ant-input': {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
})

export default useStyles
