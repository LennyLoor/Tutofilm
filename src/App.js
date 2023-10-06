
import GlobalStyle from "./GlobalStyle"; 
import Header from "./Componentes/Header";
import Banner from "./Componentes/Banner";
import Footer from "./Componentes/Footer";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
