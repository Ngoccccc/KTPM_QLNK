import React, { useState, useEffect } from 'react'
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
import { apiURL } from '../../utils/constant'
import axios from 'axios'
const HoKhauDetail = () => {
    const hopToDanPhoField = [
        { field: 'Nội dung cuộc họp', properties: 'noiDung' },
        { field: 'Địa điểm họp', properties: 'diaDiem' },
        { field: 'Thời gian bắt đầu', properties: 'thoiGianBatDau' },
        { field: 'Thời gian kết thúc', properties: 'thoiGianKetThuc' },
    ]

    const ghiNhan = [
        { field: 'Nội dung cuộc họp', properties: 'noiDung' },
        { field: 'Hộ đã tham dự', properties: 'soHoKhau' },
    ]

    const [openAddMember, setOpenAddMember] = useState(false);
    const { n } = useParams()
    const num = parseInt(n)
    console.log(typeof (num))
    console.log(num)

    const [listData, setListData] = useState([])
    const [newData, setNewData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/hoptodanpho/xem`, { id: num });
            setListData(data.data.hothamgia)
            setNewData(data.data.hothamgia)
        }
        fetchData()
    }, [])
    const tableProps = {
        componentField: ghiNhan,
        dataTable: listData,
        num
    }

    const [editable, setEditable] = useState(false)


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