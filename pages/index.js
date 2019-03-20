import Layout from "../components/Layout";

const Index = () => (
  <div>
    <Layout />
    <style jsx global>
      {`
        body {
          @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");
          font-family: "Open Sans", sans-serif;
          line-height: 1.625rem;
          font-weight: 400;
          letter-spacing: 0.3px;
          color: #b2b2b2;
          margin: 0;
        }
      `}
    </style>
  </div>
);

export default Index;
