import HomePage from "./routes/homePage/HomePage";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                }, {
                    path: "/list",
                    element: <ListPage />
                }, {
                    path: "/:id",
                    element: <SinglePage />
                }]
        }
    ]);
    return <>
        <RouterProvider router={router} />

    </>;
};

export default App;