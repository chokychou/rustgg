from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import HistorySerializer
from .models import History
import json
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'History': '/purchase-history/',
        'Create': '/update-new-purchase/',
    }
    return Response(api_urls)


@api_view(['GET'])
def puchaseHistory(request):
    history = History.objects.all()
    serializer = HistorySerializer(history, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def updateNewPurchase(request):
    if type(request.data) is str:
        queryData = json.loads(request.data)
        serializer = HistorySerializer(data=queryData)
        if serializer.is_valid():
            serializer.save()
            return Response(queryData,status=status.HTTP_201_CREATED)
            
        return Response(queryData,status=status.HTTP_400_BAD_REQUEST)

        
    else:
        queryData=request.data
        serializer = HistorySerializer(data=queryData)

        if serializer.is_valid():
            serializer.save()
            return Response(queryData,status=status.HTTP_201_CREATED)
            
        return Response(queryData,status=status.HTTP_400_BAD_REQUEST)

