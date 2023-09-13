// import logo from './logo.svg';
import './App.css';
import EditorWorld from './components/Editor World Area/EditorWorld';
import Footer from './components/Footer Area/Footer';
import Header from './components/Header Area/Header';
import Hero from './components/Hero Area/Hero';
import MainNews from './components/Main News Area/MainNews';
import PopularInfoMain from './components/Popular Info Area/PopularInfoMain';
import VideosMain from './components/Videos Area/VideosMain';

// import tailwind from './tailwind.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainNews />
      <PopularInfoMain />
      <VideosMain/>
      <EditorWorld />
      <Footer />
    </>
  );
}

export default App;
