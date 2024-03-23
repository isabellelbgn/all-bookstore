from django.shortcuts import render
from rest_framework import generics
from .models import Book
from .serializer import BookSerializer
# Create your views here.

class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class BookRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
