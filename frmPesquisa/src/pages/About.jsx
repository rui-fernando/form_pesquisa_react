import { useNavigate } from "react-router-dom";

function About () {

    const navigate = useNavigate();
    
    return (
        <div className="page-container">
            <h1 style={{
                fontFamily: "fangsong",
                fontStyle: "italic"
            }}>Sobre o Formulário de Pesquisa...</h1>

            <p style={{
                backgroundColor: "#6f9cf7", 
                borderRadius: "5px"
            }}>
                Este formulário foi feito a fim de 
                coletar opiniões dos profissionais acerca dos nossos cursos 
                
            </p>

            <section>
                <h3>O que estamos analisando?</h3>
                <p>
                    Nosso objetivo é cruzar dados de atuação profissional com as tecnologias mais 
                    utilizadas no mercado atual (como <strong>React, Node.js e Docker</strong>).
                </p>
            </section>

            <section>
                <h3>Para que servem os seus dados?</h3>
                <ul>
                    <li><strong>Personalização:</strong> Ajustar o nível técnico dos cursos conforme a idade e experiência.</li>
                    <li><strong>Curadoria de Stack:</strong> Identificar quais tecnologias são tendência entre os profissionais.</li>
                    <li><strong>Melhoria Contínua:</strong> Ouvir suas críticas e sugestões nos comentários adicionais.</li>
                </ul>
            </section>

            <p style={{ 
                fontStyle: 'italic', 
                marginTop: '20px'
                }}>
                Sua participação ajuda a moldar o futuro da nossa grade acadêmica!
            </p>


            <button id="home" type="button" onClick={() => navigate("/")}>
                Home
            </button>

        </div>
    );
}

export default About