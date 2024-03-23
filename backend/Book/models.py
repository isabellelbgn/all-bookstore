from django.db import models

# Create your models here.
class Book(models.Model):
    bookId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    author= models.CharField(max_length=100)
    description = models.TextField()
    publishDate = models.DateField()
