import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Stack,
    Typography,
    TextField
} from "@mui/material";
import './modal.css'

import {
    PermContactCalendar,
    CheckCircleOutline,
    Edit,
    HighlightOff,
    DeleteForever
} from "@mui/icons-material";

import axios from "axios"
import { apiURL } from "../utils/constant";
const NhanKhauModal = ({ openDetail, setOpenDetail, data, xoaNhanKhau, setChangeUI }) => {
    const nhanKhauField = ["Họ và tên", "Số chứng minh nhân dân", "Ngày cấp", "Nơi cấp", "Bí danh", "Giới tính", "Ngày Tháng Năm sinh",
        "Nơi sinh", "Nguyên quán", "Dân tộc", "Quốc tịch", "Nghề nghiệp", "Nơi làm việc"]
    const nhanKhauFieldData = ["hoTen", "soCCCD", "ngayCap", "noiCap", "biDanh", "gioiTinh", "ngayThangNamSinh",
        "noiSinh", "nguyenQuan", "danToc", "quocTich", "ngheNghiep", "noiLamViec",]
    if (xoaNhanKhau) {
        nhanKhauFieldData.push("quanHeVoiChuHo")
        nhanKhauField.push("Quan hệ với chủ hộ")
    }
    const newObj = {};
    {
        data && nhanKhauFieldData.forEach((field) => {
            newObj[field] = data[field]
        })
    }

    const [editable, setEditable] = useState(false);
    const [newData, setNewData] = useState(newObj);

    const handleEdit = () => {
        setEditable(true);
        setNewData(newData.hoTen ? newData : newObj)
    };

    const handleSave = () => {
        setEditable(false);
        console.log(newData)
        const fetchData = async () => {
            const data = await axios.post(`${apiURL}/nhankhau/thaydoithongtin`, newData)
            setChangeUI(pre => !pre)
            console.log(data)
        }
        fetchData()
        // Save the edited newData
    };
    const handleClose = () => {
        setNewData({})
        setOpenDetail(false);
        setEditable(false)
    }
    console.log(newData)
    const handleNewDataChange = (field, event) => {
        setNewData({
            ...newData,
            [field]: event.target.value
        });
    };

    const handleDeleteNhanKhau = () => {

    }
    return (
        <Dialog open={openDetail} onClose={handleClose} fullWidth sx={{ minWidth: 400 }}>
            <Grid container
                direction="column"
            >
                <DialogTitle>
                    <Stack container
                        direction="row"
                        sx={{ margin: 0 }}
                        style={{ color: '#1976d2' }}
                    >
                        <PermContactCalendar sx={{ fontSize: 30 }} />
                        <Typography sx={{ fontSize: 20 }}>Thông tin chi tiết nhân khẩu</Typography>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{ padding: 0 }}>
                    <Stack
                        container
                        direction="row"
                        justifyContent="center"
                        sx={{ padding: 0 }}
                    >
                        <DialogContent container sx={{ fontWeight: 'bold', paddingY: 0, paddingX: 2 }} >
                            {
                                nhanKhauField.map((field, id) => (
                                    <DialogContentText key={id} align="right" sx={{ fontWeight: 'bold', marginY: "15px" }}>{field}:</DialogContentText>
                                ))
                            }
                        </DialogContent>
                        <DialogContent sx={{ paddingY: editable ? '5px' : '0px' }}>
                            {nhanKhauFieldData.map((field, id) => {

                                if (!editable)
                                    return (
                                        <DialogContentText sx={{ marginY: "15px", }} key={id}>{!newData[field] ? newObj[field] : newData[field]}</DialogContentText>
                                    )
                                else {
                                    return <TextField
                                        multiline
                                        value={newData[field]}
                                        onChange={(e) => handleNewDataChange(field, e)}
                                    />
                                }
                            })}
                        </DialogContent>
                    </Stack>
                </DialogContent>
            </Grid >
            <DialogActions>
                {editable ? (
                    <Button onClick={handleSave}><CheckCircleOutline />Lưu</Button>
                ) : (
                    <Button onClick={handleEdit}> <Edit />Sửa</Button>
                )}
                {
                    (xoaNhanKhau && newObj.quanHeVoiChuHo !== "Chủ hộ") && <Button style={{ color: "red" }} onClick={handleDeleteNhanKhau}><DeleteForever />Xóa khỏi hộ khẩu</Button>
                }
                <Button style={{ color: "orange" }} onClick={handleClose}><HighlightOff />Close</Button>
            </DialogActions>

        </Dialog >
    );

}

export default NhanKhauModal