# meu_site_pessoal/core/views.py
from rest_framework import viewsets
from .models import AboutContent # Importe o modelo correto
from .serializers import AboutContentSerializer # Importe o serializer correto

class AboutContentViewSet(viewsets.ModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer