
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  
  pagination: {
    // marginTop: '20px',
    // marginBottom: '30px',
    // width: '100%',
    padding:'0 50px',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
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
    "& .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-circular.Mui-selected": {
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
    padding:'20px 50px'
  }
}));

export default useStyles;