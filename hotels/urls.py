from django.urls import path
from hotels.views import views

urlpatterns = [
    path('', views.index, name='index'),
]