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
    id = models.AutoField(primary_key=True) 

    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
    
# Product Model
class Book(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(BookCategory, on_delete=models.SET_NULL, null=True, related_name='category_book')
    admin = models.ForeignKey(Admin, on_delete=models.SET_NULL, null=True)

    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.TextField(null=True)
    publish_date = models.DateField(null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    tags = models.TextField(null=True)
    isbn = models.CharField(max_length=13, unique=True, null=True)
    image = models.ImageField(upload_to='book_images/', null=True) 

    def __str__(self):
        return self.title
    
    def tag_list(self):
        if self.tags:
            return self.tags.split(',')
        else:
            return []

# Customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username

# Customer Address Model
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_addresses')
    street = models.CharField(max_length=255, null=True)
    barangay = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=255, null=True)
    region = models.CharField(max_length=255, null=True)
    zip_code = models.CharField(max_length=10, null=True)
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.street}, {self.barangay}, {self.city}, {self.region}, {self.zip_code}"

# Order Model
class Order(models.Model):
    SHIPPING_METHOD_CHOICES = [
        ('pickup', 'Pickup'),
        ('deliver', 'Deliver'),
        ('shipping', 'Shipping'),
    ]

    PAYMENT_METHOD_CHOICES = [
        ('gcash', 'GCash'),
        ('bpi', 'BPI'),
        ('cod', 'Cash on Delivery'),
    ]    
    
    STATUS_CHOICES = [
        ('in progress', 'In Progress'),
        ('paid', 'Paid'),
        ('completed', 'Completed'),
    ]

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_orders')
    order_date = models.DateTimeField(auto_now_add=True)
    is_ordered = models.BooleanField(default=False)
    shipping_method = models.CharField(max_length=20, choices=SHIPPING_METHOD_CHOICES, null = True)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES, null = True)
    phone_number = models.CharField(max_length=15, null = True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0) 
    customer_address = models.ForeignKey(CustomerAddress, on_delete=models.SET_NULL, null=True, related_name='orders')
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='In Progress')

    def total_quantity(self):
        return sum(item.quantity for item in self.order_items.all())

    def __str__(self):
        return f"Order ID: {self.id}"

# Order Item Model
class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.book.title} - Quantity: {self.quantity}"

# Book Rating and Reviews
class BookRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE, related_name = 'rating_customers')
    book = models.ForeignKey(Book, on_delete = models.CASCADE, related_name='book_ratings')
    rating = models.IntegerField()
    reviews = models.TextField()
    review_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'
