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

    #Book Categories
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>', views.CategoryDetail.as_view()),
    # Customers
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>', views.CustomerDetail.as_view()),
    # Orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),


]

urlpatterns += router.urls