import { ContainerAdminPage } from "../container-admin-page";
import "../admin-home/style.css";
import {
  User,
  LayoutGrid,
  ShoppingBasket,
  CircleDollarSign,
} from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export const Admin = () => {
  // const dados = [
  //   {
  //     title: "usuarios",
  //     quantity: 100,
  //   },
  //   {
  //     title: "categoria",
  //     quantity: 100,
  //   },
  //   {
  //     title: "produtos",
  //     quantity: 100,
  //   },
  // ];

  const { users, products } = useContext(UserContext);

  return (
    <ContainerAdminPage>
      <h1 className="title-admin">Sistema de administração - Supermarket</h1>
      <div className="info-geral">
        <a className="info" href="">
          <User className="tamanho-padrao" />
          <p className="tamanho-info">Usuários:</p>
          <p className="tamanho-info">{users.length}</p>
        </a>

        <a className="info" href="">
          <ShoppingBasket className="tamanho-padrao" />
          <p className="tamanho-info">Produtos:</p>
          <p className="tamanho-info">{products.length}</p>
        </a>
      </div>

      <div>
        <table>
          <caption>
            <strong>Lista dos últimos usuários cadastrados:</strong>
          </caption>
          <thead>
            <tr>
              <th>Usuários</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Tipo de Usuário</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
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
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <caption>
            <strong>Lista dos últimos produtos cadastrados:</strong>
          </caption>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço (R$)</th>
              <th>Porcentagem de Desconto (%)</th>
              <th>Preço com deconto</th>
              <th>Data de Vencimento</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.nomeProduto}</td>
                <td>{product.descricao}</td>
                <td>{product.preco}</td>
                <td>{product.desconto}</td>
                <td>
                  {product.preco - product.preco * (product.desconto / 100)}
                </td>
                <td>{product.vencimento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContainerAdminPage>
  );
};
