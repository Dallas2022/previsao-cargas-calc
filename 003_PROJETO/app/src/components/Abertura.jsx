import React from 'react'
import '../estilos/Abertuta.css'
import imgEngenheiro from '../imagens/engenheiro.gif'
import { Routes, Route, Link } from 'react-router-dom'

function Abertura() {
    return (
        <div className="container-fluid">
            <div>
                {/* Título do App  */}
                <div className='row'>
                    <div id="titulo" className='col-12'>
                        <h1>Calculadora de Previsão de Cargas</h1>
                    </div>
                </div>

                {/* Conteúdo da Página */}
                <div id="divConteudo" className='row'>
                    <div id="divImagem" className='col-md-5 col-sm-12'>
                        <img src={imgEngenheiro} alt="engenheiro.gif" />
                    </div>
                    <div id="divCartao" className='col-md-7 col-sm-12 align-self-center'>
                        <div id="divTexto">
                            <p className='text-center'>Olá Engenheiro, seja muito bem-vindo !</p>
                            <p>Se você deseja realizar um cálculo de previsão de cargas de forma fácil e rápida, você está no lugar certo. Clique no botão abaixo para iniciar</p>
                        </div>

                        {/* Botão */}
                        <Link to="/locais"  className="btn btn-success w-100"><h4>INICIAR</h4></Link>
                    </div>                    
                </div>

            </div>
        </div >
    )
}

export default Abertura