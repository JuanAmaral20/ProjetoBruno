import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin({
  setIsOpenNewAccount,
  users,
  renderizarFormularioCriarConta,
}) {
  const emailLoginRef = useRef(null);
  const senhaLoginRef = useRef(null);
  const navigate = useNavigate();

  function limparInputs() {
    emailLoginRef.current.value = "";
    senhaLoginRef.current.value = "";
  }

  function fazerLogin(event) {
    event.preventDefault();

    let email = emailLoginRef.current.value;
    let senha = senhaLoginRef.current.value;

    const isUserExists = users.find((element) => {
      return element.email === email;
    });

    if (email === "") {
      return alert("Por favor, preencha todos os campos!");
    }
    if (senha === "") {
      return alert("Por favor, preencha todos os campos!");
    }

    if (!isUserExists) {
      limparInputs();
      return alert("Usuário não existente!");
    }

    if (!(isUserExists.senha === senha)) {
      limparInputs();
      return alert("Usuário não existente!");
    }

    if (isUserExists.role === "ADMIN") {
      navigate("/home/admin");
    } else {
      navigate("/home");
    }
  }

  function renderizarFormularioCriarConta() {
    setIsOpenNewAccount((state) => !state);
  }

  return (
    <>
      <div className="title">
        <p>Login</p>
      </div>
      <form onSubmit={fazerLogin} className="form">
        <div className="input-padrao">
          <label className="label-padrao" htmlFor="">
            Email
          </label>
          <input
            className="input-email-senha"
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu email"
            ref={emailLoginRef}
          />
        </div>
        <div className="input-padrao">
          <label className="label-padrao" htmlFor="">
            Senha
          </label>
          <input
            className="input-email-senha"
            type="text"
            name="email"
            id="email"
            placeholder="Digite sua senha"
            ref={senhaLoginRef}
          />
        </div>

        <p className="tst">
          Não possui conta?
          <button
            type="button"
            className="criar-conta"
            onClick={renderizarFormularioCriarConta}
          >
            Fazer Cadastro
          </button>
        </p>

        <button className="btn-login">Acessar</button>
      </form>
    </>
  );
}
