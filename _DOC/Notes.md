# NEST JS #


## SETUP ##
https://docs.nestjs.com/

```shell
npm i -g @nestjs/cli
nest new project-name
npm install
npm start
```


## CONTROLLERS ##
https://docs.nestjs.com/controllers

Create a CRUD:
```shell
nest g resource resource-name
```

Controller example:
```javascript
  import { Controller, Get } from '@nestjs/common';

  @Controller('cats')
  export class CatsController {
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
  }
```

