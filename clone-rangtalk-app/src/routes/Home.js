import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";

function Home() {
  return (
    <div>
      <Header
        mainLogoImg="img/img_fulllogo_big/img_fulllogo_big@2x.png"
        buttonColor="71a5d9"
      />
      <Section />
      <Footer />
    </div>
  );
}

export default Home;
