import json

from utils.mermaid import generate_mermaid


def parse_json(response: str):

    response = response.strip()

    response = response.replace("```json", "")
    response = response.replace("```", "")

    data = json.loads(response)

    if "architecture_graph" in data:

        data["mermaid_diagram"] = generate_mermaid(
            data["architecture_graph"]
        )

    return data