import { FilterList } from "@mui/icons-material"
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useState } from "react";
import OverviewStats from "../../components/OverviewStats";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const columns = [
    {field: "name", headerName: "Supplier Name", flex: 1},
    {field: "product", headerName: "Product", flex: 1 },
    {field: "contactnumber", headerName: "Contact Number", flex: 1 },
    {field: "email", headerName: "Email", flex: 1 },
    {field: "type", headerName: "Type", flex: 1 },
    {field: "ontheway", headerName: "On The Way", flex: 1 },
]
const rows = Array(20).fill({id: 1, name: "Mark", product: "Gulay", contactnumber: "09123456789", email: "Markgulay@yahoo.com", type:"Taking Return", ontheway: 13})

function PriceMonitoring() {
    const [paginationModel, setPaginationModel] = useState(
        {pageSize: 10, page: 0})
    return (
        <div className='nav-outlet w-3/4 justify-evenly space-y-2'>
            {/* overview */}
            <div className="flex flex-col text-start space-y-2">
                <div className="flex flex-row space-x-2 items-center">
                    <FormControl sx={{width: 1/2}}>
                        <InputLabel>Area</InputLabel>
                        <Select
                            value='Majayjay, Laguna'
                            label='Area'
                        >
                            <MenuItem>Majayjay, Laguna</MenuItem>
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" />
                    </DemoContainer>
                    </LocalizationProvider>
                </div>
                <OverviewStats />
            </div>
            <div className="flex flex-col space-y-2 h-2/3 justify-center">
            <div className='row-between'>
                {/* name */}
                <h1 className="text-lg font-bold">Products</h1>
                <div className="flex space-x-2 ">
                    <Button variant="contained">Add Products</Button>
                    <Button variant="contained" startIcon={<FilterList />} color="primary"> Filters</Button>
                    <Button variant="contained">Download all</Button>
                </div>
            </div>
            <div className="h-5/6">
                <DataGrid columns={columns} rows={rows} getRowId={rows => rows.id} getRowHeight={()=>'auto'} sx={{
                    [`& .${gridClasses.cell}`]: {
                        py: 1,
                    },
                    }} 
                    paginationModel={paginationModel} onPaginationModelChange={setPaginationModel}/> 
            </div>
            </div>
        </div>
    )
}

export default PriceMonitoring