import './App.css';
import BackgroundImg from "./components/background-img";
import Footer from "./components/footer";
import Title from "./components/title";
import OddsForm from './components/oddsForm';

function App() {
  return (
    <main className="w-screen h-screen typography">
        <Title/>
        <BackgroundImg/>
        <OddsForm/>
        <Footer/>
    </main>
  );
}

export default App;
