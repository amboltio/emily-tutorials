import http.server
import socketserver
import os


PORT = int(os.environ.get('CONTAINER_PORT'))

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
