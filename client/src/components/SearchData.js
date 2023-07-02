import React from 'react'
import { useState } from 'react'

import {
    Grid,
    InputAdornment,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Box,
    FormControl
} from "@mui/material";
import './index.css'
import {
    Search as SearchIcon,
    Add as AddIcon,
    Clear as ClearIcon
} from "@mui/icons-material";
import removeVietnameseTones from '../contants/TiengViet';

const SearchData = ({ searchProps }) => {
    const [searchData, setSearchData] = useState({
        text: "",
        field: ""
    })

    const handleChangeSearchData = (e) => {
        setSearchData({
            ...searchData,
            [e.target.id || "field"]: e.target.value
        });

        //update table if text = ''
        if (searchData.text.length === 1) {
            searchProps.setSearchTable(searchProps.listData)
        }
    }
    const handleSearch = () => {

        searchProps.componentSearch.forEach(inputSearch => {

            if (inputSearch.field === searchData.field) {
                console.log(inputSearch.properties)
                let searched = searchProps.listData.filter((member) => {
                    return removeVietnameseTones(member[inputSearch.properties].toString()).toLowerCase() === removeVietnameseTones(searchData.text).toLowerCase()
                })
                searchProps.setSearchTable(searched)
            }
        })

    }

    const handleDeleteSearch = () => {
        setSearchData({
            ...searchData,
            text: ""
        })
        searchProps.setSearchTable(searchProps.listData)
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            sx={{ maxHeight: 80, }}

        >
            <Box sx={{ width: 120, marginRight: 5 }}>
                <FormControl fullWidth>
                    <InputLabel align="center" id="demo-simple-select-label">Trường cần tìm</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="text"
                        label="Truong can tim"
                        value={searchData.field}
                        onChange={handleChangeSearchData}
                    >
                        {searchProps.componentSearch.map((inputSearch, i) =>
                            <MenuItem key={i} value={inputSearch.field} >{inputSearch.field}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            <TextField
                id="text"
                value={searchData.text}
                onChange={handleChangeSearchData}
                sx={{ width: 400 }}
                onKeyDown={(ev) => {
                    if (ev.key === "Enter") {
                        handleSearch()
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment >
                            {searchData.text && <ClearIcon onClick={handleDeleteSearch} />}
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    ),
                }}
            />
        </Grid>
    )
}

export default SearchData