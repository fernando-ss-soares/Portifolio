interface PropsCard {
  textTitle: string;
  textParagraph: string;
  urlRepository: string;
}

export default function Card({
  textParagraph,
  textTitle,
  urlRepository,
}: PropsCard): React.ReactElement {
  return (
    <>
      <div className="max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700">
        <a href={urlRepository} target={"_blank"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {textTitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          {textParagraph}
        </p>
        <a
          href={urlRepository} target={"_blank"}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
