import React from "react";
import { Route, Routes } from "react-router-dom";
import { spinner } from "../../Components/svg";
import { Suspense } from "react";
import { LazyExoticComponent } from "react";
const Home = React.lazy(() => import("../../Pages/Home/Home"));
const Login = React.lazy(() => import("../../Pages/LoginPage"));
const Favorites = React.lazy(() => import("../../Pages/Favorites/Favorites"));
const Movies = React.lazy(() => import("../../Pages/MoviesPage/Movies"));
const CardDetails = React.lazy(() =>
  import("../../Components/CardDetails/CardDetails")
);


export default function RoutesApp () {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "200px", height: "100vh", color: "white" }}>
          {spinner}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<CardDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error 404 Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}
