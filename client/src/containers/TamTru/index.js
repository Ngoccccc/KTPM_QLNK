import React, { useState, useEffect } from 'react'
import TableContainer from '../../components/TableContainer';
import SearchData from '../../components/SearchData';
import {
    Typography,
    Grid,
    Button
} from '@mui/material'
import Modal from '../../components/Modal'
import AddModal from '../../components/AddModal'
import listData from '../../contants/DataTestTamTru';
import axios from 'axios';
import { apiURL } from '../../utils/constant';
const TamTru = () => {
    const tamTruField = [
        { field: 'Địa chỉ thường trú', properties: 'diaChiThuongChu' },
        { field: 'Hộ khẩu tạm trú', properties: 'hoKhauTamTru' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Ngày bắt đầu tạm trú', properties: 'ngayBatDau' },
        { field: 'Ngày kết thúc tạm trú', properties: 'ngayKetThuc' },
        { field: 'Ngày đăng kí', properties: 'ngayDangKi' },
        { field: 'Lý do tạm trú', properties: 'lyDoTamTru' }
    ]
    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [searchTable, setSearchTable] = useState(listData)
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${apiURL}/nhankhau/thongke/tamtrutamvang`)
                setSearchTable(data.data.TamTru)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [changeUI])

    const [openAddTamTru, setOpenAddTamTru] = useState(false)
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: tamTruField
    }

    const tableProps = {
        componentField: tamTruField,
        dataTable: searchTable,
        setOpenDetail,
        setSelectTable
    }

    const modalProps = {
        openDetail,
        setOpenDetail,
        data: selectTable,
        componentField: tamTruField,
        canDelete: true
    }

    const addProps = {
        openAddTamTru,
        setOpenAddTamTru,
        componentField: tamTruField,
        setChangeUI,
        type: "tamTru"
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
            <AddModal addProps={addProps} />
            <Modal modalProps={modalProps} />
        </ >
    )
}

export default TamTru