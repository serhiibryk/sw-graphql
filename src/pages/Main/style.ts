import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 134px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: '100%',
    paddingLeft: '40px',

    '& .ant-card-cover': {
      display: 'flex',
      width: '100%',
      height: '250px',
    },
  },
  '& .ant-layout-content content': {
    backgroundColor: 'grey',
  },
  button: {
    maxHeight: '30px',
  },
})

export default useStyles
