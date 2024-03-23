from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework.views import APIView

# Create your views here.
class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def delete(self, request, *args, **kwargs):
        Product.objects.all().delete
        return Response(status=status.HTTP_204_NO_CONTENT)
    

class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "pk"

class ProductList(APIView):
    def get(self, request, format=None):
        title = request.query_params.get("title", "")
             
        if title:
            # Filter the queryset based on the title
            products = Product.objects.filter(title__icontains=title)
                  
        else:
            # If no title, return all products
            products = Product.objects.all()

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
