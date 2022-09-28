from django.db import models
from hotels.models.address_models import Address
import os

class Facility(models.Model):
    facility_name = models.CharField(max_length=100,null=False,unique=True)
    def __str__(self):
        return self.facility_name

    @property
    def return_facility(self):
        return self.__str__()

    # @property
    def hotel_with_facility(self,city_name):
        hotel_facility = self.hotel_facility.filter(address__city__city_name=city_name)
        if len(hotel_facility)!=0:
            hotels = [{'hotel_id':fac.id,'hotel_name':fac.hotel_name, 'address': fac.address.return_full_address} for fac in hotel_facility]
        else:
            hotel_facility = self.facility.filter(hotel__address__city__city_name=city_name)
            hotels = [{'hotel_id':fac.hotel.id,'hotel_name':fac.hotel.hotel_name, 'address': fac.hotel.address.return_full_address} for fac in hotel_facility]
        return hotels

class HotelProperty(models.Model):
    hotel_name = models.CharField(max_length=100,null=False)
    address = models.ForeignKey(Address, on_delete=models.CASCADE,null=False, related_name='address')
    description = models.TextField(null=True, blank=True)
    facility = models.ManyToManyField(Facility,null=True, related_name='hotel_facility')
    
    def __str__(self):
        return self.hotel_name

    @property
    def hotel_details(self):
        facilities = self.facility.all()
        facility = [fac.return_facility for fac in facilities]
        rooms = self.hotel_room.all()
        room = [r.room_details for r in rooms]
        images = self.hotel_img.all()
        img = [i.upload.url for i in images]
        details = {
            'hotel_id': self.id,
            'hotel_name': self.hotel_name,
            'address': self.address.return_full_address,
            'description': self.description,
            'facility': facility,
            'room': room,
            'images': img,
        }
        return details

    @property
    def basic(self):
        image = self.hotel_img.first()
        basic_details = {
            'hotel_id': self.id,
            'hotel_name': self.hotel_name,
            'address': self.address.return_full_address,
            'images': image.upload.url,
        }
        return basic_details
    

class Room(models.Model):
    room_type = models.CharField(max_length=100,null=False)
    sleeps = models.IntegerField(null=False)
    hotel = models.ForeignKey(HotelProperty, on_delete=models.CASCADE,null=False, related_name='hotel_room')
    price = models.FloatField(null=False)
    facility = models.ManyToManyField(Facility,null=True,blank=True, related_name='facility')

    def __str__(self):
        return self.room_type

    @property
    def room_details(self):
        facilities = self.facility.all()
        facility = [fac.return_facility for fac in facilities]
        details = {
            'room_type': self.room_type,
            'sleeps': self.sleeps,
            'price': self.price,
            'facility': facility
        }
        return details

def user_directory_path():
    
    return 'hotels/static/images/hotel/'

class Image(models.Model):
    hotel = models.ForeignKey(HotelProperty,on_delete=models.CASCADE,null=True, related_name='hotel_img')
    upload = models.ImageField(upload_to = user_directory_path())

    def __str__(self):
        return self.hotel.hotel_name+'_'+str(self.id)
