import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/home"
import DetailPage from "@/pages/detail"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "detail",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="bg-[#FFFBDA] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
