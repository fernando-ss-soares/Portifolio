import Container from "../components/container";

export default function welcome() : React.ReactElement {
  return (
    <>
      <Container id="sobre" style="h-4/6 w-full flex flex-col gap-8 py-8 px-6 font-inter font-light text-white">
        <h3 className="text-base">Ei, eu sou</h3>
        <p className="text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
          Fernando Soares
        </p>
        <p className="text-lg">
          Sou um desenvolvedor front-end apaixonado por transformar designs em
          interfaces de usuário incríveis e responsivas. Minha experiência em
          HTML, CSS e JavaScript me permite desenvolver soluções criativas e
          personalizadas que atendem às necessidades dos usuários. Estou sempre
          em busca de aprimorar minhas habilidades e aprendendo novas
          tecnologias para fornecer uma experiência excepcional aos usuários
          finais. Além disso, possuo uma compreensão profunda de SEO e
          acessibilidade web, o que me permite desenvolver sites que são
          otimizados para mecanismos de busca e fornecem uma experiência
          acessível a todos os usuários.
        </p>
      </Container>
    </>
  );
}
