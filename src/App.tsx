import Box from "./template/box";
import Menu from "./template/menu";
import Welcome from "./template/welcome";
import Experience from "./template/experience";
import Project from "./template/project";
import Form from "./template/form";
import Footer from "./template/footer";

function App() {
  return (
    <Box>
      <Menu />
      <Welcome />
      <Experience />
      <Project />
      <Form />
      <Footer />
    </Box>
  );
}

export default App;
