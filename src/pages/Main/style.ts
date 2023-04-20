import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 134px)',

    width: '100%',
    backgroundColor: 'grey',
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
  searchWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 0 20px 0',

    '& .ant-select-selector': {
      width: '300px',
      marginLeft: '30px',
    },
  },
  search: {
    width: '300px',
  },
  filter: {},
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

export default useStyles
