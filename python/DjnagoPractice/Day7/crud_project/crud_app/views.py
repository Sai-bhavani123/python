from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from . import users

user_data = users.user_list

@csrf_exempt
def get_users(req):
    if req.method == "GET":
        if len(user_data) > 0:
            return JsonResponse({"data": user_data})
        else:
            return JsonResponse({"msg": "There are no users"})
    else:
        return HttpResponse("Invalid method", status=405)

@csrf_exempt
def post_user(req):
    if req.method == "POST":
        try:
            reg_data = json.loads(req.body)
            if reg_data["username"] and reg_data["password"] and reg_data["email"] and reg_data["mobile"]:
                details = {
                    "id": len(user_data) + 1,
                    "username": reg_data["username"],
                    "password": reg_data["password"],
                    "email": reg_data["email"],
                    "mobile": reg_data["mobile"]
                }
                user_data.append(details)
                return HttpResponse("User registered successfully", status=201)
            else:
                return HttpResponse("Missing required fields", status=400)
        except:
            return HttpResponse("Invalid request body", status=400)
    else:
        return HttpResponse("Invalid method", status=405)

@csrf_exempt
def patch_user(req, id):
    if req.method == "PATCH":
        try:
            data = json.loads(req.body)
            for i in user_data:
                if i["id"] == id:
                    if "password" in data:
                        i["password"] = data["password"]
                        return HttpResponse("Password updated", status=200)
                    else:
                        return HttpResponse("Password field is required", status=400)
            return HttpResponse("No user found", status=404)
        except:
            return HttpResponse("Invalid request", status=400)
    else:
        return HttpResponse("Invalid method", status=405)
