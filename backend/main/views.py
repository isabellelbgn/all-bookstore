from rest_framework import generics, permissions, pagination, viewsets
from . import serializers
from . import models

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import BookRating
from .serializers import BookRatingSerializer

# Create your views here.

class AdminList(generics.ListCreateAPIView):
    queryset = models.Admin.objects.all()
    serializer_class = serializers.AdminSerializer

class AdminDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Admin.objects.all()
    serializer_class = serializers.AdminDetailSerializer

class BookList(generics.ListCreateAPIView):
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')
        if category_id:
            try:
                category = models.BookCategory.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except models.BookCategory.DoesNotExist:
                qs = qs.none()
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs

class TagBookList(generics.ListCreateAPIView):
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs

class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookDetailSerializer

class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer

@csrf_exempt
def customer_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            message = {
                'success': True,
                'username': user.username
            }
        else:
            message = {
                'success': False,
                'message': 'Invalid username or password. Please try again!'
            }
        return JsonResponse(message)
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method'})
    
# @csrf_exempt
# def customer_login(request):
#     if request.method == 'POST':
#         return JsonResponse({'message': 'JWT authentication is required.'}, status=403)
#     else:
#         return JsonResponse({'success': False, 'message': 'Invalid request method'})

@csrf_exempt
def customer_register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        try: 
            if User.objects.filter(username=username).exists():
                message = {
                    'success': False,
                    'message': 'Username already exists.'
                }
                return JsonResponse(message)

            user = User.objects.create_user(
                username=username,
                password=password,
                email=email,
                first_name=first_name,
                last_name=last_name
            )

            if user:
                customer = models.Customer.objects.create(user=user)
                message = {
                    'success': True,
                    'user': user.id,
                    'customer': customer.id,
                    'message': "You are now registered. You can now log in."
                }
            else:
                message = {
                    'success': False,
                    'message': 'Something went wrong!'
                }
            return JsonResponse(message)
        except IntegrityError:
            message = {
                'success': False,
                'message': 'Username already exists!'
            }
            return JsonResponse(message)
    else:
        message = {
            'success': False,
            'message': 'Invalid request method. Only POST method is allowed.'
        }
        return JsonResponse(message)


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer

class OrderDetail(generics.ListAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs.get('pk')
        order = models.Order.objects.get(id = order_id)
        order_items = models.OrderItems.objects.filter(order = order)
        return order_items
    
class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = models.CustomerAddress.objects.all().order_by('id')

class BookRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.BookRatingSerializer
    queryset = models.BookRating.objects.all()

class BookRatingsList(APIView):
    def get(self, request, book_id, format=None):
        try:
            ratings = BookRating.objects.filter(book_id=book_id)
            serializer = BookRatingSerializer(ratings, many=True)
            return Response(serializer.data)
        except BookRating.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class CategoryList(generics.ListCreateAPIView):
    queryset = models.BookCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[:limit]
        return qs


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.BookCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer
    pagination_class = pagination.PageNumberPagination
