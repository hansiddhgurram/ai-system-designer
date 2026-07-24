from pydantic import BaseModel
from typing import List


class Service(BaseModel):
    name: str
    responsibility: str


class API(BaseModel):
    method: str
    endpoint: str
    description: str


class GraphNode(BaseModel):
    id: str
    label: str


class ArchitectureGraph(BaseModel):
    nodes: List[GraphNode]
    edges: List[List[str]]


class DesignResponse(BaseModel):
    overview: str

    functional_requirements: List[str]

    non_functional_requirements: List[str]

    architecture: str

    services: List[Service]

    database: str

    apis: List[API]

    cache: str

    message_queue: str

    tradeoffs: List[str]

    bottlenecks: List[str]

    architecture_graph: ArchitectureGraph

    mermaid_diagram: str