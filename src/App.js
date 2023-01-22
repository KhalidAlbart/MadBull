import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <MainPage />
          <Footer />
        </div>
      </Provider>
  );
}