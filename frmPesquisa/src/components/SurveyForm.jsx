import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

const schema = Yup.object({
    name: Yup.string().required("Nome obrigatório"),
    
    email: Yup.string()
    .email("Formato inválido")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido")
    .required("Email obrigatório"),

    number: Yup.number()
    .typeError("Digite um número válido")
    .min(1, "Idade inválida")
    .max(120, "Idade inválida")
    .required("Idade obrigatória"),

    area: Yup.string()
    .required("Selecione uma área"),

    recommend: Yup.string()
    .required("Selecione uma opção"),

    tech: Yup.array().min(1, "Selecione pelo menos uma tecnologia que você usa"),

})

function SurveyForm() {

    const navigate = useNavigate();

    return (
        <Formik

            initialValues = {{
                name:"",
                email:"",
                number:"",
                area:"",
                recommend:"",
                tech:[],
                comments:"",
            }}

            validationSchema={schema}

            onSubmit={(values)=> {
                console.log(values)
                alert("Formulário enviado!")
            }}
        >

            <Form>
                <h1>Pesquisa de satisfação</h1>
                <p style={{
                    fontStyle: "oblique",
                    fontSize: "20px",
                    color: "#073c65",
                    borderRadius: "8px"
                }}>Queremos saber sua opinião!</p>

                <label>Nome:</label>
                <Field name="name" type="text" placeholder="Digite seu nome"/>
                <ErrorMessage name="name" component="div" className="error"/>

                <label>Email:</label>
                <Field name="email" type="email" placeholder="Digite seu email"/>
                <ErrorMessage name="email" component="div" className="error"/>

                <label>Idade:</label>
                <Field name="number" type="number" placeholder="Insira sua idade" min="1" max="120"/>
                <ErrorMessage name="number" component="div" className="error"/>

                <label>Qual a sua área?</label>
                <Field as="select" name="area">
                    <option value="">Selecione sua área</option>
                    <option value="analista_ti">Analista de TI</option>
                    <option value="dev">Desenvolvedor</option>
                    <option value="eng_soft">Engenheiro de Software</option>
                    <option value="dba">Administrador de banco de dados</option>
                </Field>
                <ErrorMessage name="area" component="div" className="error"/>

                <p>Você recomendaria este curso?</p>
                <div className="simnao">
                    
                    <label>
                        <Field type="radio" name="recommend" value="sim"/>
                        Sim
                    </label>

                    <label>
                        <Field type="radio" name="recommend" value="nao"/>
                        Não
                    </label>
                    
                </div>
                <ErrorMessage name="recommend" component="div" className="error" />

                <p>Quais tecnologias você utiliza?</p>

                <div className="tech-grid">
                    <label>
                        <Field type="checkbox" name="tech" value="html" />
                        HTML
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="css" />
                        CSS
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="javascript" />
                        JavaScript
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="react" />
                        React
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="angular" />
                        Angular
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="nodejs" />
                        Node.js
                    </label>
                    
                    <label>
                        <Field type="checkbox" name="tech" value="typescript" />
                        TypeScript
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="postgresql" />
                        PostgreSQL
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="sqlserver" />
                        Microsoft SQL Server
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="mongodb" />
                        MongoDB
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="neo4j" />
                        Neo4j
                    </label>

                    <label>
                        <Field type="checkbox" name="tech" value="brightstardb" />
                        BrightstarDB
                    </label>
                </div>
                
                <br />

                <label id="addcomments">Comentários adicionais:</label>
                <Field 
                    as="textarea"
                    name="comments"
                    placeholder="Deixe seu comentário aqui..."
                />
                <div className="button-group">

                    <button id="home" type="button" onClick={() => navigate("/")}>
                        Home
                    </button>

                    <button id="enviar" type="submit">
                        Enviar
                    </button>

                    <button id="sobre" type="button" onClick={() => navigate("/sobre")}>
                        Sobre
                    </button>
                </div>


            </Form>

        </Formik>
    )
}
export default SurveyForm