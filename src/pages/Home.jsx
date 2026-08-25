import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";

function Home() {
    const [produk, setProduk] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [kataKunci, setKataKunci] = useState("");
    const [kategoriDipilih, setKategoriDipilih] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Pagination
    const [halaman, setHalaman] = useState(1);
    const produkPerHalaman = 6;

    // Mengambil produk dari API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Gagal mengambil data produk");
                }

                return res.json();
            })
            .then((data) => {
                setProduk(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Mengambil kategori dari API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Gagal mengambil kategori");
                }

                return res.json();
            })
            .then((data) => {
                setKategori(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // Filter produk berdasarkan pencarian dan kategori
    const produkTersaring = produk.filter((p) => {
        const cocokNama = p.title
            .toLowerCase()
            .includes(kataKunci.toLowerCase());

        const cocokKategori =
            kategoriDipilih === "" ||
            p.category === kategoriDipilih;

        return cocokNama && cocokKategori;
    });

    // Menghitung jumlah halaman
    const totalHalaman = Math.ceil(
        produkTersaring.length / produkPerHalaman
    );

    // Menentukan produk yang ditampilkan pada halaman sekarang
    const indexAwal =
        (halaman - 1) * produkPerHalaman;

    const indexAkhir =
        indexAwal + produkPerHalaman;

    const produkDitampilkan =
        produkTersaring.slice(indexAwal, indexAkhir);

    // Loading
    if (loading) {
        return (
            <p className="text-center p-6">
                Memuat produk...
            </p>
        );
    }

    // Error
    if (error) {
        return (
            <p className="text-center text-red-600 p-6">
                Terjadi kesalahan: {error}
            </p>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold text-center mb-8">
                Daftar Produk
            </h1>

            {/* Pencarian dan Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={kataKunci}
                    onChange={(e) => {
                        setKataKunci(e.target.value);
                        setHalaman(1);
                    }}
                    className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    value={kategoriDipilih}
                    onChange={(e) => {
                        setKategoriDipilih(e.target.value);
                        setHalaman(1);
                    }}
                    className="border rounded-lg px-4 py-2"
                >
                    <option value="">
                        Semua Kategori
                    </option>

                    {kategori.map((k) => (
                        <option key={k} value={k}>
                            {k}
                        </option>
                    ))}
                </select>

            </div>

            {/* Produk */}
            {produkTersaring.length === 0 ? (
                <p className="text-center text-gray-500">
                    Produk tidak ditemukan.
                </p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {produkDitampilkan.map((p) => (
                            <ProdukCard
                                key={p.id}
                                produk={p}
                            />
                        ))}

                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-4 mt-10">

                        <button
                            onClick={() =>
                                setHalaman(halaman - 1)
                            }
                            disabled={halaman === 1}
                            className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            ← Sebelumnya
                        </button>

                        <span className="font-semibold">
                            Halaman {halaman} dari {totalHalaman}
                        </span>

                        <button
                            onClick={() =>
                                setHalaman(halaman + 1)
                            }
                            disabled={halaman === totalHalaman}
                            className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                        >
                            Selanjutnya →
                        </button>

                    </div>
                </>
            )}

        </div>
    );
}

export default Home;