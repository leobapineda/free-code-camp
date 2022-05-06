import "./App.css";

import reactLogo from "./img/logo192.png";

function Head() {
  return (
    <header>
      <img src={reactLogo} width="50px" alt="react logo"/>
    </header>
  );
}

function Main() {
  return (
    <>
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>It is a popular library</li>
        <li>I'll be able to fit in with he cool kids</li>
        <li>I am more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>2022 Leo Development. All right reserved</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Head />
      <Main />
      <Footer />
    </>
  );
}

export default Page;
