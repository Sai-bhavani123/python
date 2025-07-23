from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def user_json_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name")
            email = data.get("email")
            phone = data.get("phone")
            age = data.get("age")

            return JsonResponse({"message": "JSON Data Received", "data": data})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request"}, status=400)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_user_by_email(request):
    if request.method == "GET":
        email = request.GET.get("email")
        # Example data
        users = [
            {"name": "Sai Bhavani", "email": "sai@example.com", "phone": "9876543210", "age": 25},
            {"name": "Anu", "email": "anu@example.com", "phone": "9123456780", "age": 22},
        ]
        for user in users:
            if user["email"] == email:
                return JsonResponse({"message": "User found", "data": user})
        return JsonResponse({"error": "User not found"}, status=404)
    return JsonResponse({"error": "Invalid request"}, status=400)
