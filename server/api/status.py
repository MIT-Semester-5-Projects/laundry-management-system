from sanic import Blueprint, Sanic
from sanic.request import Request
from sanic.response import json, text
from sanic.exceptions import SanicException
from datetime import datetime

status = Blueprint("status", url_prefix="/laundry/status")

# export interface StudentDetails {
# 	success: boolean;
# 	data: {
# 		date_received: string;
# 		date_: string;
# 		remaining_cycles: number;
# 		status: string;
# 	};
# }


# Web App
@status.get("/")
async def fetch_status(request: Request):
    try:
        laundry_id = request.args.get("laundry_id")

        query = f"""
        SELECT 
            CASE WHEN l.laundry_id IS NOT NULL THEN true ELSE false END AS success,
            l.date_received AS date_received,
            l.date_delivered AS date_delivered,
            s.remaining_cycles,
            l.status
        FROM 
            student_data s
        LEFT JOIN 
            laundry l ON s.laundry_id = l.laundry_id
        WHERE 
            s.laundry_id = %s;
        """
        params = (laundry_id,)

        request.app.ctx.cursor.execute(query, params)
        result = request.app.ctx.cursor.fetchone()  # Fetch a single record

        # Check if result exists
        if result is None:
            return json({"success": False, "data": None}, status=404)

        # Format the result as JSON
        data = {
            "success": result[0],
            "data": {
                "date_received": result[1].isoformat() if result[1] else None,
                "date_collected": result[2].isoformat() if result[1] else None,
                "remaining_cycles": result[3],
                "status": result[4] if result[4] else None,
            },
        }

        return json(data)

    except Exception as e:
        # Log the error or return it as a response
        return text(f"An error occurred: {e}", status=500)


# Mobile app
@status.post("/collected")
async def update_status_collected(request: Request):
    try:
        laundry_id = request.json.get("laundry_id")
        weight = request.json.get("weight")
        pieces = request.json.get("pieces")
        date = datetime.now()

        query = """
        INSERT INTO laundry (laundry_id, status, weight, pieces, date_received, date_delivered) 
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        params = (laundry_id, "Collected", float(weight), int(pieces), date, date)

        # Execute query
        request.app.ctx.cursor.execute(query, params)
        request.app.ctx.connection.commit()

        return text("Status updated to 'Collected' successfully.")

    except Exception as e:
        # Log the error or return it as a response
        return text(f"An error occurred: {e}", status=500)


@status.post("/washing")
async def update_status_washing(request: Request):
    try:
        laundry_id = request.json.get("laundry_id")

        query = """
        UPDATE laundry 
        SET status = %s
        WHERE laundry_id = %s
        """
        params = ("Washing", laundry_id)

        # Execute query
        request.app.ctx.cursor.execute(query, params)
        request.app.ctx.connection.commit()

        return text(
            f"Status updated to Washing successfully for laundry ID {laundry_id}."
        )

    except Exception as e:
        # Log the error or return it as a response
        return text(f"An error occurred: {e}", status=500)


@status.post("/ready")
async def update_status_ready(request: Request):
    try:
        laundry_id = request.json.get("laundry_id")

        query = """
        UPDATE laundry 
        SET status = %s
        WHERE laundry_id = %s
        """
        params = ("Ready", laundry_id)

        # Execute query
        request.app.ctx.cursor.execute(query, params)
        request.app.ctx.connection.commit()

        return text(
            f"Status updated to Ready successfully for laundry ID {laundry_id}."
        )

    except Exception as e:
        # Log the error or return it as a response
        return text(f"An error occurred: {e}", status=500)


@status.post("/delivered")
async def update_status_delivered(request: Request):
    try:
        laundry_id = request.json.get("laundry_id")
        date_delivered = datetime.now()

        # Update status to Delivered and decrease remaining_cycles in one transaction
        query = """
        UPDATE laundry 
        JOIN student_data ON laundry.laundry_id = student_data.laundry_id
        SET laundry.status = %s, 
            laundry.date_delivered = %s,
            student_data.remaining_cycles = student_data.remaining_cycles - 1
        WHERE laundry.laundry_id = %s
        """
        params = ("Delivered", date_delivered, laundry_id)

        # Execute the transaction
        request.app.ctx.cursor.execute(query, params)
        request.app.ctx.connection.commit()

        return text(
            f"Status updated to 'Delivered' successfully for laundry ID {laundry_id}."
        )

    except Exception as e:
        # Log the error or return it as a response
        return text(f"An error occurred: {e}", status=500)
