from rest_framework import generics
from . import serializers
from . import models
# Create your views here.

class UserList(generics.ListAPIView):
    queryset=models.User.objects.all()
    serializer_class=serializers.UserSerializer