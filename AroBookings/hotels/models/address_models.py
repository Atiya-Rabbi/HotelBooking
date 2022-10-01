from django.db import models

class City(models.Model):
    city_name = models.CharField(max_length=50)

    def __str__(self):
        return self.city_name

class Region(models.Model):
    region_name = models.CharField(max_length=100)

    def __str__(self):
        return self.region_name

class Country(models.Model):
    country_name = models.CharField(max_length=50)

    def __str__(self):
        return self.country_name

class Address(models.Model):
    street = models.CharField(max_length=150)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='city')
    region = models.ForeignKey(Region, on_delete=models.CASCADE,blank=True,null=True,related_name='region')
    country = models.ForeignKey(Country, on_delete=models.CASCADE,related_name='country')

    def __str__(self):
        full_address = self.street.capitalize() + ',' + self.city.city_name.capitalize() + ',' + self.country.country_name.capitalize()
        return full_address
    
    @property
    def return_full_address(self):
        return self.__str__()