import { useState } from "react";
import api from "./services/api";

import PromptBox from "./components/PromptBox";
import DesignOutput from "./components/DesignOutput";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
    const [design, setDesign] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function generateDesign(query) {
        setLoading(true);
        setError("");
        setDesign(null);

        try {
            const response = await api.post("/design", {
                query,
            });

            setDesign(response.data);
        } catch (err) {
            console.error(err);
            setError("Failed to generate system design. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <h1>AI System Designer</h1>

            <p className="subtitle">
                Generate scalable software architectures using AI.
            </p>

            <PromptBox
                onGenerate={generateDesign}
                loading={loading}
            />

            {loading && <LoadingSpinner />}

            {error && (
                <div className="error">
                    {error}
                </div>
            )}

            {!loading && design && (
                <DesignOutput design={design} />
            )}
        </div>
    );
}

export default App;