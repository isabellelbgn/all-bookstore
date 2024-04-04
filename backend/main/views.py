from rest_framework import generics, permissions
from . import serializers
from . import models
# Create your views here.

class AdminList(generics.ListCreateAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminSerializer
    # permission_classes=[permissions.IsAuthenticated]

class AdminDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminDetailSerializer
    # permission_classes=[permissions.IsAuthenticated]