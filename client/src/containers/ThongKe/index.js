import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { apiURL } from "../../utils/constant";

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
      const data = await axios.post(`${apiURL}/nhankhau/thongke/dotuoi`, {
        minAge: 1,
        maxAge: 30,
      });
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

  console.log({ listTrangThai, listDoTuoi, listGioiTinh });
  return (
    <>
      <div>Thống kê nhân khẩu</div>
      <Typography>Thống kê giới tính: </Typography>
      <Grid container direction="column">
        <Typography>
          Nam :{" "}
          {!listGioiTinh.Nam?.length ? "loading" : listGioiTinh.Nam.length}
          {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nam.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
        </Typography>
        <Typography>
          Nữ : {!listGioiTinh.Nu?.length ? "loading" : listGioiTinh.Nu.length}
          {/* Chiếm: {!listGioiTinh ? "loading" : (listGioiTinh.Nu.length / (listGioiTinh.Nam.length + listGioiTinh.Nu.length)) * 100}%{" "} */}
        </Typography>
      </Grid>

      <Typography>Thống kê độ tuổi: </Typography>
      <Grid container>
        <Typography>
          Số người trong độ tuổi yêu cầu là :{" "}
          {!listDoTuoi?.length ? "loading" : listDoTuoi.length}
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
