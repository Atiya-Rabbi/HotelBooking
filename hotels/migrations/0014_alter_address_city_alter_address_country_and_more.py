# Generated by Django 4.1.1 on 2022-09-26 12:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0013_alter_hotelproperty_address_alter_image_hotel_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='city', to='hotels.city'),
        ),
        migrations.AlterField(
            model_name='address',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='country', to='hotels.country'),
        ),
        migrations.AlterField(
            model_name='address',
            name='region',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='region', to='hotels.region'),
        ),
    ]
