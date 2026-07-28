from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Hero
from .serializers import HeroSerializer

class HeroAPIView(APIView):
    def get(self, request, *args, **kwargs):
        hero = Hero.objects.filter(is_active=True).first()
        if not hero:
            return Response(
                {"error": "No active Hero found."},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = HeroSerializer(hero, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
