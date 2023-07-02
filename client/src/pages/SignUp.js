import Header from "../containers/Login/Header";
import Signup from "../containers/Login/SignUp";
import SignUpNavigate from "../containers/Login/SignUpNavigate";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Sign up to create an account"
            />
            <Signup/>
            <SignUpNavigate
                paragraph="Already have an account?"
                linkName="SignIn"
                linkUrl="/"
            />
        </>
    )
}