import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user-context";

export const ModalProduto = ({ product, fecharModal, setIsOpen }) => {
  const [nomeProduto, setNomeProduto] = useState(product?.nomeProduto ?? "");
  const [descricao, setDescricao] = useState(product?.descricao ?? "");
  const [preco, setPreco] = useState(product?.preco ?? 0);
  const [desconto, setDesconto] = useState(product?.desconto ?? 0);
  const [vencimento, setVencimento] = useState(product?.vencimento ?? "");

  const { products, setProducts } = useContext(UserContext);

  function salvarAlteracoes(event) {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      nomeProduto,
      descricao,
      preco,
      desconto,
      vencimento, // Manter os dados existentes
    };

    const newProducts = products.map((productInteration) =>
      productInteration.id === product.id ? updatedProduct : productInteration
    );

    setProducts(newProducts);

    setIsOpen(false);
  }

  return (
    <div id="teste-modal">
      <div onClick={fecharModal} className="container-fechar-modal" />
      <div className="modal">
        <div className="title">
          <p>Atualizar Produto</p>
        </div>
        <form onSubmit={salvarAlteracoes} className="form">
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
              defaultValue={product.nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
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
              defaultValue={product.descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
              defaultValue={product.preco}
              onChange={(e) => setPreco(e.target.value)}
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
              defaultValue={product.desconto}
              onChange={(e) => setDesconto(e.target.value)}
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
              defaultValue={product.vencimento}
              onChange={(e) => setVencimento(e.target.value)}
            />
          </div>
          <button className="btn-cadastrar-user" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
