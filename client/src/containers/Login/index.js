import react, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
import axios from 'axios'
import { apiURL } from '../../utils/constant';
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();


export default function SignIn() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = () => {
        const fetchData = async () => {
            try {
                const data = await axios.post(`${apiURL}/login`, form)
                console.log(data.data.status)
                if (data.status === 200) {
                    navigate("/nhankhau")
                }
                else if (data.status === 400) {
                    // handle sai mat khau
                    throw new Error('Incorrect username or password');

                }
                // if (data.data.status === true) {
                //     navigate("/nhankhau")
                // }
            }
            catch (error) { console.log("khong hop le") }
        }
        fetchData()
    };

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField

                            fullWidth
                            id="username"
                            label="Username"

                            autoFocus
                            onChange={onChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={onChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            onClick={handleSubmit}
                            fullWidth

                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}