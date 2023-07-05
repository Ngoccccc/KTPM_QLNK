import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, Grid, TextField, Stack } from "@mui/material";
import { AddCircleOutline, Edit } from "@mui/icons-material";
import { dataDetail } from "../../contants/DataTestHoKhau";
import NhanKhauModal from "../../components/NhanKhauModal";
import TableTachKhau from "./../../components/TableTachKhau";
import TableController from "../../components/TableContainer";
import AddNhanKhau from "../../components/AddNhanKhau";
import Modal from "../../components/Modal";
import SearchData from "../../components/SearchData";
import HopToDanPho from "./index";
import { apiURL } from "../../utils/constant";
import axios from "axios";
const HoKhauDetail = () => {
    const hopToDanPhoField = [
        { field: "Nội dung cuộc họp", properties: "noiDung" },
        { field: "Địa điểm họp", properties: "diaDiem" },
        { field: "Thời gian bắt đầu", properties: "thoiGianBatDau" },
        { field: "Thời gian kết thúc", properties: "thoiGianKetThuc" },
    ];

    const ghiNhan = [
        { field: "Hộ đã tham dự", properties: "soHoKhau" },
        { field: "Tên chủ hộ", properties: "hoTen" },
        { field: "Số căn cước chủ hộ", properties: "soCCCD" },
    ];

    const [openAddMember, setOpenAddMember] = useState(false);
    const { id } = useParams();
    const num = parseInt(id);
    const [selectTable, setSelectTable] = useState()
    const [listData, setListData] = useState([])
    const [newData, setNewData] = useState([])
    const [changeUI, setChangeUI] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.post(`${apiURL}/hoptodanpho/xem`, { id: num });
                setListData(data.data.hoThamGia)
                setNewData(data.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [changeUI])
    const tableProps = {
        componentField: ghiNhan,
        dataTable: listData,
        num
    }

    // const searchProps = {
    //     listData,
    //     setSearchTable,
    //     componentSearch: hopToDanPhoField
    // }

    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        setEditable(false);
        console.log(newData);
        // Save the edited newData
    };

    const handleNewDataChange = (field, event) => {
        setNewData({
            ...newData,
            [field]: event.target.value,
        });
    };

    const [soCCCDDiemDanh, setSoCCCDDiemDanh] = useState(0)
    const getSoCCCDDiemDanh = (e) => {
        setSoCCCDDiemDanh(parseInt(e.target.value))
    }
    const handleDiemDanh = () => {
        const fetchData = async () => {
            try {
                const data = await axios.post(`${apiURL}/hoptodanpho/thamgia`, { id: num, soCCCD: soCCCDDiemDanh });
                setChangeUI(pre => !pre)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }

    return (
        <div>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                Thông tin chung
                {!editable ? (
                    <Button onClick={handleEdit}>
                        {" "}
                        <Edit />
                        Chỉnh sửa
                    </Button>
                ) : (
                    <Button onClick={handleSave}>Xác nhận</Button>
                )}
            </Typography>
            <Grid container justifyContent="space-between">
                <Stack container direction="column">
                    {hopToDanPhoField.map((value, id) => (
                        <div key={id}>
                            <Grid container direction="row">
                                <Typography sx={{ marginTop: 1 }}>{value.field}:</Typography>
                                {!editable ? (
                                    <Typography sx={{ marginTop: 1, marginLeft: 1 }}>
                                        {newData[value.properties]}
                                    </Typography>
                                ) : (
                                    <TextField
                                        sx={{ paddingLeft: 2, marginBottom: 1 }}
                                        value={newData[value.properties]}
                                        onChange={(e) => handleNewDataChange(value.properties, e)}
                                    />
                                )}
                                <Typography>

                                </Typography>
                            </Grid>
                        </div>
                    ))}
                    <Typography>Số hộ đã tham gia: {listData.length}</Typography>
                </Stack>
                <Grid>
                    <Typography sx={{ marginTop: 1, marginLeft: 4 }}>
                        Số chứng minh nhân dân
                    </Typography>
                    <TextField
                        sx={{ paddingLeft: 2, marginBottom: 1 }}
                        onChange={getSoCCCDDiemDanh}
                    />
                    <Button align="right" sx={{ marginBottom: 2 }}
                        style={{
                            color: '#1976d2'
                        }}
                        onClick={handleDiemDanh}
                    >
                        Điểm danh</Button>
                </Grid>
            </Grid>
            {/* <SearchData /> */}
            <TableController tableProps={tableProps} />
        </div>
    );
};

export default HoKhauDetail;
