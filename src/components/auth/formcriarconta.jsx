import { useRef } from "react";

export function FormCriarConta({
  setIsOpenNewAccount,
  setUsers,
  users,
  renderizarFormularioCriarConta,
}) {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const cpfRef = useRef(null);
  const senhaRef = useRef(null);
  const roleRef = useRef(null);

  function limparInputs() {
    nomeRef.current.value = "";
    cpfRef.current.value = "";
    emailRef.current.value = "";
    senhaRef.current.value = "";
  }

  function realizarCadastro(event) {
    event.preventDefault();

    let nome = nomeRef.current.value;
    let cpf = cpfRef.current.value;
    let email = emailRef.current.value;
    let senha = senhaRef.current.value;
    let role = roleRef.current.value;

    const isUserExists = users.find((element) => {
      return element.email === email;
    });

    if (nome === "") {
      return alert("Por favor, preencha todos os campos!");
    }
    if (cpf === "") {
      return alert("Por favor, preencha todos os campos!");
    }
    if (email === "") {
      return alert("Por favor, preencha todos os campos!");
    }
    if (senha === "") {
      return alert("Por favor, preencha todos os campos!");
    }

    if (isUserExists) {
      limparInputs();
      return alert("Email já cadastrado!");
    }

    if (isUserExists?.cpf === cpf) {
      alert("CPF já cadastrado!");
      return limparInputs();
    }

    const dataCadastro = new Date().toLocaleString();

    setUsers((state) => [
      ...state,
      { id: state.length + 1, nome, email, senha, cpf, role, dataCadastro },
    ]);

    alert("Cadastrado com sucesso!");

    setIsOpenNewAccount(false);
  }

  return (
    <>
      <div className="title">
        <p>Cadastro</p>
      </div>
      <form onSubmit={realizarCadastro} className="form">
        <div className="input-padrao">
          <label className="label-padrao" htmlFor="">
            Nome
          </label>
          <input
            className="input-email-senha"
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            ref={nomeRef}
          />
        </div>
        <div className="input-padrao">
          <label className="label-padrao" htmlFor="">
            CPF
          </label>
          <input
            className="input-email-senha"
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu CPF"
            ref={cpfRef}
          />
        </div>
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
            ref={emailRef}
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
            ref={senhaRef}
          />
        </div>

        <div className="input-padrao">
          <label className="label-padrao" htmlFor="">
            Tipo de usuário
          </label>
          <select ref={roleRef} defaultValue={"USER"}>
            <option className="opt-padrao" value="ADMIN">
              Admin
            </option>
            <option className="opt-padrao" value="USER" defaultChecked>
              Cliente
            </option>
          </select>
        </div>

        <p className="tst">
          Já possui conta?
          <button
            type="button"
            className="criar-conta"
            onClick={renderizarFormularioCriarConta}
          >
            Fazer Login
          </button>
        </p>
        <button className="btn-login" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}
