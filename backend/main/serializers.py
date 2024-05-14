from rest_framework import serializers
from . import models
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['id'] = user.id 
        token['username'] = user.username
        return token

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Admin
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(AdminSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class AdminDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Admin
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(AdminDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class BookImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BookImage
        fields = ['id', 'book', 'image']

class BookListSerializer(serializers.ModelSerializer):
    book_ratings = serializers.StringRelatedField(many = True, read_only = True)
    book_images = BookImageSerializer(many = True, read_only = True)

    class Meta:
        model = models.Book
        fields = ['id', 'category', 'author', 'title', 'author', 'description', 'publish_date', 'price', 'tag_list', 'isbn', 'book_images', 'book_ratings']

    def __init__(self, *args, **kwargs):
        super(BookListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class BookDetailSerializer(serializers.ModelSerializer):
    book_ratings = serializers.StringRelatedField(many = True, read_only = True)
    book_images = BookImageSerializer(many = True, read_only = True)

    class Meta:
        model = models.Book
        fields = ['id', 'category', 'author', 'title', 'author', 'description', 'publish_date', 'price', 'tag_list', 'isbn', 'book_images', 'book_ratings']

    def __init__(self, *args, **kwargs):
        super(BookDetailSerializer, self).__init__(*args, **kwargs)
       # self.Meta.depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user', 'customer_addresses']

    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user', 'customer_addresses']

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerAddressSerializer(serializers.ModelSerializer):
    address = serializers.SerializerMethodField()

    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']

    def get_address(self, obj):
        return f"{obj.street}, {obj.barangay}, {obj.city}, {obj.region}, {obj.zip_code}"
    
class OrderItemSerializer(serializers.ModelSerializer):
    book = BookDetailSerializer(read_only=True) 

    class Meta:
        model = models.OrderItems
        fields = ['id', 'book', 'quantity']  

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = models.Order
        fields = ['id', 'customer', 'order_items']

class OrderDetailSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)
    customer_address = CustomerAddressSerializer(read_only=True)

    class Meta:
        model = models.Order
        fields = ['id', 'order_date', 'is_ordered', 'shipping_method', 'payment_method', 'phone_number', 'total_price', 'status', 'customer_address', 'order_items']

class BookRatingSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='customer.user.username')
    class Meta:
        model = models.BookRating
        fields = ['id', 'customer', 'book', 'rating', 'reviews', 'created_by', 'review_date']

        def __init__(self, *args, **kwargs):
            super(BookRatingSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BookCategory
        fields = ['id', 'title', 'description']

    def __init__(self, *args, **kwargs):
        super(CategorySerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BookCategory
        fields = ['id', 'title', 'description']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1

