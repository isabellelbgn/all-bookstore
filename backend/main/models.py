from django.db import models
from django.contrib.auth.models import User
# Create your models here.

# User Model
class Admin(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username

# Product Category Model
class BookCategory(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly define id field

    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
    
# Product Model
class Book(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly define id field

    category = models.ForeignKey(BookCategory, on_delete = models.SET_NULL, null=True, related_name = 'category_book')
    admin = models.ForeignKey(Admin, on_delete = models.SET_NULL, null=True)

    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField()
    publishDate = models.DateField()
    price = models.FloatField()

    def __str__(self):
        return self.title

# Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    contactNumber = models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username

# Order Model
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_orders')
    orderDate = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '%s' % (self.orderDate)

# Order Item Model
class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name = 'order_items')
    book = models.ForeignKey(Book, on_delete=models.CASCADE)

    def __str__(self):
        return self.book.title
