# BooksManager

To run it as an Spring boot application:

```
gradle bootRun
```

## Endpoints

|Action| Method| URL |
|---| --- |---|
|Create| GET   |   http://localhost:8090/books |
|Update| POST  |   http://localhost:8090/books |
|Find by Id| GET   |   http://localhost:8090/books/id=1    |    


## POST body


To create a book the body is:
``` json
{
 "isbn":"12345",
 "name":"El codigo da vinci"
}
```

## Lombok configuration


First: download the plugin
https://projectlombok.org/setup/intellij

Second:

Settings->Build, Execution, Deployment->Compiler->Annotation Processors->Enable

## Docker


to generate the docker image:
```
./gradlew buildDocker
```
To find the generated image id: 
```
docker images
```
To run the docker image:
```
docker run 80825c12837e 
```
where is the generated image id 

To run the PostgreSQL docker:
```
docker run postgres
```

To run everything connected:
```
docker-compose up
```

To remove the previous compose and start from scratch:
```
docker-compose rm
```


