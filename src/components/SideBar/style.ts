import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    '& .ant-layout-sider-children': {
      backgroundColor: 'grey',
      width: '300px',
    },
    '&.hide': {
      display: 'none',
    },
  },
  sideBar: {
    backgroundColor: 'black',
    border: '1px solid black',
    borderRadius: '4px',
    minHeight: 'calc(100vh - 134px)',
    padding: '20px',
    color: 'white',
  },
})

export default useStyles
