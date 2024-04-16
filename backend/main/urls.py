from django.urls import path
from . import views
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

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
    path('customer/login/', views.customer_login, name='customer_login'),
    path('customer/register/', views.customer_register, name='customer_register'),

    #Auth
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Orders
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),


]

urlpatterns += router.urls