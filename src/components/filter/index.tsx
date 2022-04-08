import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Search from '@mui/icons-material/Search';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';

import { ColorButton, WhiteButton } from './styles';

export default function Filter(props: any) {
  const dispatch = useDispatch();

  const typeList = useSelector((state: any) => state.usuario.typeList);
  const typeSearch = useSelector((state: any) => state.usuario.typeSearch);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({
      type: 'SET_TYPELIST',
      payload: { typeList: event.target.value },
    });
  };

  const handleType = (event: any) => {
    dispatch({
      type: 'SET_TYPESEARCH',
      payload: { typeSearch: event.target.value },
    });
  };

  const clear = (event: any) => {
    dispatch({
      type: 'SET_TYPESEARCH',
      payload: { typeSearch: '' },
    });
  };

  return (
    <Grid container spacing={3} mt={4}>
      <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
        <TextField
          id="filled-basic"
          label="Type for search..."
          variant="filled"
          fullWidth
          size="small"
          onChange={handleType}
          value={typeSearch}
          data-testid="inputText"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
        <Select
          value={typeList}
          variant="filled"
          fullWidth
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={'GRID'}>
            <Typography style={{ display: 'flex' }}>
              <AppsIcon />
              Grid View
            </Typography>
          </MenuItem>

          <MenuItem value={'LIST'}>
            <Typography style={{ display: 'flex' }}>
              <ListIcon />
              List View
            </Typography>
          </MenuItem>
        </Select>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={2} xl={2}  justifyContent="center" display="flex">
        <ColorButton
          variant="contained"
          startIcon={<Search />}
          fullWidth
          onClick={props.search}
        >
          SEARCH
        </ColorButton>
      </Grid>
      <Grid item xs={6} sm={6} md={1} lg={1} xl={1}>
        <WhiteButton variant="contained" onClick={clear} data-testid="btnClear">
          Clear
        </WhiteButton>
      </Grid>

     
    </Grid>
  );
}
