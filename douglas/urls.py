# douglas/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from projects.views import ProjectViewSet
from core.views import AboutContentViewSet, index # <-- IMPORTE a view 'index'

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'about', AboutContentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', index, name='index'), # <-- ADICIONE ESTA LINHA
]