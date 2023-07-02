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
import AddNhanKhau from '../../components/AddNhanKhau'
import Modal from '../../components/Modal'

const HoKhauDetail = () => {
    const hoKhauField = [
        { field: 'Số hộ khẩu', properties: 'soHoKhau' },
        // { field: 'Họ và tên chủ hộ', properties: 'hoTen' },
        // { field: 'Số căn cước chủ hộ', properties: 'soCCCD' },
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

    const [openDetail, setOpenDetail] = useState(false);
    const [selectTable, setSelectTable] = useState()

    const [openAddMember, setOpenAddMember] = useState(false);
    const { soHoKhau } = useParams()

    const tableProps = {
        componentField: nhanKhauField,
        dataTable: dataDetail.nhanKhau,
        setOpenDetail,
        setSelectTable,
        soHoKhau
    }

    const modalProps = {
        openDetail,
        setOpenDetail,
        data: selectTable,
        componentField: moreNhanKhauField,
        xoaNhanKhau: true
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
            <AddNhanKhau openAddMember={openAddMember} setOpenAddMember={setOpenAddMember} />
            <TableTachKhau tableProps={tableProps} />
            <NhanKhauModal openDetail={openDetail} setOpenDetail={setOpenDetail} data={selectTable} xoaNhanKhau={true} />
        </div>
    )
}

export default HoKhauDetail