from sanic import Blueprint, Sanic
from sanic.request import Request
from sanic.response import json, text

status = Blueprint("status", url_prefix="/laundry/status")


@status.get("/")
async def fetch_status(request: Request):
    laundry_id = request.args.get("laundry_id")

    query = f"""
    SELECT status FROM laundry
    WHERE laundry_id = '{laundry_id}';
    """

    results = []
    request.app.ctx.cursor.execute(query)
    res = request.app.ctx.cursor.fetchall()
    print(res)

    for row in res:
        results.append(row)
        print(str(len(results)))
    return text(str(results))


@status.post("/collected")
async def update_status_collected(request: Request):
    laundry_id = request.json.get("laundry_id")
    return json(
        {
            "message": "Laundry status updated to Collected.",
            "laundry_id": laundry_id,
            "laundry_status": "Collected",
        }
    )


@status.post("/washing")
async def update_status_washing(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")

    return json(
        {
            "message": "Laundry status updated to Processing.",
            "student_id": student_id,
            "laundry_status": "Processing",
        }
    )


@status.post("/ready")
async def update_status_ready(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")

    return json(
        {
            "message": "Laundry status updated to Ready for collection.",
            "student_id": student_id,
            "laundry_status": "Ready",
        }
    )


@status.post("/delivered")
async def update_status_delivered(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")

    return json(
        {
            "message": "Laundry status updated to Delivered.",
            "student_id": student_id,
            "laundry_status": "Delivered",
        }
    )
