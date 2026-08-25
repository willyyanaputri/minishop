import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import ProdukCard from "../components/ProdukCard";
import { KeranjangProvider } from "../context/KeranjangContext";


const produk = {
    id: 1,
    title: "Kaos Polos",
    price: 75000,
    image: "/img/kaos.jpg",
    category: "men's clothing"
};


function renderProdukCard() {
    return render(
        <MemoryRouter>
            <KeranjangProvider>
                <ProdukCard produk={produk} />
            </KeranjangProvider>
        </MemoryRouter>
    );
}


describe("ProdukCard", () => {

    it("menampilkan nama produk dengan benar", () => {
        renderProdukCard();

        expect(
            screen.getByText("Kaos Polos")
        ).toBeInTheDocument();
    });


    it("menampilkan harga produk dengan benar", () => {
        renderProdukCard();

        expect(
            screen.getByText("Rp 75.000")
        ).toBeInTheDocument();
    });

});