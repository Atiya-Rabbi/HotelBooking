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

def find_hotels_by_facility(facilities_id,city):
    result =[]
    facilities = Facility.objects.filter(Q(id__in=facilities_id))
    for facility in facilities:
        hf=facility.hotel_with_facility(city)
        if len(hf)!=0:
            result.append(hf)
    return result

def find_hotel_by_price(min_price,max_price,city):
    qs = Room.objects.filter(Q(price__range=(min_price, max_price))&Q(hotel__address__city__city_name=city)).distinct().values('hotel_id','hotel__hotel_name','hotel__address')
    return qs

def hotel_details(hotel_id):
    try:
        qs = HotelProperty.objects.get(id=hotel_id)
        return qs.hotel_details
    except:
        return {}

