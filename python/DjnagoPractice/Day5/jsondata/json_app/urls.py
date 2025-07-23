from django.urls import path
from . import views

urlpatterns = [
    path('get-user/', views.get_user_by_email, name='get_user'),
]

