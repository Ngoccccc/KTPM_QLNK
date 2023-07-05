import React, { useState, useEffect } from 'react'
import {
    Typography,
    Grid,
    Button
} from '@mui/material'
import SearchData from '../../components/SearchData'
import TableHoKhau from './../../components/TableHoKhau';
import AddTamTru from './../../components/AddTamTru'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../utils/constant';
const HopToDanPho = () => {
    const hopToDanPhoField = [
        { field: 'Nội dung cuộc họp', properties: 'noiDung' },
        { field: 'Địa điểm họp', properties: 'diaDiem' },
        { field: 'Thời gian bắt đầu', properties: 'thoiGianBatDau' },
        { field: 'Thời gian kết thúc', properties: 'thoiGianKetThuc' },
    ]

    const navigate = useNavigate()
    const [listData, setListData] = useState([])
    const [searchTable, setSearchTable] = useState([])
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/hoptodanpho`)
            console.log(data)
            setSearchTable(data.data)
            setListData(data.data)
        }
        fetchData()
    }, [changeUI])

    const [openAddTamTru, setOpenAddTamTru] = useState(false)

    const addProps = {
        openAddTamTru,
        setOpenAddTamTru,
        componentField: hopToDanPhoField,
        setChangeUI,
        type: "hopToDanPho"
    }
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: hopToDanPhoField
    }

    const tableProps = {
        componentField: hopToDanPhoField,
        searchTable,
        path: "hoptodanpho"
    }

    return (
        <div>
            <Button onClick={() => navigate("/hoptodanpho/binhbau")}>Xem thành tích đã tham gia họp</Button>
            <SearchData searchProps={searchProps} />
            <Grid container
                justifyContent="space-between">
                <Typography>Thông tin cuộc họp</Typography>
                <Button onClick={() => setOpenAddTamTru(true)}>Tạo cuộc họp mới</Button>
            </Grid>
            <AddTamTru addProps={addProps} />
            <TableHoKhau tableProps={tableProps} />
        </div>
    )
}

export default HopToDanPho