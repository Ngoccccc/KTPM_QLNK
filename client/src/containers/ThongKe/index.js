import React, { useState, useEffect } from "react";
import {
    Typography,
    Grid,
    Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { apiURL } from "../../utils/constant";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ThongKe = () => {
    const [listGioiTinh, setListGioiTinh] = useState({});
    const [listDoTuoi, setListDoTuoi] = useState([]);
    const [listTrangThai, setListTrangThai] = useState({});

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
            const data = await axios.get(`${apiURL}/nhankhau/thongke/dotuoi`, { minAge: 0, maxAge: 60 });
            setListDoTuoi(data.data);
            console.log(listDoTuoi);
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

    console.log({ listTrangThai, listDoTuoi, listGioiTinh })
    return (
        <>
            <div>Thống kê nhân khẩu</div>
            <Typography mb-8>Thống kê giới tính: </Typography>
            <Grid container item >
                <Grid >
                    <Item>
                        Nam : {!listGioiTinh.Nam?.length ? "loading" : listGioiTinh.Nam.length}
                        {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nam.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        Nữ : {!listGioiTinh.Nu?.length ? "loading" : listGioiTinh.Nu.length}
                        {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nu.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
                    </Item>
                </Grid>
            </Grid>

            <Typography mb-8>Thống kê độ tuổi: </Typography>
            <Grid container item >
                <Item>
                    Số người trong độ tuổi yêu cầu là : {!listDoTuoi?.length ? "loading" : listDoTuoi.length}
                </Item>
            </Grid>

            <Typography mb-8>Thống kê tạm trú , tạm vắng: </Typography>
            <Grid container item >
                <Grid >
                    <Item>
                        Số đơn tạm trú : {!listTrangThai.TamTru?.length ? "loading" : listTrangThai.TamTru.length}
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        Số đơn tạm vắng : {!listTrangThai.TamVang?.length ? "loading" : listTrangThai.TamVang.length}
                    </Item>
                </Grid>
            </Grid>
        </>
    );
};

export default ThongKe;
