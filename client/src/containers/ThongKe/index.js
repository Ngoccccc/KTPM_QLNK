import React, { useState, useEffect } from "react";
import {
    Typography,
    Grid,
    Paper,
    TextField,
    Button
} from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { apiURL } from "../../utils/constant";



const ThongKe = () => {
    const [listGioiTinh, setListGioiTinh] = useState({});
    const [listDoTuoi, setListDoTuoi] = useState([]);
    const [listTrangThai, setListTrangThai] = useState({});
    const [khoangTuoi, setKhoangTuoi] = useState({
        minAge: 0,
        maxAge: 100
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/nhankhau/thongke/gioitinh`);
            setListGioiTinh(data.data);
            console.log(listGioiTinh);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${apiURL}/nhankhau/thongke/tamtrutamvang`);
            setListTrangThai(data.data);
            console.log(listTrangThai);
        };
        fetchData();
    }, []);

    const handleGetAge = () => {
        const fetchData = async () => {
            const data = await axios.post(`${apiURL}/nhankhau/thongke/dotuoi`, khoangTuoi);
            setListDoTuoi(data.data);
            console.log(data.data);
        };
        fetchData()
    }

    const onChange = (e) => {
        setKhoangTuoi({
            ...khoangTuoi,
            [e.target.id]: parseInt([e.target.value][0])
        })
    }
    return (
        <>
            <div>Thống kê nhân khẩu</div>
            <Typography>Thống kê giới tính: </Typography>
            <Grid container direction="column">
                <Grid >
                    <Typography>
                        Nam : {!listGioiTinh.Nam?.length ? "loading" : listGioiTinh.Nam.length}
                        {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nam.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
                    </Typography>
                </Grid>
                <Grid >
                    <Typography>
                        Nữ : {!listGioiTinh.Nu?.length ? "loading" : listGioiTinh.Nu.length}
                        {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nu.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{ marginY: 1 }}>Thống kê độ tuổi: </Typography>
            <Grid
                container
                direction="row"
            >
                <Typography sx={{ margin: 1 }}>Độ tuổi từ : </Typography>
                <TextField
                    sx={{ width: 60 }}
                    id="minAge"
                    type="number"
                    onChange={onChange}
                />
                <Typography sx={{ margin: 1 }}>Đến : </Typography>
                <TextField
                    sx={{ width: 60 }}
                    id="maxAge"
                    type="number"
                    onChange={onChange}
                />
                <Button sx={{ marginX: 2 }} onClick={handleGetAge}>Truy vấn </Button>

            </Grid>

            <Grid container >
                <Typography>
                    Số người trong độ tuổi yêu cầu là : {!listDoTuoi?.length ? "Không có" : listDoTuoi.length}
                </Typography>
            </Grid>

            <Typography>Thống kê tạm trú , tạm vắng: </Typography>
            <Grid container direction="column">
                <Grid>
                    <Typography>
                        Số đơn tạm trú :{" "}
                        {!listTrangThai.TamTru?.length
                            ? "loading"
                            : listTrangThai.TamTru.length}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography>
                        Số đơn tạm vắng :{" "}
                        {!listTrangThai.TamVang?.length
                            ? "loading"
                            : listTrangThai.TamVang.length}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ThongKe;
