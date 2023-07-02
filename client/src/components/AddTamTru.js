import React, { useState } from 'react'
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
    TextField,
} from "@mui/material";
import axios from 'axios';
import { apiURL } from '../utils/constant';
const AddNhanKhau = ({ addProps }) => {
    const { openAddTamTru,
        setOpenAddTamTru,
        componentField: componentField,
        setChangeUI,
        type } = addProps;

    const handleClose = () => {
        setOpenAddTamTru(false);
    }

    const [formInfo, setFormInfo] = useState({})

    const onChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = () => {
        setOpenAddTamTru(false);
        const fetchData = async () => {
            if (type === "hopToDanPho") {
                const data = await axios.post(`${apiURL}/hoptodanpho/tao`, formInfo)
            }
            else if (type === "tamTru") {
                const data = await axios.post(`${apiURL}/nhankhau/tamtru`, formInfo)
            }
            else if (type === "tamVang") {
                const data = await axios.post(`${apiURL}/nhankhau/tamvang`, formInfo)
            }
            setChangeUI(pre => !pre)
        }
        fetchData()
        console.log(formInfo)
        setFormInfo({})
    }

    return (
        <Dialog open={openAddTamTru} onClose={handleClose} fullWidth sx={{ minWidth: 400, minHeight: 400 }}>
            <Grid container
                direction="column"
            >
                <DialogTitle>
                    <Typography fullWidth sx={{ fontSize: 20 }}>Thêm mới</Typography>
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
                        <DialogContent sx={{ paddingY: '7px' }}>
                            {componentField.map((data, id) => (
                                <TextField
                                    multiline
                                    type="datetime-local"
                                    id={data.properties}
                                    onChange={onChange}
                                />
                            )
                            )}
                        </DialogContent>
                    </Stack>
                </DialogContent>
            </Grid >
            <DialogActions>
                <Button onClick={() => handleSubmit()}>Xác nhận thêm</Button>
                <Button onClick={() => setOpenAddTamTru(false)}>Hủy bỏ</Button>
            </DialogActions>

        </Dialog >
    )
}

export default AddNhanKhau