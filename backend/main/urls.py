from django.urls import path
from . import views

urlpatterns = [
    path('admins/', views.AdminList.as_view()),
    path('admin/<int:pk>', views.AdminDetail.as_view()),
]
