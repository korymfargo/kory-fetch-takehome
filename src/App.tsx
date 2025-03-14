import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "@pages/Login";
import Search from "@pages/Search";
import RouteGuard from "@components/RouteGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/search"
          element={
            <RouteGuard redirectTo="/login">
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
