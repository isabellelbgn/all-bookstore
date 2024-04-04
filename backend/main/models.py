from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# User Model
class Admin(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)

# Product
class Book(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly define id field

    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    publishDate = models.DateField()
    price = models.FloatField()

    def __str__(self):
        return self.title

# Product Category
class BookCategory(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly define id field

    title = models.CharField(max_length=100)
    description=models.TextField()

    def __str__(self):
        return self.title