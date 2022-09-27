from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.generics import ListAPIView
from hotels.entity.filter_queries import FilterQuery
from hotels.models.hotel_models import HotelProperty
from hotels.serializers import HotelSerializer

# Create your views here.
class Hotel(ListAPIView):
    queryset = HotelProperty.objects.all()
    serializer_class = HotelSerializer
