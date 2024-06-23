import { Provider } from "react-redux";
import { store } from "../../Store/store";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default RouterLayout;
