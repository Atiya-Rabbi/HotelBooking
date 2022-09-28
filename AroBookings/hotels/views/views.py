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
        detail = FilterQuery().find_hotels_by_dest('city','Galway')
        return Response(detail)
  
    # def post(self, request):
  
    #     serializer = ReactSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=True):
    #         serializer.save()
    #         return  Response(serializer.data)