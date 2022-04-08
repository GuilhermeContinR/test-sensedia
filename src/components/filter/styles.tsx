
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button, { ButtonProps } from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#FFF',
  backgroundColor: '#5C21AA',
  borderRadius: '30px',
  height: '46px',
  maxWidth:'142px',
  '&:hover': {
    backgroundColor: '#5C21AA',
  },
}));
const WhiteButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#5C21AA',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  height: '46px',
  fontWeight:'500',
  fontSize:'16px',
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

export {Item, ColorButton, WhiteButton};