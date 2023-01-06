import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Store } from "./components/Store";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
