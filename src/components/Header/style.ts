import { createUseStyles } from 'react-jss'
import { pallet } from '../../utils'

const useStyles = createUseStyles({
  root: {
    '& .ant-layout-header': {
      backgroundColor: '#008080',
    },

    '& .ant-menu .ant-menu-item.ant-menu-item-selected': {
      backgroundColor: 'black',
    },

    '& .ant-menu': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#008080',

      '& .ant-menu-title-content': {
        color: 'white',
      },

      '& .ant-menu-item ': {
        display: 'flex',
        justifyContent: 'center',

        padding: '0 3px 0 3px',
      },
    },
    '& .ant-menu-item': {
      backgroundColor: '#008080',
      minWidth: '80px',
    },

    '& .ant-menu-dark.ant-menu-vertical>.ant-menu-item:hover': {
      backgroundColor: 'grey',
    },
  },
  menu: {
    '@media screen and (max-width: 1180px)': {
      display: 'none !important',
    },
    '& .ant-menu-item:last-child': {
      width: '80px',
    },
  },
  buttons: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'row',
  },

  overlay: {
    '& .ant-dropdown-menu': {
      backgroundColor: 'black',
    },

    '& .ant-dropdown-menu-item': {
      width: '250px',
      color: 'white',
    },
  },
  dropmenu: {
    display: 'none',
    width: '64px',
    backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,

    '@media screen and (max-width: 1180px)': {
      display: 'block',
    },
  },
  menuDropText: {
    display: 'flex',
    justifyContent: 'center',
    color: (isDarkMode: boolean) => pallet(isDarkMode).color,
  },
  changedLog: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuWithLogo: {
    display: 'flex',
  },
  logo: {
    display: 'flex',
    position: 'static',
    padding: '0 2em 0 2em',
    cursor: 'pointer',
  },
  imgLogo: {
    width: '128px',
    height: '64px',
    minHeight: '64px',
    maxHeight: '64px',
    border: '0.1px solid;',
    borderRadius: '2px',
    color: 'black',
  },

  modal: {
    cursor: 'pointer',
    top: '0px',
    maxWidth: 'none',
    paddingBottom: '0px',
    height: '100vh',

    '&.ant-modal': {
      top: 'none',
    },

    '& .ant-modal-content': {
      height: '100vh',
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },

    '& .ant-modal-header': {
      backgroundColor: (isDarkMode: boolean) => pallet(isDarkMode).backGround,
    },

    '& .ant-modal-title': {
      display: 'flex',
      justifyContent: 'center',
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },

    '& .ant-modal-close-x': {
      color: (isDarkMode: boolean) => pallet(isDarkMode).color,
    },
  },

  modalText: {
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
  },

  modalShowButton: {
    cursor: 'pointer',
    display: 'none',
    backgroundColor: 'transparent',
    width: '64px',
    height: '64px',
    borderColor: 'transparent',
    marginLeft: 'auto',
    margin: '0 30px',

    '@media screen and (max-width: 1180px)': {
      display: 'block',
    },
  },
  menuOutlined: {
    fontSize: '32px',
  },
  wrap: {},
  switcherText: {
    position: 'relative',
    top: '20px',
  },
  blackSwitcherText: {
    color: 'black',
  },
  whiteSwitcherText: {
    color: 'white',
  },
})

export default useStyles
