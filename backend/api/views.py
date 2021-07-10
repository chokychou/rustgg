from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import HistorySerializer
from .models import History
from .toJson import *
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
    
    '''
    try: 
        queryData = json_loads_byteified(request.data['_content'])
        serializer = HistorySerializer(data=queryData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    except:
        serializer = HistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            
        return Response(request.data)
    '''
    try:
        queryData = json_load_byteified(request)
        queryData = json.loads(queryData)
    except:
        pass
        
    serializer = HistorySerializer(data=queryData)
    
    if serializer.is_valid():
        serializer.save()
        return Response(queryData, status=status.HTTP_201_CREATED)
        
    return Response(queryData, status=status.HTTP_400_BAD_REQUEST)

