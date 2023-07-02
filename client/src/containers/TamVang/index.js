import React, { useState } from 'react'
import TableContainer from '../../components/TableContainer';
import SearchData from '../../components/SearchData';
import {
    Typography,
    Grid,
    Button
} from '@mui/material'
import Modal from '../../components/Modal'
import AddTamTru from '../../components/AddTamTru'
import listData from '../../contants/DataTestTamTru';
const TamVang = () => {
    const tamVangField = [
        { field: 'Địa chỉ thường trú', properties: 'diaChiThuongChu' },
        { field: 'Hộ khẩu tạm vắng', properties: 'hoKhauTamTru' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Ngày bắt đầu tạm vắng', properties: 'ngayBatDau' },
        { field: 'Ngày kết thúc tạm vắng', properties: 'ngayKetThuc' },
        { field: 'Ngày đăng kí', properties: 'ngayDangKi' },
        { field: 'Lý do tạm vắng', properties: 'lyDoTamVang' }
    ]
    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [searchTable, setSearchTable] = useState(listData)

    const [openAddTamTru, setOpenAddTamTru] = useState(false)
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: tamVangField
    }

    const tableProps = {
        componentField: tamVangField,
        dataTable: searchTable,
        setOpenDetail,
        setSelectTable
    }

    const modalProps = {
        openDetail,
        setOpenDetail,
        data: selectTable,
        componentField: tamVangField,
        canDelete: true
    }

    const addProps = {
        openAddTamTru,
        setOpenAddTamTru,
        componentField: tamVangField
    }
    return (
        <>
            <SearchData searchProps={searchProps} />
            <Grid container
                justifyContent="space-between">

                <Typography>Thông tin tạm trú</Typography>
                <Button onClick={() => setOpenAddTamTru(true)}>Tạo tạm trú mới</Button>
            </Grid>
            <TableContainer tableProps={tableProps} />
            <AddTamTru addProps={addProps} />
            <Modal modalProps={modalProps} />
        </ >
    )
}

export default TamVang