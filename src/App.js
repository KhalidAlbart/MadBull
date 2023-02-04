import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GreetingBlock from "./Components/MainPage/GreetingBlock/GreetingBlock";
import Advantages from "./Components/MainPage/Advantages/Advantages";
import Products from "./Components/MainPage/Products/Products";
import Contacts from "./Components/MainPage/Contacts/Contacts";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import store from "./store";
import NotFound from "./Components/MainPage/NotFound/NotFound";

export default function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route index element={
              <>
                <GreetingBlock />
                <Advantages />
              </>
            } />
            <Route path="/products" element={<Navigate to="/products/page/1" replace={true} />} />
            <Route path="/products/page/:id" element={<Products />} />
            <Route path="/shoppingCard" element={<Products />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
  );
}