import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  LoginForm: {
    minHeight: 'calc(100vh - 134px)',
    padding: '5em',
    display: 'block',

    '&media screen and (max-width: 975px)': {
      padding: '4em',
    },
  },
  input: {
    width: '400px',
  },
  errorText: {},
  loginButtonContainer: {},
  loginButton: {
    marginTop: '30px',
    width: 'auto',
    height: '30px',
    borderColor: '#ccc #ccc',
    borderBottom: '0rem solid ',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: 'black',
    display: 'inline-block',
    textAlign: 'start',
    margin: '1em 0 0 0 ',
    font: '150 15px system-ui',
    fontStyle: 'italic',
    fontSize: '15px',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    backgroundColor: 'grey',
  },
  registerNowLink: {
    color: 'black',
    fontWeight: 'bold',
  },
})

export default useStyles
