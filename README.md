# Docker Nginx CORS

A docker container running a Nginx reverse proxy to solve the CORS problem with local development.

## Problem

When we are developing a frontend system that consumes an API, the access to that API via terminal or, e.g. Postman, looks great, but when we go to the browser (Chrome, Firefox, etc) we can face a problem with CORS. CORS (Cross-origin resource sharing) is a security technology implemented by browsers that defines ways to consume resources from servers in different domains. If the consumed resource (server) doesn't allow this consumption by a client in other domain, the problem is poped up at broser.

```
Access to XMLHttpRequest at 'domain' from origin 'other domain' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin'
header is present on the requested resource.
```

This error shows to user that the server don't allow the resouce consumption from a different domain.

## Solution

We have a 'simple' solution to this problem: enable CORS directly in your app (Node, Golang, Python, .NET Core, etc). This is not so 'simple', because needs an action from the backend developer, in most cases, develop this change, commit, pass in the CI/CD builds, publish, and all this pipeline could be much long.

So, the solution proposed here, is to run a docker container with Nginx server like a reverse proxy. Run the following steps:

1. Change the API url inside the `nginx.conf`
2. `docker build -t cors .`
3. `docker run -d --name cors -p your_port:80 cors`

When we call our API, instead of using the API url, we will use the container url to consume the services. The trick here, is that the Nginx reverse proxy adds the correct header to indicate to browser that the server allows the request.

