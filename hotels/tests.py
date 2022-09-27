from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from hotels.models.hotel_models import HotelProperty, Facility, Room, Image
from hotels.models.address_models import *
from hotels.entity.filter_queries import find_hotels_by_dest,hotel_details,find_hotels_by_facility, find_hotel_by_price

class DbQueriesTestCase(TestCase):
    def setUp(self):
        
        city1=City.objects.create(city_name='Dublin')
        city2=City.objects.create(city_name='New Delhi')

        region1=Region.objects.create(region_name='Delhi NCR')

        country1=Country.objects.create(country_name='Ireland')
        country2=Country.objects.create(country_name='India')

        add1=Address.objects.create(street='abc',city=city1,country=country1)
        add2=Address.objects.create(street='efg',city=city2,region=region1,country=country2)

        f1=Facility.objects.create(id=1,facility_name='no smoking')
        f2=Facility.objects.create(id=2,facility_name='hair dryer')
        f3=Facility.objects.create(id=3,facility_name='Coffe Maker')
        
        h1=HotelProperty.objects.create(id=1,hotel_name='abc hotel', address=add1, description='testing here')
        h1.facility.add(f1)
        h1.facility.add(f2)
        h2=HotelProperty.objects.create(id=2,hotel_name='efg hotel', address=add2, description='testing here')
        h2.facility.add(f1)

        r1=Room.objects.create(room_type='queen',sleeps=2,hotel=h1,price=120)
        r1.facility.add(f3)
        r2=Room.objects.create(room_type='king',sleeps=2,hotel=h1,price=200)
        r2.facility.add(f3)
        r3=Room.objects.create(room_type='queen',sleeps=2,hotel=h2,price=150)

        image_path = 'hotels/static/images/test/test_image.jpg'
        newPhoto1 = Image()
        newPhoto1.hotel=h1
        newPhoto1.upload = SimpleUploadedFile(name='test_image1.jpg', content=open(image_path, 'rb').read(), content_type='image/jpeg')
        newPhoto1.save()
        newPhoto2 = Image()
        newPhoto2.hotel=h2
        newPhoto2.upload = SimpleUploadedFile(name='test_image2.jpg', content=open(image_path, 'rb').read(), content_type='image/jpeg')
        newPhoto2.save()

    def test_find_hotels_by_dest(self):
        result1 = find_hotels_by_dest('city','Dublin')
        result2 = find_hotels_by_dest('region','Delhi NCR')
        result3 = find_hotels_by_dest('country','USA')

        self.assertEqual(result1.count(), 1)
        self.assertEqual(result2.count(), 1)
        self.assertEqual(result3.count(), 0)

    def test_hotel_details(self):
        details1 = hotel_details(1)
        details2 = hotel_details(2)

        self.assertEqual(len(details1['room']),2)
        self.assertEqual(len(details2['room']),1)
        self.assertEqual(len(details1['images']),1)
        self.assertEqual(len(details2['images']),1)

    def test_find_hotels_by_facility(self):
        hotels = find_hotels_by_facility(facilities_id=[1,2,3],city='New Delhi')
        self.assertEqual(len(hotels),1)

    def test_find_hotel_by_price(self):
        minprice = 100
        maxprice = 200
        hotels = find_hotel_by_price(minprice,maxprice,'Dublin')
        self.assertEqual(len(hotels),1)
        