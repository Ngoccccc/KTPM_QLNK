import './App.css';
import './containers/Layout'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Layout from './containers/Layout';
import NhanKhau from './containers/NhanKhau'
import HoKhau from './containers/HoKhau';
import HopToDanPho from './containers/HopToDanPho';
import TamTru from './containers/TamTru';
import ThongKe from './containers/ThongKe';
import TamVang from './containers/TamVang';
import HoKhauDetail from './containers/HoKhau/HoKhauDetail';
import Login from './containers/Login';
import HopToDanPhoDetail from './containers/HopToDanPho/HopToDanPhoDetail'
import BinhBau from './containers/HopToDanPho/BinhBau';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route path="/nhankhau" element={<NhanKhau />} />
          <Route path="/hokhau"  >
            <Route index element={<HoKhau />} />
            <Route path=":soHoKhau" element={<HoKhauDetail />} />
          </Route>
          <Route path="/tamtru" element={<TamTru />} />
          <Route path="/tamvang" element={<TamVang />} />
          <Route path="/hoptodanpho">
            <Route index element={<HopToDanPho />} />
            <Route path=":id" element={<HopToDanPhoDetail />} />
            <Route path="binhbau" element={<BinhBau />} />
          </Route>
          <Route path="/thongke" element={<ThongKe />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
