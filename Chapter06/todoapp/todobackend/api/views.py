from rest_framework import generics
from .serializers import TodoSerializer
from todo.models import Todo

class TodoList(generics.ListAPIView):
    # ListAPIView requires two mandatory attributes, serializer_class and # queryset.
    # We specify TodoSerializer which we have earlier implemented
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user        
        return Todo.objects.filter(user=user).order_by('-created')
