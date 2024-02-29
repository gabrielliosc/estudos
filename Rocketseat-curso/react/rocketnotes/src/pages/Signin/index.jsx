import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Background, Container, Form } from "./styles";
import { useState } from 'react'

export function SignIn() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const { signIn } = useAuth() //PEGAR A FUNÇÃO DE SIGN IN NO HOOK

    function handleSignIn(e) {
        e.preventDefault()

        if(!email || !password){
            return alert("Preencha todos os campos!")
        }

        signIn({ email, password })
    }
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar os seus links úteis</p>

                <h2>Faça seu login</h2>

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

                <Button type="submit" title={ "Entrar" } onClick={handleSignIn} />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}