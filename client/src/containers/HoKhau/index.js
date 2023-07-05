import React, { useState, useEffect } from 'react'

import SearchData from '../../components/SearchData'
import TableHoKhau from './../../components/TableHoKhau';
import { apiURL } from '../../utils/constant';
import axios from 'axios';

const HoKhau = () => {
    const hoKhauField = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        { field: 'Họ và tên chủ hộ', properties: 'hoTen' },
        { field: 'Số căn cước chủ hộ', properties: 'soCCCD' },
        { field: 'Số nhà', properties: 'soNha' },
        { field: 'Đường phố', properties: 'duongPho' },
        { field: 'Phường', properties: 'phuong' },
        { field: 'Quận', properties: 'quan' }
    ]

    const [listData, setListData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`${apiURL}/hokhau`)
                setSearchTable(data.data)
                setListData(data.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    const [searchTable, setSearchTable] = useState(listData)
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: hoKhauField
    }

    const tableProps = {
        componentField: hoKhauField,
        searchTable,
        path: "hokhau"
    }

    return (
        <div>
            <SearchData searchProps={searchProps} />
            <TableHoKhau tableProps={tableProps} />
        </div>
    )
}

export default HoKhau