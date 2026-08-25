import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduk() {
    const { id } = useParams();

    const [produk, setProduk] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Produk tidak ditemukan");
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
    }, [id]);

    if (loading) {
        return (
            <p className="text-center p-6">
                Memuat detail produk...
            </p>
        );
    }

    if (error) {
        return (
            <p className="text-center text-red-600 p-6">
                {error}
            </p>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <img
                src={produk.image}
                alt={produk.title}
                loading="lazy"
                decoding="async"
                className="w-full max-w-md h-80 object-contain rounded-lg mx-auto"
            />

            <h2 className="text-3xl font-bold mt-6">
                {produk.title}
            </h2>

            <p className="text-xl text-gray-600 mt-2">
                Rp {produk.price.toLocaleString("id-ID")}
            </p>

            <p className="mt-4">
                {produk.description}
            </p>

            <p className="mt-4">
                Kategori: {produk.category}
            </p>

        </div>
    );
}

export default DetailProduk;