# Generated by Django 2.0.10 on 2019-02-20 04:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0004_notification_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-created_at']},
        ),
    ]
