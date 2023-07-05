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

const TamVang = () => {
    const tamVangField = [
        { field: 'Địa chỉ thường trú', properties: 'diaChiThuongChu' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Ngày bắt đầu tạm vắng', properties: 'ngayBatDau' },
        { field: 'Ngày kết thúc tạm vắng', properties: 'ngayKetThuc' },
        { field: 'Ngày đăng kí', properties: 'ngayDangKi' },
        { field: 'Lý do tạm vắng', properties: 'lyDoTamVang' }
    ]
    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [searchTable, setSearchTable] = useState([])
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${apiURL}/nhankhau/thongke/tamtrutamvang`)
                setSearchTable(data.data.TamVang)
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
        componentField: tamVangField,
        setChangeUI,
        type: "tamVang"
    }
    return (
        <>
            <SearchData searchProps={searchProps} />
            <Grid container
                justifyContent="space-between">

                <Typography>Thông tin tạm Vắng</Typography>
                <Button onClick={() => setOpenAddTamTru(true)}>Tạo tạm vắng mới</Button>
            </Grid>
            <TableContainer tableProps={tableProps} />
            <AddModal addProps={addProps} />
            <Modal modalProps={modalProps} />
        </ >
    )
}

export default TamVang