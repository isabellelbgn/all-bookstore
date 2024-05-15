from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Admin)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['get_username']
    def get_username(self, obj):
        return obj.user.username

admin.site.register(models.BookCategory)
admin.site.register(models.Book)
admin.site.register(models.BookRating)

admin.site.register(models.Customer, CustomerAdmin)
admin.site.register(models.CustomerAddress)

admin.site.register(models.Order)
admin.site.register(models.OrderItems)