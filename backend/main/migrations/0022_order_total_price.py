# Generated by Django 5.0.3 on 2024-05-14 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_order_customer_address_order_payment_method_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total_price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
