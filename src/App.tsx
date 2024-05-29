import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routerIndex } from "./routes";
import { ErrorPage } from "./templates/error";
import { Loading } from "./templates/loading";

function App() {
  const router: RouteObject[] = [
    {
      children: routerIndex,
      errorElement: <ErrorPage />,
    },
  ];

  const browser = createBrowserRouter(router);

  return (
    <>
      <RouterProvider router={browser} fallbackElement={<Loading />} />
    </>
  );
}

export default App;
