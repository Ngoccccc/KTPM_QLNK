import React, { useState } from 'react'
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { Info as InfoIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './index.css'
const TableHoKhau = ({ tableProps }) => {

    const { path } = tableProps
    if (path === "hokhau")
        return (
            <TableContainer component={Paper} sx={{ minWidth: 670, maxHeight: 460, borderTop: 2, marginTop: 2 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', }}>{tableProps.componentField[0].field}</TableCell>
                            {tableProps.componentField.slice(1).map((header, id) => (
                                <TableCell sx={{ fontWeight: 'bold', width: '20%' }} align="right" key={id}>{header.field}</TableCell>))}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableProps.searchTable.map((data) =>
                        (<TableRow>
                            <TableCell sx={{ width: 650 }}>{data[tableProps.componentField[0].properties]}</TableCell>
                            {tableProps.componentField.slice(1).map((body, id) => (
                                <TableCell sx={{ width: 650 }} align="right" key={id}>{data[body.properties] ? data[body.properties] : data.chuho[body.properties]}</TableCell>))}
                            <TableCell align="right">
                                <Link to={`/${path}/${data.soHoKhau}`} className="link" >
                                    <InfoIcon color="primary" />
                                </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        )
}

export default TableHoKhau