# Generated by Django 4.1.1 on 2022-09-26 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0006_alter_facility_facility_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='upload',
            field=models.ImageField(upload_to='hotel_<django.db.models.fields.related.ForeignKey>/room_/'),
        ),
    ]
