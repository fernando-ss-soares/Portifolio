import { Key } from "react";

interface timelineProps {
  listaEmpresas: any;
}

export default function timeline({
  listaEmpresas,
}: timelineProps): React.ReactElement {
  const data = listaEmpresas;

  return (
    <>
      {data.map(
        (data: {
          id: Key | null | undefined;
          nome: string;
          descricao: string;
          dataEntrada: string;
          trabalhoAtual: boolean;
        }) => (
          <ol className="relative border-l border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-gray-700">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3 h-3 text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                {data.nome}{" "}
                {data?.trabalhoAtual == true ? (
                  <span className=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-gradient-to-r from-pink-500 to-orange-400 text-white ml-3">
                    Trabalho Atual
                  </span>
                ) : (
                  false
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                {data.dataEntrada}
              </time>
              <p className="mb-4 text-base font-normal text-gray-400">
                {data.descricao}
              </p>
            </li>
          </ol>
        )
      )}
    </>
  );
}
