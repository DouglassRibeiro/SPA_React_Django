# meu_site_pessoal/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet
from core.views import AboutContentViewSet # Supondo que você criou um para AboutContent

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'about', AboutContentViewSet) # E um para AboutContent

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), # Suas APIs estarão em /api/projects, /api/about etc.
    # Adicione aqui uma rota para sua página inicial que servirá o index.html do frontend
    # path('', sua_view_do_index_html, name='home'),
]