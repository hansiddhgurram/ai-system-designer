from services.llm import generate_response
from services.prompt import build_prompt
from utils.parser import parse_json
from utils.logger import logger


def generate_system_design(query: str):

    logger.info(f"Generating system design for: {query}")

    try:

        prompt = build_prompt(query)

        response = generate_response(prompt)

        logger.info("Received response from Groq.")

        design = parse_json(response)

        logger.info("Successfully parsed response.")

        return design

    except Exception as e:

        logger.error(str(e))

        raise Exception(f"Generation Failed\n\n{str(e)}")