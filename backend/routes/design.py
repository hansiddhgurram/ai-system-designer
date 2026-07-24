from fastapi import APIRouter, HTTPException

from models.request import DesignRequest
from models.response import DesignResponse
from services.generator import generate_system_design

router = APIRouter()


@router.post("/design", response_model=DesignResponse)
def generate_design(request: DesignRequest):

    try:

        return generate_system_design(request.query)

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )