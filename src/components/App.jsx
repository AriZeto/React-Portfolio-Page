import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes";
import Home from "../pages/Home";
import Contact from "/src/pages/Contact.jsx";
import { Global, css } from "@emotion/react";

const GlobalStyling = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(#64e678, #676ca7);
    @media (min-width: 360px) {
      margin: 0;
    }
  }
`;

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact-resume", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <Global styles={GlobalStyling} />
      <RouterProvider router={router} />
    </>
  );
}
