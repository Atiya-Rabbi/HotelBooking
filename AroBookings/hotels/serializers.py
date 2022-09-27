from rest_framework import serializers
from hotels.models.hotel_models import HotelProperty

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelProperty
        fields = ('id', 'hotel_name', 'description', 'address')