# core/views.py

from django.shortcuts import render
from rest_framework import viewsets
from .models import AboutContent
from .serializers import AboutContentSerializer

# Sua ViewSet da API (mantenha como está)
class AboutContentViewSet(viewsets.ModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer

# View para renderizar o frontend
def index(request):
    return render(request, 'index.html')