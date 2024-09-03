import { ContainerAdminPage } from "../container-admin-page";
import { ShoppingBasket, Trash2, UserPen } from "lucide-react";
import { useRef, useState } from "react";
import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { ModalProduto } from "../modal-produtos";

export const Teste = () => {
  const { products, setProducts } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const nomeProdRef = useRef(null);
  const descricaoRef = useRef(null);
  const precoRef = useRef(null);
  const descontoRef = useRef(null);
  const vencimentoRef = useRef(null);

  function abrirModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }

  function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  function limparInputs() {
    nomeProdRef.current.value = "";
    descricaoRef.current.value = "";
    precoRef.current.value = "";
    descontoRef.current.value = "";
    vencimentoRef.current.value = "";
  }

  function adicionarProdutos(event) {
    event.preventDefault();

    let nomeProduto = nomeProdRef.current.value;
    let descricao = descricaoRef.current.value;
    let preco = precoRef.current.value;
    let desconto = descontoRef.current.value;
    let vencimento = vencimentoRef.current.value;

    const isProductsExists = products.find((element) => {
      return element.nomeProduto === nomeProduto;
    });

    if (isProductsExists) {
      limparInputs();
      return alert("Email já cadastrado!");
    }

    setProducts((state) => [
      ...state,
      {
        id: state.length + 1,
        nomeProduto,
        descricao,
        preco,
        desconto,
        vencimento,
      },
    ]);

    alert("Cadastrado com sucesso!");
    limparInputs();
    fecharModal();
  }

  function handleProductSelectedClick(product) {
    setProductSelected(product);
    setIsOpen(true);
  }

  function deleteProduct(id) {
    setProducts((state) => state.filter((product) => product.id !== id));
  }
  function fecharModalUpdate() {
    setIsOpen(false);
    setProductSelected(null);
  }
  return (
    <ContainerAdminPage>
      <h1 className="title">Sistema de administração - Usuários</h1>
      <div className="info-geral-prod">
        <button className="info" onClick={abrirModal}>
          <ShoppingBasket className="tamanho-padrao" />
          <p className="tamanho-info">Cadastrar Produto</p>
        </button>
        <h1>Tabela de Produtos</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
            <th>Porcentagem de Desconto (%)</th>
            <th>Preço com deconto</th>
            <th>Data de Vencimento</th>
            <th>Ações</th>
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
              <td>
                <div className="acoes">
                  <UserPen
                    className="edit"
                    onClick={() => {
                      handleProductSelectedClick(product);
                    }}
                  />
                  <Trash2
                    className="delete"
                    onClick={() => deleteProduct(product.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="modal" className="modal-geral">
        <div onClick={fecharModal} className="modal-fechar" />
        <div className="modal">
          <div className="title">
            <p>Cadastrar Produto</p>
          </div>
          <form onSubmit={adicionarProdutos} className="form">
            <div className="input-padrao">
              <label className="label-padrao" htmlFor="">
                Nome do Produto
              </label>
              <input
                className="input-atributos"
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite o nome do produto"
                ref={nomeProdRef}
              />
            </div>
            <div className="input-padrao">
              <label className="label-padrao" htmlFor="">
                Descrição
              </label>
              <input
                className="input-atributos"
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite a descrição do produto"
                ref={descricaoRef}
              />
            </div>
            <div className="input-padrao">
              <label className="label-padrao" htmlFor="">
                Preço
              </label>
              <input
                className="input-atributos"
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite o preço do produto"
                ref={precoRef}
              />
            </div>
            <div className="input-padrao">
              <label className="label-padrao" htmlFor="">
                Porcentagem de Desconto
              </label>
              <input
                className="input-atributos"
                type="text"
                name="email"
                id="email"
                placeholder="Digite a porcentagem de desconto "
                ref={descontoRef}
              />
            </div>
            <div className="input-padrao">
              <label className="label-padrao" htmlFor="">
                Data de Vencimento
              </label>
              <input
                className="input-atributos"
                type="text"
                name="email"
                id="email"
                placeholder="Digite a data de vencimento "
                ref={vencimentoRef}
              />
            </div>
            <button className="btn-cadastrar-user" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>

      {isOpen && productSelected && (
        <ModalProduto
          product={productSelected}
          fecharModal={fecharModalUpdate}
          setIsOpen={setIsOpen}
        />
      )}
    </ContainerAdminPage>
  );
};
