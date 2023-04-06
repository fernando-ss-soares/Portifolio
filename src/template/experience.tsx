import Container from "../components/container";
import Timeline from "../components/timeline";
import Title from "../components/title";

export default function experience() : React.ReactElement {
  
  const data = [
    {
      id: 1,
      nome: "Zenvia",
      descricao: "Responsabilidades incluem gerenciamento de chamados com SLA, propondo soluções ao time de desenvolvimento, testando soluções já implementadas, documentando APIs.",
      dataEntrada: "Entrada em Março, de 2022",
      trabalhoAtual: true
    },
    {
      id: 2,
      nome: "InterativaChat",
      descricao: "Responsabilidades incluem criação de novas ferramentas, propor novas soluções ao time de produto, manutenção em código pré-existente.",
      dataEntrada: "Entrada em Fevereiro, de 2022",
    },
    {
      id:3,
      nome: "Rumo Tecnologia",
      descricao: "Responsabilidades incluem gerenciamento de chamados com SLA, propondo soluções ao time de desenvolvimento, testando soluções já implementadas, documentando APIs e realizando validações, além de criar formulários utilizando HTML e CSS.",
      dataEntrada: "Entrada em Fevereiro, de 2019",
    }
  ]
  
  return (
    <>
      <Container id="experiencia" style="py-8 px-6 font-inter font-light text-white">
        <Title titulo="experiência"/>
        <Timeline listaEmpresas={data}/>
      </Container>
    </>
  );
}
