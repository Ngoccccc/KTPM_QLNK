import React, { useState } from 'react'
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Button,
    Radio,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Stack,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material";
import {
    MoveUp as MoveUpIcon,
    Cancel as CancelIcon,
    TaskAlt as TaskAltIcon,
    Warning as WarningIcon,
    AddCircleOutline as AddCircleOutlineIcon
} from '@mui/icons-material';
import './index.css'
import axios from "axios"
import { apiURL } from "../utils/constant";

import removeVietnameseTones from '../contants/TiengViet';

const TableTachKhau = ({ tableProps }) => {
    const [selectedTachHo, setSelectedTachHo] = useState([])
    const [selectedChuHo, setSelectedChuHo] = useState(null)

    const [confirmAlert, setConfirmAlert] = useState(false)


    const [basicInfo, setBasicInfo] = useState({});
    const [openBasicInfo, setOpenBasicInfo] = useState(false)

    const handleChoiceChuHo = (id) => {
        if (selectedChuHo === id) {
            setSelectedChuHo(null)
        }
        else {
            setSelectedChuHo(id)
        }
    }

    const handleChoiceMember = (id) => {
        if (selectedTachHo.includes(id)) {
            setSelectedTachHo(selectedTachHo.filter((studentId) => studentId !== id));
            id === selectedChuHo ? setSelectedChuHo(null) : console.log("no")
        } else {
            setSelectedTachHo([...selectedTachHo, id]);
        }
    }



    const handleSubmit = () => {

        const selectedTachHoList = tableProps.dataTable.filter((student) => selectedTachHo.includes(student.id));
        setConfirmAlert(false);
        setOpenBasicInfo(false);
        setShow(prev => !prev)
        const fetchData = async () => {
            const data = await axios.post(`${apiURL}/hokhau/tachhokhau`, reqData)
            tableProps.setChangeUI(pre => !pre)
            console.log(data)
        }
        fetchData()
        tableProps.setChangeUI(pre => !pre)
        console.log(reqData);
        setSelectedTachHo([])
    };

    const handleClickTable = (data) => {
        if (!show) {
            tableProps.setSelectTable(data)
            tableProps.setOpenDetail(true)
        }
    }
    const [show, setShow] = useState(false);

    const onChange = (e) => {
        setBasicInfo({
            ...basicInfo,
            [e.target.id]: e.target.value,
        });

    };

    const reqData = {
        soHoKhau: tableProps.soHoKhau * 1,
        CCCDChuHoMoi: selectedChuHo,
        danhSachCCCDTachKhau: [...selectedTachHo],
        hoKhauMoi: basicInfo
    }


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                <Typography variant="h6">Thành viên hộ khẩu:</Typography>
                <Stack
                    container
                    direction="row-reverse">

                    <Button
                        style={{
                            color: !show ? '#1976d2' : 'red',
                        }}
                        onClick={() => {
                            setShow(prev => !prev)
                            setSelectedTachHo([])

                        }}>
                        {!show ? <><MoveUpIcon />Tách hộ khẩu</> : <><CancelIcon />Hủy bỏ </>}
                    </Button>
                    {show && <>
                        <Button
                            onClick={() => {
                                setOpenBasicInfo(true)
                            }}>
                            <TaskAltIcon />
                            Xác nhận</Button>
                    </>}
                </Stack>
            </Grid>
            <TableContainer component={Paper} sx={{
                minWidth: 400, maxHeight: 370, borderTop: 2, marginTop: 2
            }}>
                <Table stickyHeader className='sticky' >

                    <TableHead>
                        <TableRow>
                            {show && <><TableCell sx={{ fontWeight: 'bold', }}>Tách Khẩu</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', }}>Chủ hộ mới</TableCell></>}
                            <TableCell sx={{ fontWeight: 'bold', }}>{tableProps.componentField[0].field}</TableCell>
                            {tableProps.componentField.slice(1).map((header, id) => (<TableCell sx={{ fontWeight: 'bold', }} align="right" key={id}>{header.field}</TableCell>))}
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {tableProps.dataTable.map((data) =>
                        (<TableRow
                            key={data.id}
                            onClick={() => handleClickTable(data)}
                        >
                            {show && <>
                                <TableCell>
                                    <Checkbox
                                        color="primary"
                                        disabled={removeVietnameseTones(data.quanHeVoiChuHo.toString()).toLowerCase() === removeVietnameseTones("Chủ hộ").toLowerCase()}
                                        checked={selectedTachHo.includes(data.soCCCD)}
                                        onChange={() => handleChoiceMember(data.soCCCD)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Radio
                                        checked={selectedChuHo === data.soCCCD}
                                        onChange={() => handleChoiceChuHo(data.soCCCD)}
                                        disabled={!selectedTachHo.includes(data.soCCCD)}
                                    />
                                </TableCell>
                            </>}
                            <TableCell>{data[tableProps.componentField[0].properties]}</TableCell>
                            {tableProps.componentField.slice(1).map((body, id) => (<TableCell align="right" key={id}>{data[body.properties]}</TableCell>))}
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

            <Dialog open={openBasicInfo}>
                <DialogTitle>Thông tin chung cho hộ khẩu mới</DialogTitle>
                <DialogContent sx={{ width: "500px" }}>
                    <DialogContentText>Số nhà</DialogContentText>
                    <TextField autoFocus id="soNha" fullWidth onChange={onChange} />
                    <DialogContentText>Đường phố</DialogContentText>
                    <TextField multiline id="duongPho" fullWidth onChange={onChange} />
                    <DialogContentText>Phường</DialogContentText>
                    <TextField multiline id="phuong" fullWidth onChange={onChange} />
                    <DialogContentText>Quận</DialogContentText>
                    <TextField multiline id="quan" fullWidth onChange={onChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmAlert(true)}> <TaskAltIcon />Xác nhận</Button>
                    <Button style={{ color: 'red' }} onClick={() => setOpenBasicInfo(false)} autoFocus>
                        <CancelIcon />
                        Hủy bỏ
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={confirmAlert}>
                <DialogContent sx={{ width: "300px" }} style={{ color: 'orange' }} align="center">
                    <WarningIcon sx={{ fontSize: 70 }} />
                    <DialogContentText sx={{ fontWeight: 'bold' }} >
                        Bạn có chắc muốn tách khẩu (thao tác không thể hoàn tác)
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleSubmit()}> <TaskAltIcon />Đồng ý</Button>
                    <Button style={{ color: 'red' }} onClick={() => setConfirmAlert(false)} autoFocus>
                        <CancelIcon />
                        Hủy bỏ
                    </Button>
                </DialogActions>
            </Dialog >
        </>
    )
}

export default TableTachKhau