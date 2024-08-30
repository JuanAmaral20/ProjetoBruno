import { ContainerAdminPage } from "../container-admin-page";
import "../admin-home/style.css";
import {
  User,
  LayoutGrid,
  ShoppingBasket,
  CircleDollarSign,
} from "lucide-react";

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

  return (
    <ContainerAdminPage>
      <h1 className="title-admin">Sistema de administração - Supermarket</h1>
      <div className="info-geral">
        <a className="info" href="">
          <User className="tamanho-padrao" />
          <p className="tamanho-info">Usuários:</p>
          <p className="tamanho-info">100</p>
        </a>

        <a className="info" href="">
          <ShoppingBasket className="tamanho-padrao" />
          <p className="tamanho-info">Produtos:</p>
          <p className="tamanho-info">100</p>
        </a>

        <a className="info" href="">
          <LayoutGrid className="tamanho-padrao" />
          <p className="tamanho-info">Categorias:</p>
          <p className="tamanho-info">100</p>
        </a>

        <a className="info" href="">
          <CircleDollarSign className="tamanho-padrao" />
          <p className="tamanho-info">Valor arrecadado:</p>
          <p className="tamanho-info">100</p>
        </a>
      </div>

      <div className="divisao-tabelas">
        <table>
          <caption>
            <strong>Lista dos últimos 10 usuários cadastrados:</strong>
          </caption>
          <thead>
            <tr>
              <th>Usuários</th>
              <th>Email</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>joao.silva@example.com</td>
              <td>2024-08-01</td>
            </tr>
            <tr>
              <td>Maria Oliveira</td>
              <td>maria.oliveira@example.com</td>
              <td>2024-08-15</td>
            </tr>
            <tr>
              <td>Carlos Santos</td>
              <td>carlos.santos@example.com</td>
              <td>2024-08-20</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>
            <strong>Lista dos últimos 10 produtos cadastrados:</strong>
          </caption>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome do Produto</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>joao.silva@example.com</td>
              <td>2024-08-01</td>
            </tr>
            <tr>
              <td>Maria Oliveira</td>
              <td>maria.oliveira@example.com</td>
              <td>2024-08-15</td>
            </tr>
            <tr>
              <td>Carlos Santos</td>
              <td>carlos.santos@example.com</td>
              <td>2024-08-20</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>
            <strong>Categorias cadastradas:</strong>
          </caption>
          <thead>
            <tr>
              <th>Número</th>
              <th>Tipo de Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João Silva</td>
              <td>joao.silva@example.com</td>
            </tr>
            <tr>
              <td>Maria Oliveira</td>
              <td>maria.oliveira@example.com</td>
            </tr>
            <tr>
              <td>Carlos Santos</td>
              <td>carlos.santos@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ContainerAdminPage>
  );
};
