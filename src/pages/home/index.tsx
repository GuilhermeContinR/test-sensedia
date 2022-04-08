import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Filter from '../../components/filter';
import { useSelector } from 'react-redux';
import DataTable from '../../components/list';
import GridResult from '../../components/grid';
import Posts from '../../services/Post';
import Container from '@mui/material/Container';

const Home: React.FC = () => {
  const typeList = useSelector((state: any) => state.usuario.typeList);
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    const d = await Posts.getPost();
    setData(d.data);
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Filter search={search} />
        {typeList === 'GRID' ? (
          <GridResult data={data} itensPerPage={8} />
        ) : (
          <DataTable data={data} perPage={20} />
        )}
      </Container>
    </div>
  );
};

export default Home;
