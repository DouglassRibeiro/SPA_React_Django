# meu_site_pessoal/core/admin.py
from django.contrib import admin
from .models import AboutContent # Importe o modelo AboutContent

# Registre o modelo AboutContent no painel administrativo
admin.site.register(AboutContent)