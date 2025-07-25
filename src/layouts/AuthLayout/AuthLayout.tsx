import { Outlet } from "react-router";
import "./AuthLayout.css";

const AuthLayout = () => {
    return(
        <>
            <section id="authLayout" className="relative w-screen h-screen bg-cover bg-no-repeat bg-center">
                <div id="formContainer" className="w-full h-full flex justify-center items-center p-5">
                    <div className="w-fit h-fit">
                        <Outlet/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AuthLayout;