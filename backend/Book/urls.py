from django.urls import path
from .views import BookListCreate, BookRetrieveUpdateDelete

urlpatterns = [
    path('book/', BookListCreate.as_view(), name="Create-Book-List"),
    path('book/<int:pk>/', BookRetrieveUpdateDelete.as_view(), name='book-Details')
]
