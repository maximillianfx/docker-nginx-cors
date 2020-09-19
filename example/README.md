# Example

Here we have a simple example to demonstrate the CORS problem.

## Run

To run this example, follow these steps:

1. Access the `api` folder and run `npm install`
2. Access the `api` folder and run `npm run start`
3. Access the `webapp` folder and run `npm install`
4. Access the `webapp` folder and run `yarn start` and open browser in `localhost:3000`
5. Run the container following one of the options:
- Access the `nginx` folder and run `docker build -t cors .` and `docker run -d --name cors -p 4545:80 cors`
- Run `docker-compose up -d`

6. Open your console in browser and see the CORS problem when using the variable `URL_CORS` in the react project. This variable points directly to the API.
7. Change the url variable to `URL_NO_CORS` and the problem is solved. This variable points to the Nginx reverse proxy.

> \
> The API url inside `nginx.conf` file points to
> `host.docker.internal:3535` (the host itself)
> and it needs to be changed to the correct url
> of your API if it's running in a appropriate
> domain.
>
> If you have your API running in another container, just put it
> in the same network as the CORS container and
> change the API url in `nginx.conf` file
> to the container name like this:
>
> ```nginx
> upstream api {
>   server container_name:port;
> }
> ```
>
> &nbsp;
