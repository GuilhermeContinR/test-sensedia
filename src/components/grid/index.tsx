import React,{ useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import useStyles from './styles'


type GridProps = {
  data: any;
  itensPerPage: number;
};



const GridResult = ({ data, itensPerPage }: GridProps) => {
  const classes = useStyles();
  const typeSearch = useSelector((state: any) => state.usuario.typeSearch);

  const [value, setValue] = useState(typeSearch);
  const [perPage] = useState<number>(itensPerPage);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setValue(typeSearch);
  }, [typeSearch]);

  return (
    <div>
      <Grid container spacing={2} mt={5} className={classes.container}>
        {data
          .filter((item:any) => {
            if (!value) return true;
            if (item.title.includes(value)) {
              return true;
            }
            return false;
          })
          .slice(currentPage * perPage, currentPage * perPage + perPage)
          .map((item :any, index: any) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
              <div className={classes.box}>
                <h1 className={classes.title}>{item.title}</h1>
                <p className={classes.author}>JOHN DOE</p>
                <p className={classes.body}>{item.body}</p>
                <p className={classes.date}>
                  {new Date().toLocaleString('pt-br', { hour12: true })}
                </p>
              </div>
            </Grid>
          ))}
        {data.length ? (
          <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="space-between">
           <p className={classes.result}>Total results {data.length}</p>
          
          <Pagination
            count={Math.ceil(data.length / perPage)}
            className={classes.pagination}
            variant="outlined"
            onChange={(event: object, page: number) => setCurrentPage(page - 1)}
          />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default GridResult;
