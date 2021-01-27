# api-test-framework
API test framework built with Jest & SuperTest. It includes set up procedures and simple examples on how to run API tests.

## Clone this repository
```git clone git@git.athabascau.ca:6617/e2e-test-framework.git```

```cd jest-supertest```

## To run test locally:

1. install packages: ```npm install```
2. Run test: ```npm test```
3. Run single test file: ```npm test SomeTestFileToRun``` e.g: ```npm test ./__tests__/sample1.tests.jest-supertest.js```

## Generate allure report:
2. Show allure report in browser: ```npm run report```

## To run test on docker container

1. Build docker image: docker build -t jest-supertest .
2. Run test on docker container: docker run jest-supertest npm test

## To run test on CI environment

will add later
