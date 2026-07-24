import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "default",
});

function MermaidDiagram({ chart }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const renderDiagram = async () => {
            if (!containerRef.current) return;

            if (!chart) {
                containerRef.current.innerHTML =
                    "<p>No diagram generated.</p>";
                return;
            }

            try {
                // Clean common LLM mistakes
                let cleanChart = chart
                    .replace(/```mermaid/g, "")
                    .replace(/```/g, "")
                    .replace(/→/g, "-->")
                    .trim();

                // Ensure it starts correctly
                if (!cleanChart.startsWith("graph")) {
                    cleanChart = "graph TD\n" + cleanChart;
                }

                console.log("Mermaid Diagram:");
                console.log(cleanChart);

                const id = "diagram-" + Date.now();

                const { svg } = await mermaid.render(id, cleanChart);

                containerRef.current.innerHTML = svg;
            } catch (err) {
                console.error("Mermaid Error:", err);

                containerRef.current.innerHTML = `
                    <div style="padding:20px;color:red;">
                        <h3>Failed to render diagram</h3>
                        <pre>${chart}</pre>
                    </div>
                `;
            }
        };

        renderDiagram();
    }, [chart]);

    return (
        <div
            className="mermaid-container"
            ref={containerRef}
        />
    );
}

export default MermaidDiagram;