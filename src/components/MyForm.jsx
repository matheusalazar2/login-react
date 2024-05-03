import PropTypes from "prop-types";
import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
    // Gerenciamento de dados
    const [email, setEmail] = useState(user ? user.email : "");
    const [senha, setSenha] = useState(user ? user.senha : "");
    const [login, setLogin] = useState(false);
    const [flag, setFlag] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlag(true);

        if (email == "eduardo.lino@pucpr.br" && senha == "123456") {
            setLogin(true);
        }
    };

    return (
        <div>
            {/* Criação de Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                    />
                    <input type="submit" value="Acessar" />
                </div>
            </form>
            {login && <span>Acessado com sucesso!</span>}
            {!login && flag && <span>Usuário ou senha incorretos!</span>}
        </div>
    );
};

MyForm.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        senha: PropTypes.string.isRequired,
    }),
}

export default MyForm;
