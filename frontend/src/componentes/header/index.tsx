import logo from "../../assets/imagens/logo.svg"
import "./style.css"

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig"> Rafael Gouveia</a>
                    <p id='info' >Baseado na atividade da Semana Spring React 11/07/2022</p>
                </p>
            </div>
        </header>
    )
}

export default Header

/*
no react ao usar mais de uma tag no mesmo return, ou função, temos que inserilos dentro de uma tag <></>
*/
/* shift + alt + f - ajusta as linhas do script */
/* Class para className, o react não reconhece o class */