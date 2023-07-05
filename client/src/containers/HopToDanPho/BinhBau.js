import React, { useState, useEffect } from 'react'
import {
    Typography,
    Grid,
    Button
} from '@mui/material'
import SearchData from '../../components/SearchData'
import TableHoKhau from './../../components/TableHoKhau';
import axios from 'axios'

import { apiURL } from '../../utils/constant';
import TableController from '../../components/TableContainer';
const BinhBau = () => {
    const ghiNhan = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        { field: 'Số lần tham gia họp', properties: 'solan' },
        // { field: 'Thời gian bắt đầu', properties: 'thoiGianBatDau' },
        // { field: 'Thời gian kết thúc', properties: 'thoiGianKetThuc' },
    ]


    const [listData, setListData] = useState([{}])
    const [searchTable, setSearchTable] = useState([])
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/hoptodanpho/binhbau`)
            console.log(data.data)
            setSearchTable(data.data)
            setListData(data.data)
        }
        fetchData()
    }, [changeUI])

    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: ghiNhan
    }

    const tableProps = {
        componentField: ghiNhan,
        searchTable,
    }

    return (
        <div>
            <SearchData searchProps={searchProps} />
            <Grid container
                justifyContent="space-between">
                <Typography>Các hộ đã tham gia bao nhiêu cuộc họp</Typography>
            </Grid>
            <TableController tableProps={tableProps} />
        </div>
    )
}

export default BinhBau