from rest_framework import generics, permissions
from . import serializers
from . import models
# Create your views here.

class AdminList(generics.ListCreateAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminSerializer

class AdminDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminDetailSerializer

class BookList(generics.ListCreateAPIView):
    queryset=models.Book.objects.all()
    serializer_class=serializers.BookListSerializer

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Book.objects.all()
    serializer_class=serializers.BookDetailSerializer

class CustomerList(generics.ListCreateAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer
