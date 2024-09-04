import { useState } from "react";
import CarLogo from "../../assets/cart.svg";
import { Apple, Carrot, Beer, Beef, Candy } from "lucide-react";

import "./style.css";

function ClientHome() {
  return (
    <>
      <header>
        <div className="logo-supermarket">
          <img className="img-logo-supermarket" src={CarLogo} alt="" />
          <h2>Supermarket</h2>
        </div>
        <div className="position">
          <div>
            <input
              className="input-search"
              type="text"
              placeholder="Pesquisar produtos..."
            />
          </div>

          <div id="home" className="navigation-general">
            <nav className="navigation">
              <a href="#home">Home</a>
              <a href="">Produtos</a>
              <a href="#categoria">Categorias</a>
              <a href="#contato">Contatos</a>
            </nav>
          </div>
        </div>
      </header>
      <section>
        <div className="conteudo-produtos">
          <div className="padrao-container">
            <img className="img-padrao" src="/src/assets/banana.jpg" alt="" />
            <div className="description">
              <p>Banana da terra</p>
              <p>1 Cacho de Banana da terra</p>
              <div className="position-btn">
                <p>R$ 08.00</p>
                <button className="btn">Comprar</button>
              </div>
            </div>
          </div>
          <div className="padrao-container">
            <img className="img-padrao" src="/src/assets/uva.jpg" alt="" />
            <div className="description">
              <p>Uva</p>
              <p>1 Cacho de uva</p>
              <div className="position-btn">
                <p>R$ 05.00</p>
                <button className="btn">Comprar</button>
              </div>
            </div>
          </div>
          <div className="padrao-container">
            <img className="img-padrao" src="/src/assets/maca.jpg" alt="" />
            <div className="description">
              <p>Maça</p>
              <p>05 maças </p>
              <div className="position-btn">
                <p>R$ 10.00</p>
                <button className="btn">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 id="#categoria" className="title-categoria">
          Categoria
        </h2>
        <div className="position-categoria">
          <a href="">
            <div className="padrao-categoria">
              {<Apple />}
              <p>Frutas</p>
            </div>
          </a>
          <a href="">
            <div className="padrao-categoria">
              {<Carrot />}
              <p>Vegetais</p>
            </div>
          </a>
          <a href="">
            <div className="padrao-categoria">
              {<Beef />}
              <p>Carnes</p>
            </div>
          </a>
          <a href="">
            <div className="padrao-categoria">
              {<Beer />}
              <p>Bebidas</p>
            </div>
          </a>
          <a href="">
            <div className="padrao-categoria">
              {<Candy />}
              <p>Doces</p>
            </div>
          </a>
        </div>
      </section>
      <section>
        <h2 className="title-prod-destaques">Produtos em destaque </h2>
        <div className="position-prod-destaques">
          <div className="padrao-destaque">
            <img
              className="img-padrao-destaque"
              src="/src/assets/picanha.jpg"
              alt=""
            />
            <p>Picanha</p>
            <p>1Kg de Picanha</p>
            <div className="position-btn-prod">
              <p>R$100.00</p>
              <button className="btn">Comprar</button>
            </div>
          </div>
          <div className="padrao-destaque">
            <img
              className="img-padrao-destaque"
              src="/src/assets/cupim.jpg"
              alt=""
            />
            <p>Cupim</p>
            <p>1Kg de Cupim</p>
            <div className="position-btn-prod">
              <p>R$80.00</p>
              <button className="btn">Comprar</button>
            </div>
          </div>
          <div className="padrao-destaque">
            <img
              className="img-padrao-destaque"
              src="/src/assets/cenoura.jpg"
              alt=""
            />
            <p>Cenoura</p>
            <p>1Kg de Cenoura</p>
            <div className="position-btn-prod">
              <p>R$20.00</p>
              <button className="btn">Comprar</button>
            </div>
          </div>
          <div className="padrao-destaque">
            <img
              className="img-padrao-destaque"
              src="/src/assets/cocacola.jpg"
              alt=""
            />
            <p>Coca-Cola</p>
            <p>Refrigerante Coca-Cola lata</p>
            <div className="position-btn-prod">
              <p>R$06.00</p>
              <button className="btn">Comprar</button>
            </div>
          </div>
        </div>
      </section>
      <footer id="contato">
        <div className="position-footer">
          <div className="padrao-footer">
            <h3>Contate-nos</h3>
            <p>123, Main Street</p>
            <p>Campina Grande - PB</p>
            <p>Telefone: 0800 4342-424</p>
            <p>Email: supermarket@unifacisa.com</p>
          </div>
          <div className="padrao-footer">
            <h3>Links Rápidos</h3>
            <a href="#home">Home</a>
            <a href="">Produtos</a>
            <a href="#categoria">Categorias</a>
            <a href="">Contatos</a>
          </div>
          <div className="padrao-footer politica-privacidade">
            <h3>Política</h3>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço</p>
            <p>Política de Reembolso</p>
            <p>Política de Envio</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ClientHome;
