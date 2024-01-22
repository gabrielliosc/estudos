import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Form, Container } from "./styles";

import { Link } from "react-router-dom";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="react" />
                        <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}