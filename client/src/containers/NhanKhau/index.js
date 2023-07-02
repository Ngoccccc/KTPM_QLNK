import React, { useState } from 'react'
import listData from '../../contants/DataTestNhanKhau';
import TableContainer from '../../components/TableContainer';
import NhanKhauModal from '../../components/NhanKhauModal';
import SearchData from '../../components/SearchData';
import { createContext } from 'react';
import { Typography } from '@mui/material'

export const NhanKhauContext = createContext()
const NhanKhau = () => {

    const nhanKhauField = [
        { field: 'Họ và tên', properties: 'hoTen' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Nơi ở', properties: 'nguyenQuan' },
        { field: 'Nghề nghiệp', properties: 'ngheNghiep' }
    ]
    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [searchTable, setSearchTable] = useState(listData)
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: nhanKhauField
    }

    const tableProps = {
        componentField: nhanKhauField,
        dataTable: searchTable,
        setOpenDetail,
        setSelectTable
    }
    console.log(searchTable)

    return (
        <>
            <SearchData searchProps={searchProps} />
            <Typography>Thông tin nhân khẩu</Typography>
            <TableContainer tableProps={tableProps} />
            <NhanKhauModal openDetail={openDetail} setOpenDetail={setOpenDetail} data={selectTable} />
        </ >
    )
}

export default NhanKhau