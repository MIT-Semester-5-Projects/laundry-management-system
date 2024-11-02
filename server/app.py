from sanic import Sanic, response
from sanic.request import Request

app = Sanic("LaundryManagementSystem")

@app.route("/user/add", methods=["POST"])
async def add_student(request: Request):
    student_data = request.json
    
    return response.json({
        "message": "Student added successfully.",
        "student_id": "mock_32_char_hex_id",
        "student_data": student_data
    })


@app.route("/laundry/status", methods=["GET"])
async def fetch_status(request: Request):
    student_id = request.args.get("student_id", "mock_student_id") 
    
    return response.json({
        "student_id": student_id,
        "laundry_status": "Collected" 
    })


@app.route("/laundry/status/collected", methods=["POST"])
async def update_status_collected(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")
    
    return response.json({
        "message": "Laundry status updated to Collected.",
        "student_id": student_id,
        "laundry_status": "Collected"
    })


@app.route("/laundry/status/washing", methods=["POST"])
async def update_status_washing(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")
    
    return response.json({
        "message": "Laundry status updated to Processing.",
        "student_id": student_id,
        "laundry_status": "Processing"
    })


@app.route("/laundry/status/ready", methods=["POST"])
async def update_status_ready(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")
    
    return response.json({
        "message": "Laundry status updated to Ready for collection.",
        "student_id": student_id,
        "laundry_status": "Ready"
    })


@app.route("/laundry/status/delivered", methods=["POST"])
async def update_status_delivered(request: Request):
    student_id = request.json.get("student_id", "mock_student_id")
    
    return response.json({
        "message": "Laundry status updated to Delivered.",
        "student_id": student_id,
        "laundry_status": "Delivered"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
