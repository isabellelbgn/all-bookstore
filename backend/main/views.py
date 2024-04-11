from rest_framework import generics, permissions, pagination, viewsets
from . import serializers
from . import models
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
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
        # Handle other request methods if needed
        return JsonResponse({'success': False, 'message': 'Invalid request method'})


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

class CategoryList(generics.ListCreateAPIView):
    queryset = models.BookCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    pagination_class = pagination.PageNumberPagination

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.BookCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer
    pagination_class = pagination.PageNumberPagination
