import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/35929943?s=460&u=8da67afcef36f5e30ce91387a53e4578cef88348&v=4" alt="Andrelino Silva"/>
            <div>
              <strong>Andrelino Silva</strong>
              <span>Química</span>
            </div>
          </header>

          <p>Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por tecnologias bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
          </p>

          <footer>
            <p>Preço por hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;