from .models import Dinosaur
from .serializers import DinosaurSerializer
from rest_framework import generics


class DinosaurListCreate(generics.ListCreateAPIView):
    queryset = Dinosaur.objects.all()
    serializer_class = DinosaurSerializer
