import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TestAPI from "./Case03";
import Case03CartPage from "./Case03CartPage"

const myRouter = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/home",
				element: <TestAPI/>,
			},
			{
				path: "/cart",
				element: <Case03CartPage />,
			},
		],
	},
]);

function RunRouter() {
	return (
			  <RouterProvider router={myRouter} />
	);
  }
  
  export default RunRouter;