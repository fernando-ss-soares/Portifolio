import Container from "../components/container";
import Title from "../components/title";
import Post from "../components/card/post";
import ErrorPost from "../components/error";
import repositoriesAPI from "../services/github/repositories";
import { useLayoutEffect, useState } from "react";

export default function project() : React.ReactElement{
  const [repositories, setRespositories] = useState<Array<object> | object | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    repositoriesAPI()
      .then((data) => setRespositories(data))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Container id="projetos" style="py-8 px-6 font-inter font-light text-white">
        <Title titulo="Projetos"/>
        {error === true ? <ErrorPost /> : <Post repositories={repositories} />} 
      </Container>
    </>
  );
}
