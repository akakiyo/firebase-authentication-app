import { Route, Navigate, Routes } from "react-router-dom";
import useFirebaseAuth from "./auth/useFirebaseAuth";
import Top from "./Top.js";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

function App() {
  const { isAuthenticated, isLoading } = useFirebaseAuth();
  if (isLoading) return <p>loading...</p>;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Top /> : <Navigate to="/login" />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
export default App;
