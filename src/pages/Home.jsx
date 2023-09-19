import React from 'react'
import { Dropdown } from 'antd';
import { Header } from '../styles/Header'
import { DropDown } from '../styles/Dropdown'
import { Menubar } from '../styles/Menu-bar';
import { Container_fundo } from '../styles/Container';
import { Sobre_mim } from '../styles/Sobre-mim';
import { Contato } from '../styles/Contato';
import { Footer } from '../styles/Footer';
import Container from '../components/container';

import formulario from '../assents/Formulario.png';
import console from '../assents/Console.png'

import { AiFillGithub } from "react-icons/ai";
import { GiLetterBomb } from "react-icons/gi";

function Home() {
    return (
        <div>
            <Header>
                <h1>Welinghton</h1>

                <Menubar>
                    <a className='a' href="#SOBRE-MIM"><h3>Sobre Mim</h3></a>
                    <a className='a' href="#PROJETOS"><h3>Projetinhos</h3></a>
                    <a className='a' href="#CONTATO"><h3>Contatos</h3></a>
                </Menubar>

                <div className='Dropdown-Mobile'>
                    <Dropdown
                        overlay={(
                            <DropDown>
                                <DropDown key="0">
                                    <a href="#SOBRE-MIM"> Sobre Mim</a>
                                </DropDown>
                                <DropDown key="1">
                                    <a href="#PROJETOS">Projetinhos</a>
                                </DropDown>
                                <DropDown key="1">
                                    <a href="#CONTATO">Contatos</a>
                                </DropDown>
                            </DropDown>
                        )}
                        trigger={['click']}>
                        <div
                            onClick={e => e.preventDefault()}>
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                    </Dropdown>
                </div>
            </Header>
            <div className="border">
                <main>
                    <div className="Lado-azul">
                        <p>Port</p>
                    </div>

                    <div className="Lado-white">
                        <p>fólio</p>
                    </div>
                </main>
                <Sobre_mim>
                    <h1 id="SOBRE-MIM">Sobre Mim</h1>
                    <Container />
                </Sobre_mim>
                <h1 id="PROJETOS">Projetinhos</h1>

                <Container_fundo>
                    <div className="img-pai">
                        <h1>Formulário</h1>
                        <div className="descricao">
                            <div className="img-p">
                                <img src={formulario} alt="" />
                            </div>
                            <p>É um formulário aonde vc envia uma mensagem, colocando apenas seu E-mail e seu Nome</p>
                        </div>

                        <h1>Console</h1>
                        <div className="descricao">
                            <div className="img-p">
                                <img src={console} alt="" />
                            </div>
                            <p>É um console aonde realiza algumas tarefas bem simples, apenas com um click</p>
                        </div>
                    </div>
                </Container_fundo>

                <Contato>
                    <h1 id='CONTATO'>Contate-me</h1>

                    <div className='icons'>
                        <a href="https://github.com/Welinghtonn?tab=repositories"><AiFillGithub size={45} /></a>
                        <a href="https://welinghtonn.github.io/dzzzfh/"><GiLetterBomb size={45} /></a>
                    </div>
                </Contato>
                <Footer>
                    <h1>Apresentado por Welinghton</h1>
                    <h1>Garoto de programa</h1>
                </Footer>
            </div>
        </div>
    );

}

export default Home;