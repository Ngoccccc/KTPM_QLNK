import React, { useState, useEffect } from 'react'
// import listData from '../../contants/DataTestNhanKhau';
import TableContainer from '../../components/TableContainer';
import NhanKhauModal from '../../components/NhanKhauModal';
import SearchData from '../../components/SearchData';
import { createContext } from 'react';
import { Typography } from '@mui/material'
import axios from 'axios'
import { apiURL } from '../../utils/constant';
export const NhanKhauContext = createContext()

const NhanKhau = () => {

    const [listData, setListData] = useState([])
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/nhankhau`)
            setSearchTable(data.data)
            setListData(data.data)
        }
        fetchData()
    }, [changeUI])
    console.log(listData)
    const nhanKhauField = [
        { field: 'Họ và tên', properties: 'hoTen' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Nơi ở', properties: 'nguyenQuan' },
        { field: 'Nghề nghiệp', properties: 'ngheNghiep' }
    ]
    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [searchTable, setSearchTable] = useState([])

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
            <NhanKhauModal openDetail={openDetail} setOpenDetail={setOpenDetail} data={selectTable} setChangeUI={setChangeUI} />
        </ >
    )
}

export default NhanKhau