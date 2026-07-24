from pydantic import BaseModel, Field


class DesignRequest(BaseModel):
    query: str = Field(..., min_length=3, max_length=200)