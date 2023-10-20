# http-server

## start

```
npm start
```

## container

```
docker build . -t local/http-server
docker run --name http-server --restart always -p 3000:3000 -d local/http-server
```
