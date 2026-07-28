from django.urls import path
from .views import HeroAPIView

urlpatterns = [
    path('hero/', HeroAPIView.as_view(), name='hero-api'),
]
