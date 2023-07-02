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
const AddNhanKhau = ({ addProps }) => {
    const { openAddTamTru,
        setOpenAddTamTru,
        componentField: tamTruField } = addProps;

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
                                tamTruField.map((data, id) => (
                                    <DialogContentText key={id} align="right" sx={{ fontWeight: 'bold', marginY: "15px" }}>{data.field}:</DialogContentText>
                                ))
                            }
                        </DialogContent>
                        <DialogContent sx={{ paddingY: '7px' }}>
                            {tamTruField.map((data, id) => (
                                <TextField
                                    multiline
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