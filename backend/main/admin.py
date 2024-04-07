from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Admin)

admin.site.register(models.BookCategory)
admin.site.register(models.Book)
admin.site.register(models.BookRating)

admin.site.register(models.Customer)
admin.site.register(models.CustomerAddress)

admin.site.register(models.Order)
admin.site.register(models.OrderItems)

admin.site.register(models.BookImage)
