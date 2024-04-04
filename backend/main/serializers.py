from rest_framework import serializers
from . import models

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Admin
        fields=['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(AdminSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class AdminDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Admin
        fields=['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(AdminDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
