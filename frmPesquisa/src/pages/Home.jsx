import { Link } from "react-router-dom"

function Home(){
    return (
        <div className="page-container">
            <h1>Página inicial</h1>
            <p style={{
                fontSize: "22px",
                color: "#00aeff"
            }}>Seja bem-vindo(a) ao nosso formulário de pesquisa!</p>

            <br />
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/formulario">Formulário</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </div>
    )
}

export default Home