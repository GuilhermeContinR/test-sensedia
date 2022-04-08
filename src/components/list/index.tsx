import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { CustomFooterTotalComponent } from './customFooter';

const columns: GridColDef[] = [
  {
    sortable: false,
    disableColumnMenu: true,
    field: 'id',
    headerName: 'POSTID',
    align:"center"
  },
  {
    sortable: true,
    disableColumnMenu: true,
    field: 'title',
    headerName: 'TITLE',
    flex: 1,
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: 'author',
    headerName: 'AUTHOR',
    valueGetter: () => 'JOHN DOE',
  },
  {
    sortable: false,
    disableColumnMenu: true,
    field: 'body',
    headerName: 'BODY',
    flex: 1,
  },

  {
    sortable: false,
    disableColumnMenu: true,
    field: 'date',
    headerName: 'CREATION DATE',
    // flex: 1,
    width: 200,
    type: 'dateTime',
    valueGetter: () => new Date().toLocaleString('pt-br', { hour12: true }),
  },
];

type ListProps = {
  data: any;
  perPage: number;
};
const DataTable = ({ data, perPage }: ListProps) => {
  
  const typeSearch = useSelector((state: any) => state.usuario.typeSearch);
  const [newData, setNewData] = useState<[]>(data);
  
  useEffect(() => {
    setNewData(
      data.filter((item: { title: string | string[] }) => {
        if (!typeSearch) return true;
        if (item.title.includes(typeSearch)) {
          return true;
        }
        return false;
      })
    );
  }, [typeSearch,data]);

  return (
    <div style={{ height: '70vh', width: '100%', marginTop: '40px' }}>
      <DataGrid
        rows={newData}
        columns={columns}
        pageSize={perPage}
        disableColumnSelector
        scrollbarSize={17}
        disableSelectionOnClick
        rowsPerPageOptions={[perPage]}
        hideFooter={false}
        components={{Pagination: CustomFooterTotalComponent}}
        // disableExtendRowFullWidth={true}
      />
      
    </div>
  );
};
export default DataTable;
