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
    FormControl,
    InputLabel,
    Select, MenuItem
} from "@mui/material";
const AddNhanKhau = ({ openAddMember, setOpenAddMember }) => {
    const nhanKhauField = ["Họ và tên", "Số chứng minh nhân dân", "Ngày cấp", "Nơi cấp", "Bí danh", "Giới tính", "Ngày Tháng Năm sinh",
        "Nơi sinh", "Nguyên quán", "Dân tộc", "Quốc tịch", "Nghề nghiệp", "Nơi làm việc", "Quan hệ với chủ hộ"]
    const nhanKhauFieldData = ["hoTen", "soCCCD", "ngayCap", "noiCap", "biDanh", "gioiTinh", "ngayThangNamSinh",
        "noiSinh", "nguyenQuan", "danToc", "quocTich", "ngheNghiep", "noiLamViec", "quanHeVoiChuHo"]
    const handleClose = () => {
        setOpenAddMember(false);
    }

    const [selectTuyChon, setSelectTuyChon] = useState()
    const [formInfo, setFormInfo] = useState({})

    const onChange = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = () => {
        setOpenAddMember(false);
        console.log(formInfo)
        setFormInfo({})
    }

    return (
        <Dialog open={openAddMember} onClose={handleClose} fullWidth sx={{ minWidth: 400, minHeight: 400 }}>
            <Grid container
                direction="column"
            >
                <DialogTitle>
                    <Stack container
                        direction="row"
                        justifyContent="space-around"
                        sx={{ margin: 0 }}
                        style={{ color: '#1976d2' }}
                    >
                        <Typography fullWidth sx={{ fontSize: 20 }}>Thêm nhân khẩu mới</Typography>
                        <FormControl sx={{ marginRight: 3 }}>
                            <InputLabel align="center" id="demo-simple-select-label">Tùy chọn</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="text"
                                label="Truong can tim"
                                sx={{ width: 200, height: 50 }}
                                onChange={(e) => setSelectTuyChon(e.target.value)}
                            >
                                <MenuItem value="Người mới chuyển đến">Người mới chuyển đến</MenuItem>
                                <MenuItem value="Sinh con">Sinh con</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{ padding: 0 }}>
                    {!(selectTuyChon === "Sinh con") ?
                        <Stack
                            container
                            direction="row"
                            justifyContent="center"
                        >
                            <DialogContent container sx={{ fontWeight: 'bold', paddingTop: 2, paddingX: 2 }} >
                                <DialogContentText align="right" sx={{ fontWeight: 'bold', }}>Số chứng minh nhân dân</DialogContentText>
                                <DialogContentText align="right" sx={{ fontWeight: 'bold', marginY: "15px" }}>Quan hệ với chủ hộ</DialogContentText>
                            </DialogContent>

                            <DialogContent sx={{ paddingY: '7px' }}>
                                <TextField
                                    multiline
                                    id="soCCCD"
                                    onChange={onChange}
                                />
                                <TextField
                                    multiline
                                    id="quanHeVoiChuHo"
                                    onChange={onChange}
                                />
                            </DialogContent>
                        </Stack>
                        :
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
                            <DialogContent sx={{ paddingY: '7px' }}>
                                {nhanKhauFieldData.map((field, id) => (
                                    <TextField
                                        multiline
                                        id={field}
                                        onChange={onChange}
                                    />
                                )
                                )}
                            </DialogContent>
                        </Stack>}
                </DialogContent>
            </Grid >
            <DialogActions>
                <Button onClick={() => handleSubmit()}>Xác nhận thêm</Button>
                <Button onClick={() => setOpenAddMember(false)}>Hủy bỏ</Button>
            </DialogActions>

        </Dialog >
    )
}

export default AddNhanKhau