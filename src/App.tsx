import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryLayout from "./layouts/primary";
import CalendarPage from "./pages/calendar";
import DatePickerPage from "./pages/date-picker";
import HomePage from "./pages/home";
import PasswordPage from "./pages/password";
import ThankYouPage from "./pages/thank-you";

function App() {

  const router = createBrowserRouter([
    {
      element: <PrimaryLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/password",
          element: <PasswordPage />
        },
        {
          path: "/calendar",
          element: <CalendarPage />
        },
        {
          path: "/date-picker",
          element: <DatePickerPage />
        },
        {
          path: "/thank-you",
          element: <ThankYouPage />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
