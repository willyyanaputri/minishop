function Badge({ text }) {
    return (
        <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mb-2">
            {text}
        </span>
    );
}

export default Badge;