# Generated by Django 4.1.1 on 2022-09-25 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0004_alter_facility_facility_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facility',
            name='facility_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='room',
            name='facility',
            field=models.ManyToManyField(blank=True, null=True, to='hotels.facility'),
        ),
    ]
