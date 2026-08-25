function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
            {children}
        </button>
    );
}

export default Button;