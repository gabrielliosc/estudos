import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam sapiente repellat vero nostrum sit eaque voluptas neque. Corrupti molestias, alias enim laudantium sunt similique asperiores nulla est tempora reiciendis!</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>

    </Container>
    
  )
}


