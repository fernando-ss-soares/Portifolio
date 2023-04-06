import Container from "../components/container";

export default function menu(): React.ReactElement {
  return (
    <>
      <Container style="h-1/6 flex flex-col justify-center py-8 px-6 font-inter font-light text-white">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">Logo</h1>
          <ul className="flex flex-row gap-4">
            <li className="text-lg">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="text-lg">
              <a href="#experiencia">Experiência</a>
            </li>
            <li className="text-lg">
              <a href="#projetos">Projetos</a>
            </li>
            <li className="text-lg">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
