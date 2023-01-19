import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}