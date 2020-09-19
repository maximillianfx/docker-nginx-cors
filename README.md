# Docker Nginx CORS

A docker container running a Nginx reverse proxy to solve CORS problems on local development.

## Problem

When we are developing a frontend system that consumes an API, the access to that API via cURL or tools like Postman looks great, but when we go to the browser (Chrome, Firefox, etc) we can face CORS-related errors. CORS (Cross-origin resource sharing) is a security technology implemented by browsers that defines ways to consume resources from servers in different domains. If the resource server doesn't allow this consumption by a client in other domain, the following error pops up in your browser:

```
Access to XMLHttpRequest at 'domain' from origin 'other domain' has been blocked by CORS policy:
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin'
header is present on the requested resource.
```

This error shows to user that the server don't allow the resouce consumption from a different domain.

## Solution

We already have a 'simple' solution to this problem: enabling CORS directly in your app (Node, Golang, Python, .NET Core, etc). However, this strategy is not so 'simple', because it needs an action from the backend developer to manually change the source code and go through all the steps of your pipeline (commit, CI/CD builds, publishing and others) which can take a long time.

The proposed solution here is to run a docker container with Nginx server acting as reverse proxy. To do so, run the following steps:

1. Change the API url inside the `nginx.conf` file
2. Run the container following one of the options:
- `docker build -t cors .` and `docker run -d --name cors -p your_port:80 cors`
- `docker-compose up -d` (update the correct port mapping inside docker-compose.yml)

When we call our API, instead of using the API url, we will use the container url to consume the services. The trick here is that the Nginx reverse proxy adds the correct header to indicate to your browser that the server allows the request.

