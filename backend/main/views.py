from rest_framework import generics
from . import serializers
from . import models
# Create your views here.

class AdminList(generics.ListAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminSerializer