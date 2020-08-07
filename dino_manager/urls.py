from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'dinosaurs', views.DinosaurModelViewSet, basename='dinosaurs')

urlpatterns = router.urls