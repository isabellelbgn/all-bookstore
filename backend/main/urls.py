from django.urls import path
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register('address', views.CustomerAddressViewSet)
router.register('bookrating', views.BookRatingViewSet)

urlpatterns = [
    #Admins
    path('admins/', views.AdminList.as_view()),
    path('admin/<int:pk>', views.AdminDetail.as_view()),

    #Books
    path('books/', views.BookList.as_view()),
    path('books/<str:tag>', views.TagBookList.as_view()),
    path('book/<int:pk>', views.BookDetail.as_view()),
    path('book/<int:book_id>/ratings/', views.BookRatingsList.as_view(), name='book-ratings-list'),

    #Book Categories
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>', views.CategoryDetail.as_view()),
    
    # Customers
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>', views.CustomerDetail.as_view()),
    path('customer/login/', views.CustomerLogin.as_view(), name='customer_login'),
    path('customer/register/', views.CustomerRegister.as_view(), name='customer_register'),
    path('customer/detail/', views.CustomerDetailView.as_view(), name='customer_detail'),
    path('customer/orders/', views.CustomerOrdersView.as_view(), name='customer_orders'),


    # Orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),
    path('checkout/', views.Checkout.as_view(), name='checkout'),

    # Cart
    path('view_cart/', views.ViewCart.as_view(), name='view-cart'),
    path('add_to_cart/<int:book_id>/', views.AddToCart.as_view(), name='add_to_cart'),
    path('remove_from_cart/<int:order_item_id>/', views.RemoveFromCart.as_view(), name='remove_from_cart'),
    path('delete_from_cart/<int:order_item_id>/', views.DeleteFromCart.as_view(), name='delete_from_cart'),


]

urlpatterns += router.urls