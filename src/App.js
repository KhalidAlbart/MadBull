import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import GreetingBlock from "./Components/GreetingBlock/GreetingBlock"
import Advantages from "./Components/Advantages/Advantages"
import Products from "./Components/Products/Products"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import Contacts from "./Components/Contacts/Contacts"
import { Provider } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import store from "./store"
import NotFound from "./Components/NotFound/NotFound"

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
            <Route path="/shoppingCard" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
  )
}