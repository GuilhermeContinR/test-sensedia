import * as React from "react";
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import useStyles from './styles'
import { useGridApiContext,useGridSelector,gridPageSelector,gridPageCountSelector } from '@mui/x-data-grid';

function CustomFooterTotalComponent() {
  
  const classes = useStyles();
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="space-between">
    <p className={classes.result}>TOTAL RESULTS 100</p>
    <Pagination
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
            className={classes.pagination}            
    />
     </Grid>
  );
}


export { CustomFooterTotalComponent };