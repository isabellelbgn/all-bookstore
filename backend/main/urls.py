from django.urls import path
from . import views

urlpatterns = [
    path('admins/', views.AdminList.as_view()),
    path('admin/<int:pk>', views.AdminDetail.as_view()),
    path('books/', views.BookList.as_view()),
    path('book/<int:pk>', views.BookDetail.as_view()),
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>', views.CustomerDetail.as_view()),

]
