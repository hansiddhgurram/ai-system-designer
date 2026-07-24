def generate_mermaid(graph: dict) -> str:
    """
    Convert graph JSON into Mermaid syntax.
    """

    lines = []

    # First line
    lines.append("graph TD")

    # Blank line
    lines.append("")

    # Nodes
    for node in graph["nodes"]:
        node_id = node["id"].replace(" ", "")
        label = node["label"]

        lines.append(
            f'{node_id}["{label}"]'
        )

    # Blank line
    lines.append("")

    # Edges
    for source, destination in graph["edges"]:
        source = source.replace(" ", "")
        destination = destination.replace(" ", "")

        lines.append(
            f"{source} --> {destination}"
        )

    return "\n".join(lines)