from rest_framework import serializers
from . import models
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
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
        fields = ['id', 'user']

    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id', 'user']

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id', 'customer']

    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields=['id', 'order', 'book']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address', 'default_address']

        def __init__(self, *args, **kwargs):
            super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

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

