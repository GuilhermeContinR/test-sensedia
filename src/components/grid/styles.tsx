
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: 'flex',
    minHeight:'75vh'
  },
  root: {
    backgroundColor: '#0e1a64',
  },
  title: {
    fontSize: '16px',
    minHeight: '50px',
    fontFamily:'Roboto',
    fontWeight:'500'
  },
  body: {
    fontSize: '14px',
    fontWeight: '400',
    color:'#919191',
    lineHeight:'20px'
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    minHeight: '300px',
    borderRadius: '5px',
    lineHeight: 1,
    border: '1px solid rgba(145, 145, 145, .5)',
    boxSizing:'border-box',
  },
  author: {
    fontSize: '14px',
    fontWeight: '400',
    color:'#6A6A6A',
    margin:'0px'
  },
  date: {
    alignSelf: 'flex-start',
    marginTop: 'auto',
    fontSize: '14px',
    fontWeight: '400',
    color:'#6A6A6A',
  },
  pagination: {
    // marginTop: '20px',
    // marginBottom: '30px',
    // width: '100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignSelf:'flex-end',
    "& .MuiPaginationItem-root:focus": {
      backgroundColor: "#5C21AA",
      color:"#FFF"
    },
    "& .MuiPaginationItem-root": {
      border:'none'
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#5C21AA",
      color:"#FFF"
    },
    "& .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-outlined.MuiPaginationItem-circular.Mui-selected": {
      backgroundColor: "#5C21AA",
      color:"#FFF"
    }

  },
  result:{
    fontFamily:'Roboto',
    fontWeight:'500',
    color:'#6A6A6A',
    fontSize:'14px',
    lineHeight:'16px',
    alignSelf:'flex-end',
  },
  resultGrid:{
    justifyContent:"space-between",
    margin:'auto'
  }
}));

export default useStyles;