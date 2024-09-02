import { UserPen, Trash2 } from "lucide-react";
import "./style.css";
import { UserContext } from "../../contexts/user-context";
import { useContext, useEffect, useRef, useState } from "react";

export const UserTable = () => {
  const { users, setUsers } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userSelected, setUserSelected] = useState(null);

  const [nome, setNome] = useState(userSelected?.nome ?? "");
  const emailRef = useState(null);
  const cpfRef = useState(null);
  const senhaRef = useState(null);
  const roleRef = useState(null);

  useEffect(() => {
    if (userSelected) {
      setNome(userSelected.nome);
    }
  }, [userSelected]);

  function deleteUser(id) {
    setUsers((state) => state.filter((user) => user.id !== id));
  }

  function handleUserSelectedClick(user) {
    setUserSelected(user);

    setIsOpen(true);
  }

  function salvarAlteracoes(event) {
    event.preventDefault();

    const updatedUser = {
      ...userSelected,
      nome, // Manter os dados existentes
    };

    const newUsers = users.map((user) =>
      user.id === userSelected.id ? updatedUser : user
    );

    setUsers(newUsers);

    setUserSelected(null);
    setIsOpen(false);
  }

  function fecharModal() {
    setIsOpen(false);
    setUserSelected(null);
  }

  return (
    <>
      {isOpen && userSelected && (
        <div id="teste-modal">
          <div onClick={fecharModal} className="container-fechar-modal" />
          <div className="modal">
            <div className="title">
              <p>Editar Usuário</p>
            </div>
            <form onSubmit={salvarAlteracoes} className="form">
              <div className="input-padrao">
                <label className="label-padrao" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="input-email-senha"
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Digite seu nome"
                  defaultValue={userSelected?.nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="input-padrao">
                <label className="label-padrao" htmlFor="cpf">
                  CPF
                </label>
                <input
                  className="input-email-senha"
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  defaultValue={userSelected.cpf}
                />
              </div>
              <div className="input-padrao">
                <label className="label-padrao" htmlFor="email">
                  Email
                </label>
                <input
                  className="input-email-senha"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                  defaultValue={userSelected.email}
                />
              </div>
              <div className="input-padrao">
                <label className="label-padrao" htmlFor="senha">
                  Senha
                </label>
                <input
                  className="input-email-senha"
                  type="text"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha"
                  defaultValue={userSelected.senha}
                />
              </div>

              <div className="input-padrao">
                <label className="label-padrao" htmlFor="role">
                  Tipo de usuário
                </label>
                <select defaultValue={userSelected.role}>
                  <option className="opt-padrao" value="ADMIN">
                    Admin
                  </option>
                  <option className="opt-padrao" value="USER">
                    Cliente
                  </option>
                </select>
              </div>
              <button className="btn-cadastrar-user" type="submit">
                Salvar
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Data de Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.nome}</td>
              <td>{user.cpf}</td>
              <td>{user.email}</td>
              <td>
                <div
                  className={
                    user.role === "ADMIN"
                      ? "badge-role-admin"
                      : "badge-role-user"
                  }
                >
                  {user.role}
                </div>
              </td>
              <td>{user.dataCadastro}</td>
              <td>
                <div className="acoes">
                  <UserPen
                    className="edit"
                    onClick={() => {
                      handleUserSelectedClick(user);
                    }}
                  />
                  <Trash2
                    className="delete"
                    onClick={() => deleteUser(user.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
