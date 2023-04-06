import { Key } from "react";
import Card from "./index";

interface postProps {
  repositories: any;
}

export default function post({ repositories }: postProps): React.ReactElement {
  const data = repositories;

  return (
    <>
      <p className="py-8 text-base uppercase">Front-end</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-2">
        {data
          ?.filter((repository: { topics: string | Array<string> }) =>
            repository?.topics.includes("front-end")
          )
          ?.map(
            (repository: {
              id: Key | null | undefined;
              name: string;
              description: string;
              html_url: string;
            }) => (
              <Card
                key={repository.id}
                textTitle={repository.name.replaceAll("-"," ")}
                textParagraph={repository.description}
                urlRepository={repository.html_url}
              />
            )
          )}
      </div>
      <p className="py-8 text-base uppercase">Back-end</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-2">
        {data
          ?.filter((repository: { topics: string | Array<string> }) =>
            repository?.topics.includes("back-end")
          )
          ?.map(
            (repository: {
              id: Key | null | undefined;
              name: string;
              description: string;
              html_url: string;
            }) => (
              <Card
                key={repository.id}
                textTitle={repository.name.replaceAll("-"," ")}
                textParagraph={repository.description}
                urlRepository={repository.html_url}
              />
            )
          )}
      </div>
    </>
  );
}
