# Example

Here we have a simple example to demonstrate the CORS problem.

## Run

To run this example, follow these steps:

1. Access the `api` folder and run `npm install`
2. Access the `webapp` folder and run `npm install`
3. Access the `nginx` folder and run `docker build -t cors .`
4. Inside `nginx` folder, run `docker run -d --name cors -p 4545:80 cors`
5. Access the `webapp` folder and run `yarn start` and open browser in `localhost:3000`
6. Open your console in browser and see the CORS problem when using the variable `URL_CORS` in the react project. This variable points directly to the API.
7. Change the url variable to `URL_NO_CORS` and the problem is solved. This variable points to the Nginx reverse proxy.

> \
> The API url inside `nginx.conf` file points to
> `host.docker.internal:3535`, that is, the host
> itself and needs to be changed to the correct url
> of your API if your API is running in a appropriate
> domain.
>
> If your API is running in other container, just put
> your API container and the CORS container in the
> same network and change the API url in `nginx.conf`
> to the container name like:
>
> ```nginx
> upstream api {
>   server container_name:port;
> }
> ```
>
> &nbsp;
