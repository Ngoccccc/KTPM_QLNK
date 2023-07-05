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

import NhanKhauModal from '../../components/NhanKhauModal'
import TableTachKhau from './../../components/TableTachKhau';
import AddNhanKhau from '../../components/AddNhanKhau'
import Modal from '../../components/Modal'

import axios from 'axios'
import { apiURL } from '../../utils/constant'

const HoKhauDetail = () => {
    const hoKhauField = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        { field: 'Số nhà', properties: 'soNha' },
        { field: 'Đường phố', properties: 'duongPho' },
        { field: 'Phường', properties: 'phuong' },
        { field: 'Quận', properties: 'quan' }
    ]

    const nhanKhauField = [
        { field: 'Họ và tên', properties: 'hoTen' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Nơi ở', properties: 'nguyenQuan' },
        { field: 'Nghề nghiệp', properties: 'ngheNghiep' },
        { field: 'Quan hệ với chủ hộ', properties: 'quanHeVoiChuHo' }
    ]

    const moreNhanKhauField = [
        { field: 'Họ và tên', properties: 'hoTen' },
        { field: 'Số chứng minh nhân dân', properties: 'soCCCD' },
        { field: 'Ngày cấp', properties: 'ngayCap' },
        { field: 'Nơi cấp', properties: 'noiCap' },
        { field: 'Bí danh', properties: 'biDanh' },
        { field: 'Giới tính', properties: 'gioiTinh' },
        { field: 'Ngày Tháng Năm sinh', properties: 'ngayThangNamSinh' },
        { field: 'Nơi sinh', properties: 'noiSinh' },
        { field: 'Nguyên quán', properties: 'nguyenQuan' },
        { field: 'Dân tộc', properties: 'danToc' },
        { field: 'Quốc tịch', properties: 'quocTich' },
        { field: 'Nghề nghiệp', properties: 'ngheNghiep' },
        { field: 'Nơi làm việc', properties: 'noiLamViec' }
    ]

    const [listData, setListData] = useState({
        hoKhau: {}, nhanKhau: [],
    })


    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()
    const [openAddMember, setOpenAddMember] = useState(false);
    const [changeUI, setChangeUI] = useState(false)
    const [newData, setNewData] = useState({})
    const { soHoKhau } = useParams()
    const num = parseInt(soHoKhau)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.post(`${apiURL}/hokhau`, { soHoKhau: num })
                console.log(data)
                setListData(data.data)
                setNewData(data.data.hoKhau)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [changeUI])
    const tableProps = {
        componentField: nhanKhauField,
        dataTable: listData.nhanKhau,
        setOpenDetail,
        setSelectTable,
        soHoKhau,
        setChangeUI
    }

    const addProps = {
        openAddMember,
        setOpenAddMember,
        soHoKhau: num,
        setChangeUI
    }

    const [editable, setEditable] = useState(false)


    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        setEditable(false);
        console.log(listData)
        const fetchData = async () => {
            try {
                const data = await axios.post(`${apiURL}/hokhau/suathongtin`, newData)
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
        // setChangeUI(pre => !pre)
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
                    {hoKhauField.map((value, id) => (

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
                <Button align="right" sx={{ marginBottom: 2 }}
                    style={{
                        color: '#1976d2'
                    }}
                    onClick={() => setOpenAddMember(true)}>

                    <AddCircleOutline />
                    Thêm nhân khẩu mới</Button>

            </Grid>
            <AddNhanKhau addProps={addProps} />
            <TableTachKhau tableProps={tableProps} />
            <NhanKhauModal openDetail={openDetail} setOpenDetail={setOpenDetail} data={selectTable} xoaNhanKhau={true} />
        </div>
    )
}

export default HoKhauDetail