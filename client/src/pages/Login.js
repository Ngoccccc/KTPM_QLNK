import Header from "../containers/Login/Header"
import Login from "../containers/Login/Login"
import SignUpNavigate from "../containers/Login/SignUpNavigate"

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Login to your account"
                />
            <Login/>
            <SignUpNavigate
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
            />
        </>
    )
}