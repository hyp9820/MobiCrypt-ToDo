from rest_framework import viewsets, permissions
from tasks.models import Task
from .serializers import TaskSerializer

#Lead Viewset
class TaskViewSet(viewsets.ModelViewSet):
    # queryset = Task.objects.all() #Get all the Tasks creates
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
