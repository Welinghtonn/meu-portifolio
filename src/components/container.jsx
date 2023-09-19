import React from 'react'
import { Container_fundo } from '../styles/Container';

function Container() {
    return (
        <>
            <Container_fundo>
                <div className="pai">
                    <h1>Conheça-me</h1>
                    <p>Meu nome é welinghton, tenho 16 anos. Aprendo programação em front-end há uns tempos e estou gostando bastante. Quero poder aprender mais</p>

                    <h1 className='aprendendo'>Aprendendo</h1>
                    <div className="filho">
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>JAVASCRIPT</h3>
                        <h3>REACT</h3>
                        <h3>STYLED-COMPONENTS</h3>
                    </div>
                </div>
            </Container_fundo>

        </>
    )
}

export default Container;