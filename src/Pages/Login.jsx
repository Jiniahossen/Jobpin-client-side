import IconLogin from "../Components/IconLogin";
import LoginForm from "../Components/LoginForm";


const Login = () => {
    return (
        <div className=" max-w-7xl mx-auto text-center  my-4">
            <h2 className=" text-2xl mt-4 mb-4 font-medium font-serif">Login</h2>
            <div>
                <IconLogin></IconLogin>
            </div>
            <h2 className=" text-base font-serif font-medium mt-4">Or,</h2>
            <LoginForm></LoginForm>

        </div>
    );
};

export default Login;