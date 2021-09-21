import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import "./styles.css";


function Login ({ setAuthentification, setError }) {

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    const handleForm = (data) => {
        axios
            .post("https://kenzieshop.herokuapp.com/sessions/", data)
            .then(res => {
                window.localStorage.clear();
                window.localStorage.setItem("authToken", res.data.access);
                setAuthentification(true)
                setError(false)
        })
        .catch(err => {
            setError(true)
            setAuthentification(false)
        })                
    }

    return (
        <>
        <form className="form-container" onSubmit={handleSubmit(handleForm)} >
            <h1 className="form-title">Acesse sua conta</h1>
            <div className="input-container">
                <input className="input username" placeholder="Nome do usuário" {...register("username")} />
                <span style={{color: "red" , fontSize:"10px" , marginTop:"5px"}}>{errors.username?.message}</span>
            </div>
            <div className="input-container">
                <input className="input password" type="password" placeholder="Senha" {...register("password")} />
                <span style={{color: "red" , fontSize:"10px" , marginTop:"5px" }}>{errors.password?.message}</span>
            </div>
            <button className="btn-form" type="submit" > Entrar </button>
        </form>
        </>
    )
}

export default Login;
