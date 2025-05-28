FROM python:3.12-slim

RUN cat <<EOF > /root/go.py
import sys
import time

# Wait for the sandbox service to create its working directory.
time.sleep(5)

# The sandbox service creates and uses the working directory /var/tmp/sandbox-services/SANDBOX_SERVICE_NAME.
sys.path.append("/var/tmp/sandbox-services/task")

# The file name is always /var/tmp/sandbox-services/SANDBOX_SERVICE_NAME/SANDBOX_SERVICE_NAME.py.
# The function name is always call_SANDBOX_SERVICE_NAME. There is also an async version, call_SANDBOX_SERVICE_NAME_async.
from task import call_task

while True:
    call_task("log", message="Hello")
    time.sleep(1)
EOF

ENTRYPOINT ["python3", "/root/go.py"]
