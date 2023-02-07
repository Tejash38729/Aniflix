import ErrorAlert from "@components/alerts/ErrorAlert";
import LoginForm from "@components/login/LoginForm";
import RegisterForm from "@components/login/RegisterForm";
import VerificationButton from "@components/login/VerificationButton";
import {useIsAuthenticated} from "@hooks/useIsAuthenticated";
import AniFlixLogo from "@icons/AniFlixLogo";
import GithubSignIn from "@icons/GithubSignIn";
import GoogleSignIn from "@icons/GoogleSignIn";
import LoginBackground from "@images/aniflix-login.png";
import UserService from "@service/UserService";
import Image from "next/image";
import React from "react";

export default function Login() {
    const {isSignedIn, isVerified} = useIsAuthenticated();
    const [isError, setIsError] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("");
    const [register, setRegister] = React.useState<boolean>(false);
    
    async function requestVerification() {
        const user = UserService.getUserInformation()
        const response = await UserService.requestVerificationEmail(user?.email);
        setIsError(response.isError);
        setMessage(response.error);
    }
    
    return (
        <div className={"h-full w-full max-w-[550px] mx-auto flex justify-center items-center"}>
            <div className={"absolute top-0 left-0 w-full h-full brightness-75 -z-10"}>
                <Image
                    src={LoginBackground}
                    alt={"Login Background"}
                    width={7680}
                    height={4320}
                    className={"min-h-screen h-full object-cover overflow-hidden"}
                    priority
                />
            </div>
            
            <div className={"flex items-center min-h-[100vh] w-full p-[5%]"}>
                <div className={"bg-black/90 flex flex-col w-full p-10 mb-8 rounded-lg"}>
                    <div className={"flex flex-col items-center space-y-6 mb-6"}>
                        <AniFlixLogo className={"w-[50%] h-[50%}"}/>
                        
                        {
                            register
                                ? <h4 className={"font-poppins text-xl text-white"}> Register Account </h4>
                                : <h4 className={"font-poppins text-xl text-white"}> Sign-In </h4>
                        }
                        
                        {(isSignedIn && !isVerified)
                            ? <VerificationButton onClick={requestVerification}/>
                            : register ? <RegisterForm/> : <LoginForm/>}
                        <ErrorAlert message={message} show={isError}/>
                        
                        <div className={"font-poppins text-white flex space-x-2"}>
                            <a className={"interactive-underline cursor-pointer"} onClick={() => setRegister(false)}>Sign-in</a>
                            <a> - </a>
                            <a className={"interactive-underline cursor-pointer"} onClick={() => setRegister(true)}>Register</a>
                        </div>
                        
                        <div className={"flex flex-col items-center space-y-4 w-full"}>
                            <div className={"w-[80%] h-[1px] bg-[#717171]"}/>
                            <div className={"flex flex-col space-y-4 w-full px-14 items-center"}>
                                <div className={"flex flex-row items-center space-x-4 pb-2"}>
                                    <p className={"text-[#717171] font-poppins text-xs cursor-default"}>
                                        <a> or sign in with </a>
                                    </p>
                                </div>
                                <GoogleSignIn/>
                                <GithubSignIn/>
                                <div className={"flex flex-row items-center space-x-4 pt-10"}>
                                    <a className={"text-[#717171] font-poppins text-xs interactive-underline"}
                                       href={"https://github.com/Jordi-Jaspers"}>
                                        © Designed and built by Jordi Jaspers
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
