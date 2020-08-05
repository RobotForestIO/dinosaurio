from django.urls import path
from . import views

urlpatterns = [
    path('api/v1/dinosaurs/', views.DinosaurListCreate.as_view()),
]