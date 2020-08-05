from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # If you have Django Admin installed
    path('', include('dino_manager.urls'))
]
