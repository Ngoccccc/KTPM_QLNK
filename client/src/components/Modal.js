import React, { useEffect, useState } from "react";
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
const Modal = ({ modalProps }) => {
    const {
        openDetail,
        setOpenDetail,
        data,
        componentField,
        canDelete,
        xoaNhanKhau
    } = modalProps;


    const newObj = {};
    {
        data && componentField.forEach((item) => {
            newObj[item.properties] = data[item.properties]
        })
    }

    const [editable, setEditable] = useState(false);
    const [newData, setNewData] = useState(newObj);

    console.log(data)

    const handleEdit = () => {
        setEditable(true);
        setNewData(newData.soCCCD ? newData : newObj)
    };

    const handleSave = () => {
        setEditable(false);
        console.log(newData)
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
                        <Typography sx={{ fontSize: 20 }}>Thông tin chi tiết </Typography>
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
                                componentField.map((data, id) => (
                                    <DialogContentText key={id} align="right" sx={{ fontWeight: 'bold', marginY: "15px" }}>{data.field}:</DialogContentText>
                                ))
                            }
                        </DialogContent>
                        <DialogContent sx={{ paddingY: editable ? '5px' : '0px' }}>
                            {componentField.map((data, id) => {

                                if (!editable)
                                    return (
                                        <DialogContentText sx={{ marginY: "15px", }} key={id}>{!newData[data.properties] ? newObj[data.properties] : newData[data.properties]}</DialogContentText>
                                    )
                                else {
                                    return <TextField
                                        multiline
                                        value={newData[data.properties]}
                                        onChange={(e) => handleNewDataChange(data.properties, e)}
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
                    ((xoaNhanKhau) && newObj.quanHeVoiChuHo !== "Chủ hộ") && <Button style={{ color: "red" }} onClick={handleDeleteNhanKhau}><DeleteForever />Xóa</Button>
                }
                <Button style={{ color: "orange" }} onClick={handleClose}><HighlightOff />Đóng tab</Button>
            </DialogActions>

        </Dialog >
    );

}

export default Modal