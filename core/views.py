# core/views.py
from rest_framework import viewsets
from .models import AboutContent
from .serializers import AboutContentSerializer

class AboutContentViewSet(viewsets.ModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer