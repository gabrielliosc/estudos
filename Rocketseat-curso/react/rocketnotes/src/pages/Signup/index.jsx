import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { useState } from "react";

import { api } from "../../services/api"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Background, Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {

    const [username, setUsername] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    function handleSignUp() {
        console.log(username, email, password)

        if(!username || !email || !password){
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name: username, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if (error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criar usuário")
            }
        })
    }
    return(
        <Container>

            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar os seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="username"
                icon={FiUser}
                onChange={e => setUsername(e.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />


                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title={ "Cadastrar" } onClick={handleSignUp} />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
            
        </Container>
    )
}