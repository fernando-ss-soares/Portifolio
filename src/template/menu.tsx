import Container from "../components/container";

export default function menu(): React.ReactElement {
  return (
    <>
      <Container style="h-1/6 flex flex-col justify-center py-8 px-6 font-inter font-light text-white">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
            <i className="fa-solid fa-terminal mx-3" style={{color: "#ffffff"}}></i>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Dev Front-end
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
                <li>
                  <a
                    href="#sobre"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white"
                    aria-current="page"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white"
                  >
                    Experiência
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
}
