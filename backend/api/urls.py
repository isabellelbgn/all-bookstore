from django.urls import path
from . import views

urlpatterns = [
    path("product/", views.ProductListCreate.as_view(), name="product-view-create"),
    path("product/<int:pk>/", views.ProductRetrieveUpdateDestroy.as_view(), name="update")
]
