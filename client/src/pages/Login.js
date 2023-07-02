import Header from "../components/Header"
import Login from "../components/Login"
import SignUpNavigate from "../components/SignUpNavigate"

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Login to your account"
                />
            <Login/>
            <SignUpNavigate
            paragraph="Don't have an account yet? "
            linkName="SignUp"
            linkUrl="/signup"
            />
        </>
    )
}