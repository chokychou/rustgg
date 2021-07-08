from django.db import models

# Create your models here.

class History(models.Model):
    id = models.BigAutoField(primary_key=True)
    steam_id = models.CharField(max_length=20, db_index=True)
    created = models.DateTimeField(auto_now=True) 
    isProduction = models.BooleanField(default=False)
    
    def __str__(self):
        return self.steam_id