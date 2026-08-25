import {
    render,
    screen,
    fireEvent
} from "@testing-library/react";

import {
    describe,
    it,
    expect,
    beforeEach
} from "vitest";

import {
    KeranjangProvider,
    useKeranjang
} from "../context/KeranjangContext";


function TestComponent() {

    const {
        items,
        tambahKeranjang,
        hapusDariKeranjang
    } = useKeranjang();

    const produk = {
        id: 1,
        nama: "Kaos Polos",
        harga: 75000
    };

    return (
        <div>

            <p>
                Jumlah: {items.length}
            </p>

            <button
                onClick={() => tambahKeranjang(produk)}
            >
                Tambah
            </button>

            <button
                onClick={() => hapusDariKeranjang(produk.id)}
            >
                Hapus
            </button>

        </div>
    );
}


describe("KeranjangContext", () => {

    beforeEach(() => {
        localStorage.clear();
    });


    it("dapat menambahkan produk ke keranjang", () => {

        render(
            <KeranjangProvider>
                <TestComponent />
            </KeranjangProvider>
        );

        expect(
            screen.getByText("Jumlah: 0")
        ).toBeInTheDocument();

        fireEvent.click(
            screen.getByRole("button", {
                name: "Tambah"
            })
        );

        expect(
            screen.getByText("Jumlah: 1")
        ).toBeInTheDocument();

    });


    it("dapat menghapus produk dari keranjang", () => {

        render(
            <KeranjangProvider>
                <TestComponent />
            </KeranjangProvider>
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: "Tambah"
            })
        );

        expect(
            screen.getByText("Jumlah: 1")
        ).toBeInTheDocument();

        fireEvent.click(
            screen.getByRole("button", {
                name: "Hapus"
            })
        );

        expect(
            screen.getByText("Jumlah: 0")
        ).toBeInTheDocument();

    });

});