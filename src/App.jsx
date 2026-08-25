import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import DetailProduk from "./pages/DetailProduk";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const Keranjang = lazy(() => import("./pages/Keranjang"));
const RiwayatPesanan = lazy(() => import("./pages/RiwayatPesanan"));

function App() {
    return (
        <BrowserRouter>

            <Suspense fallback={
                <p className="text-center mt-10">
                    Memuat halaman...
                </p>
            }>

                <Routes>

                    <Route element={<Layout />}>

                        {/* Halaman umum */}
                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/produk/:id"
                            element={<DetailProduk />}
                        />

                        <Route
                            path="/login"
                            element={<Login />}
                        />

                        <Route
                            path="/register"
                            element={<Register />}
                        />

                        {/* Halaman yang membutuhkan login */}
                        <Route
                            path="/keranjang"
                            element={
                                <ProtectedRoute>
                                    <Keranjang />
                                </ProtectedRoute>
                            }
                        />

                        <Route
                            path="/riwayat"
                            element={
                                <ProtectedRoute>
                                    <RiwayatPesanan />
                                </ProtectedRoute>
                            }
                        />

                        {/* 404 */}
                        <Route
                            path="*"
                            element={<NotFound />}
                        />

                    </Route>

                </Routes>

            </Suspense>

        </BrowserRouter>
    );
}

export default App;