from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "c_insta.users"
    verbose_name = "Users"

    def ready(self):
        """Overide this to put in:
            Users system checks
            Users signal registration
        """
        
        try:
            import users.signals  # noqa F401
        except ImportError:
            pass
