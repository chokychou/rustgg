from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import HistorySerializer
from .models import History

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'History': '/purchase-history/',
        'Create': '/update-new-puchase/',
    }
    return Response(api_urls)


@api_view(['GET'])
def puchaseHistory(request):
    history = History.objects.all()
    serializer = HistorySerializer(history, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def updateNewPurchase(request):
    serializer = HistorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)