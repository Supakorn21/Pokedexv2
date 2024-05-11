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
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
