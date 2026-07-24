import { useState } from "react";

function PromptBox({ onGenerate, loading }) {
    const [query, setQuery] = useState("");

    const handleSubmit = () => {
        if (!query.trim()) return;
        onGenerate(query);
    };

    return (
        <div className="prompt-container">
            <input
                type="text"
                placeholder="Design WhatsApp, Netflix, Uber..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !loading) {
                        handleSubmit();
                    }
                }}
            />

            <button
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Generating..." : "Generate"}
            </button>
        </div>
    );
}

export default PromptBox;