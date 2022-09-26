from django.contrib import admin
from hotels.models.address_models import *
from hotels.models.hotel_models import *

admin.site.register(City)
admin.site.register(Region)
admin.site.register(Country)
admin.site.register(Address)
admin.site.register(HotelProperty)
admin.site.register(Facility)
admin.site.register(Image)
admin.site.register(Room)