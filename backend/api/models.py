from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    published_date = models.DateField()

    def __str__(self):
        return self.titleß
