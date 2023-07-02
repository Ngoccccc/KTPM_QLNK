import React, { useState } from 'react'
import { listData } from '../../contants/DataTestHoKhau'
import SearchData from '../../components/SearchData'
import TableHoKhau from './../../components/TableHoKhau';
const HopToDanPho = () => {
    const hoKhauField = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        // { field: 'Họ và tên chủ hộ', properties: 'hoTen' },
        // { field: 'Số căn cước chủ hộ', properties: 'soCCCD' },
        { field: 'Số nhà', properties: 'soNha' },
        { field: 'Đường phố', properties: 'duongPho' },
        { field: 'Phường', properties: 'phuong' },
        { field: 'Quận', properties: 'quan' }
    ]

    const [searchTable, setSearchTable] = useState(listData)
    const searchProps = {
        listData,
        setSearchTable,
        componentSearch: hoKhauField
    }

    const tableProps = {
        componentField: hoKhauField,
        searchTable,
    }

    return (
        <div>
            <SearchData searchProps={searchProps} />
            <TableHoKhau tableProps={tableProps} />
        </div>
    )
}

export default HopToDanPho