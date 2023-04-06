import Container from "../components/container";

export default function footer() {
  
    const date = new Date();
  
    return (
    <Container style="py-8 px-6 font-inter font-light text-white">
      <footer className="rounded-lg shadow bg-[#1A1A1A]">
        <div className="w-full max-w-screen-xl mx-auto">
          <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
            © {date.getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Fernando Soares
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Container>
  );
}
