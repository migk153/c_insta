from django.urls import path
from . import views

app_name = "users"
urlpatterns = [
    path("all/", view=views.ListAllImages.as_view(), name="all_images"),
]
