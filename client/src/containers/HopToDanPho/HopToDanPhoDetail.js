import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Typography,
    Button,
    Grid,
    TextField,
    Stack
} from '@mui/material'
import {
    AddCircleOutline,
    Edit
} from '@mui/icons-material'
import { dataDetail } from '../../contants/DataTestHoKhau'
import NhanKhauModal from '../../components/NhanKhauModal'
import TableTachKhau from './../../components/TableTachKhau';
import TableController from '../../components/TableContainer'
import AddNhanKhau from '../../components/AddNhanKhau'
import Modal from '../../components/Modal'
import SearchData from '../../components/SearchData'
import HopToDanPho from './index';

const HoKhauDetail = () => {
    const hopToDanPhoField = [
        { field: 'Nội dung cuộc họp', properties: 'soHoKhau' },
        { field: 'Địa điểm', properties: 'soNha' },
        { field: 'Ngày diễn ra', properties: 'duongPho' },
        { field: 'Thời gian bắt đầu', properties: 'phuong' },
        { field: 'Thời gian kết thúc', properties: 'quan' }
    ]

    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()

    const [openAddMember, setOpenAddMember] = useState(false);
    const { soHoKhau } = useParams()

    const tableProps = {
        componentField: hopToDanPhoField,
        dataTable: dataDetail.nhanKhau,
        setOpenDetail,
        setSelectTable,
        soHoKhau
    }

    const [editable, setEditable] = useState(false)
    const [newData, setNewData] = useState(dataDetail.hoKhau)

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        setEditable(false);
        console.log(newData)
        // Save the edited newData
    };

    const handleNewDataChange = (field, event) => {
        setNewData({
            ...newData,
            [field]: event.target.value
        });
    };

    console.log(dataDetail)
    return (
        <div>

            <Typography variant="h6" color="text.secondary" gutterBottom>
                Thông tin chung
                {!editable ? <Button onClick={handleEdit}> <Edit />Chỉnh sửa</Button>
                    :
                    <Button onClick={handleSave}>Xác nhận</Button>
                }
            </Typography>
            <Grid container
                justifyContent="space-between">
                <Stack container
                    direction='column'
                >
                    {hopToDanPhoField.map((value, id) => (
                        <div key={id}>
                            <Grid container direction='row'>
                                <Typography sx={{ marginTop: 1 }}>{value.field}:</Typography>
                                {!editable ?
                                    <Typography sx={{ marginTop: 1, marginLeft: 1 }}>{newData[value.properties]}</Typography>
                                    : <TextField
                                        sx={{ paddingLeft: 2, marginBottom: 1 }}
                                        value={newData[value.properties]}
                                        onChange={(e) => handleNewDataChange(value.properties, e)} />
                                }
                            </Grid>
                        </div>
                    ))}
                </Stack>
            </Grid>
            {/* <SearchData /> */}
            <TableController tableProps={tableProps} />
        </div>
    )
}

export default HoKhauDetail