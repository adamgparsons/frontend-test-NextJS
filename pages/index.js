import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const Index = () => (
  <ThemeProvider theme={theme} style="margin:0">
    <div>
      <Layout />
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}</style>
    </div>
  </ThemeProvider>
);
export default Index;
