from hotels.models.hotel_models import Facility, HotelProperty,Room
from hotels.models.address_models import Address
from django.db.models import Q,Count

def find_hotels_by_dest(dest_type,dest):
    if dest_type == 'city':
        param = {'address__city__city_name':dest}
    elif dest_type == 'region':
        param = {'address__region__region_name':dest}
    elif dest_type == 'country':
        param = {'address__country__country_name':dest}
    
    qs = HotelProperty.objects.filter(**param).values('id','hotel_name','address')
    return qs

def find_hotels_by_facility(facilities_id):
    qs = Facility.objects.filter(id__in=facilities_id)
    return qs

def find_hotel_by_price(min_price,max_price):
    #from here
    qs = Room.objects.filter(price__range=(min_price, max_price)).distinct('hotel_').values('id','hotel_name','address')
    return qs

def hotel_details(hotel_id):
    try:
        qs = HotelProperty.objects.get(id=hotel_id)
        return qs.hotel_details
    except:
        return {}

