# Generated by Django 5.0.3 on 2024-04-07 13:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_book_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='slug',
        ),
    ]