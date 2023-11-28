import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";


const Button = (props) => {

    const navigate = useNavigate();

    let pagina = "/";

    if (props.path === "sobre") {
        pagina = "/sobre";
    } else if (props.path === "termosecondicoes") {
        pagina = "/termosecondicoes";
    } else if (props.path === "contato") {
        pagina = "/contato";
    }

    let buttonClass = "defaultButton";

    if (props.variant === "yellow") {
        buttonClass = "yellowButton";
    } else if (props.variant === "purple") {
        buttonClass = "purpleButton";
    }

    return (
        <button className={buttonClass} onClick={() => navigate(pagina)}>{props.name}</button>
    );
};

export default Button;
