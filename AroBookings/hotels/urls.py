from django.urls import path
from hotels.views.views import Hotel

urlpatterns = [
    path('hotel', Hotel.as_view(), name='index'),
]