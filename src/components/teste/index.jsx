import { ContainerAdminPage } from "../container-admin-page";
import { ShoppingBasket } from "lucide-react";
import "./style.css";

export const Teste = () => {
  return (
    <ContainerAdminPage>
      <h1 className="title">Sistema de administração - Usuários</h1>
      <div className="info-geral">
        <button className="info" href="">
          <ShoppingBasket className="tamanho-padrao" />
          <p className="tamanho-info">Cadastrar Usuários</p>
        </button>
      </div>
    </ContainerAdminPage>
  );
};
