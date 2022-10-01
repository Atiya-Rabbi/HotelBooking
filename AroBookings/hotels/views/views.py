from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from hotels.entity.filter_queries import FilterQuery
from hotels.models.hotel_models import HotelProperty
# from hotels.serializers import HotelSerializer

# Create your views here.
class Hotel(APIView):
    # serializer_class = HotelSerializer
  
    def get(self, request):
        if 'city' in request.GET:
            city_name = request.GET.get('city', 'dublin')
            detail = FilterQuery().find_hotels_by_dest('city',city_name.lower())
        elif 'hotel_id' in request.GET:
            hotel_id = request.GET.get('hotel_id')
            detail = FilterQuery().hotel_details(hotel_id)
        return Response(detail)
  
    # def post(self, request):
  
    #     serializer = ReactSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         serializer.save()
    #         return  Response(serializer.data)