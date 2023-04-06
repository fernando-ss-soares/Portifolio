export default function error(): React.ReactElement {
  return (
    <div className="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-white">
      Desculpe, não foi possível recuperar os repositórios do GitHub.
      </h5>
      <p className="mb-5 text-base sm:text-lg text-gray-400">
      Para verificar o status atual do GitHub, por favor, acesse o seguinte link: <a href="https://www.githubstatus.com/" target="_blank">https://www.githubstatus.com/</a>. Espero que isso ajude!
      </p>
      
    </div>
  );
}
