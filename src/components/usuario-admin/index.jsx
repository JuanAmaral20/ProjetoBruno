import { useContext, useRef } from "react";
import { ContainerAdminPage } from "../container-admin-page";
import { UserContext } from "../../contexts/user-context";
import { UserTable } from "../user-table";
import { UserPlus } from "lucide-react";
import "./styles.css";

export const UsuariosAdmin = () => {
  const { users, setUsers } = useContext(UserContext);

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
  function abrirModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }

  function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  function adicionarUsers(event) {
    event.preventDefault();

    let nome = nomeRef.current.value;
    let cpf = cpfRef.current.value;
    let email = emailRef.current.value;
    let senha = senhaRef.current.value;
    let role = roleRef.current.value;

    const isUserExists = users.find((element) => {
      return element.email === email;
    });

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
    limparInputs();
    fecharModal();
  }

  return (
    <ContainerAdminPage>
      <h1 className="title">Sistema de administração - Usuários</h1>
      <div className="info-geral">
        <button onClick={abrirModal} className="info" href="">
          <UserPlus className="tamanho-padrao" />
          <p className="tamanho-info">Cadastrar Usuários</p>
        </button>
      </div>

      <div id="modal" className="modal-geral">
        <div onClick={fecharModal} className="modal-fechar" />
        <div className="modal">
          <div className="title">
            <p>Cadastrar Usuário</p>
          </div>
          <form onSubmit={adicionarUsers} className="form">
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
            <button className="btn-cadastrar-user" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      <UserTable users={users} />
    </ContainerAdminPage>
  );
};
