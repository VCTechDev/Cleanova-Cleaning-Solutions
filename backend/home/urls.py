from django.urls import path
from .views import HeroAPIView, StatisticsAPIView

urlpatterns = [
    path('hero/', HeroAPIView.as_view(), name='hero-api'),
    path('statistics/', StatisticsAPIView.as_view(), name='statistics-api'),
]
