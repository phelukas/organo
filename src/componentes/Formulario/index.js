import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = () => {

    const times = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops"
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o car de colaboradores</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite seu Imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao 
                    Criar Card>
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
