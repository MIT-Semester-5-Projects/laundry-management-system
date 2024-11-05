from functools import wraps
import jwt
from sanic import response, text
from sanic import Blueprint
from sanic.request import Request

# encoded = jwt.encode({"nived": "devin@123"}, request.app.config.REQUEST, algorithm="HS256")
# print(encoded)

auth = Blueprint("auth")

# export interface LoginResponse {
# 	success: boolean;
# 	message: string;
# 	data?: {
# 		userId: string;
# 		username: string;
# 		userRole: string;
# 		token: string;
# 	};
# }


def check_token(request):
    if not request.token:
        return False
    try:
        jwt.decode(request.token, request.app.config.SECRET, algorithms=["HS256"])

    except jwt.exceptions.InvalidTokenError:
        return False
    else:
        return True


def protected(wrapped):
    def decorator(f):
        @wraps(f)
        async def decorated_function(request, *args, **kwargs):
            is_authenticated = check_token(request)

            if is_authenticated:
                response = await f(request, *args, **kwargs)
                return response
            else:
                return text("You are unauthorized", 401)

        return decorated_function

    return decorator(wrapped)


@auth.post("/user/add")
async def add_student(request: Request):
    student_data = request.json

    return response.json(
        {
            "message": "Student added successfully.",
            "student_id": "mock_32_char_hex_id",
            "student_data": student_data,
        }
    )
