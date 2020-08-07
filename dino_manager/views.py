from rest_framework.viewsets import ModelViewSet
from .models import Dinosaur
from .serializers import DinosaurSerializer


class DinosaurModelViewSet(ModelViewSet):
    queryset = Dinosaur.objects.all()
    serializer_class = DinosaurSerializer
