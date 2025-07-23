from django.urls import path 
from . import views

urlpatterns = [
    path("getusers/", views.get_users),
    path("postuser/", views.post_user),
    path("patchuser/<int:id>", views.patch_user)
]
