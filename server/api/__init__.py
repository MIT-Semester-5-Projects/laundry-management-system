from sanic import Blueprint
from .analytics import analytics
from .auth import auth
from .status import status

api = Blueprint.group(analytics, auth, status)
