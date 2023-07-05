import React, { useState, useEffect } from 'react'
import {
    Typography,
    Grid,
} from '@mui/material'
import SearchData from '../../components/SearchData'
import axios from 'axios'

import { apiURL } from '../../utils/constant';
import TableController from '../../components/TableContainer';
const BinhBau = () => {
    const ghiNhan = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        { field: 'Số lần tham gia họp', properties: 'solan' },
        // { field: 'Họ và tên chủ hộ', properties: 'thoiGianBatDau' },
        // { field: 'Số căn cước chủ hộ', properties: 'thoiGianKetThuc' },
    ]


    const [listData, setListData] = useState([{}])
    const [searchTable, setSearchTable] = useState([])
    const [changeUI, setChangeUI] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${apiURL}/hoptodanpho/binhbau`)
                console.log(data.data)
                setSearchTable(data.data)
                setListData(data.data)
            }
            catch (error) {
                console.log(error)
            }
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
        dataTable: searchTable,
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