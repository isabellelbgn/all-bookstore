from django.urls import path
from . import views

urlpatterns = [
    path('admin/', views.AdminList.as_view()),

]
