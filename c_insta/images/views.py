# from django.shortcuts import render       We use render when we want to use templates.
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers


# Create your views here.

class ListAllImages(APIView):

    def get(self, request, format=None):  # it will only be called when there is a get call over http.

        all_images = models.Image.objects.all()

        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)