# meu_site_pessoal/projects/models.py
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título") # Título do projeto
    description = models.TextField(verbose_name="Descrição Detalhada") # Descrição completa
    short_description = models.CharField(max_length=500, blank=True, null=True, verbose_name="Pequena Descrição") # Breve resumo
    image = models.ImageField(upload_to='projects_images/', blank=True, null=True, verbose_name="Imagem do Projeto") # Caminho para a imagem
    link_to_repo = models.URLField(blank=True, null=True, verbose_name="Link do Repositório (Ex: GitHub)") # Link para o GitHub, por exemplo
    link_to_demo = models.URLField(blank=True, null=True, verbose_name="Link da Demonstração (Live Demo)") # Link para uma demo ao vivo
    created_at = models.DateTimeField(auto_now_add=True) # Data de criação automática
    updated_at = models.DateTimeField(auto_now=True) # Data de última atualização automática
    is_published = models.BooleanField(default=True, verbose_name="Publicar Projeto?") # Se o projeto deve aparecer no site
    order = models.IntegerField(default=0, verbose_name="Ordem de Exibição") # Para ordenar os projetos

    class Meta:
        verbose_name = "Projeto"
        verbose_name_plural = "Projetos"
        ordering = ['order', '-created_at'] # Ordenar por ordem e depois por data de criação

    def __str__(self):
        return self.title # Como o objeto será representado no painel administrativo