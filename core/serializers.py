# meu_site_pessoal/core/serializers.py
from rest_framework import serializers
from .models import AboutContent # Importe o modelo correto para o app 'core'

class AboutContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContent
        fields = '__all__'