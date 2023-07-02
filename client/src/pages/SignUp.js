import Header from "../components/Header";
import Signup from "../components/SignUp";
import SignUpNavigate from "../components/SignUpNavigate";

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