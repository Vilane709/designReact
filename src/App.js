import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Section1 from './components/section';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Header />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>

      <Footer />
    </div>
  );
}

export default App;
