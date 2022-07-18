import { Chip, Grid, Typography, Link } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import NextLink from 'next/link'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'fullname',
    headerName: 'Nombre Completo',
    width: 300,
  },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra la información si estra pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      )
    },
  },
  {
    field: 'order',
    headerName: 'Ver orden',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      )
    },
  },
]

const rows = [
  {
    id: 1,
    fullname: 'Fernando Herrera',
    paid: true,
  },
  {
    id: 2,
    fullname: 'Melissa Flores',
    paid: true,
  },
  {
    id: 3,
    fullname: 'Hernando Vallejo',
    paid: false,
  },
  {
    id: 4,
    fullname: 'Natalia Herrera',
    paid: false,
  },
]
const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component={'h1'}>
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
