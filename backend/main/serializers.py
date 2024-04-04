from rest_framework import serializers
from . import models

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Admin
        fields=['user', 'address']