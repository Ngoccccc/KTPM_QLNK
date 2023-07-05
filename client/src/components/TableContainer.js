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
    Radio
} from "@mui/material";

const TableController = ({ tableProps }) => {

    const handleClickTable = (data) => {
        if (tableProps?.setSelectTable) {
            tableProps.setSelectTable(data)
            tableProps.setOpenDetail(true)
        }
    }
    console.log(tableProps)
    return (
        <TableContainer component={Paper} sx={{
            minWidth: 650, maxHeight: 460, borderTop: 2, marginTop: 2
        }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow>
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
                        <TableCell>{data[tableProps.componentField[0].properties]}</TableCell>
                        {tableProps.componentField.slice(1).map((body, id) => (
                            <TableCell align="right" key={id}>{data[body.properties] || (data.chuHo ? data.chuHo[body.properties] : "loading")}</TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default TableController