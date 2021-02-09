# Adonisjs Starter Kit Typescript (API Only)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# copy .env.example
$ cp .env.example .env

# serve with hot reload at localhost:3000 (or port provided in .env)
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

A test.ts file is created in routes in order to test the simple router
```js #start/routes/test.ts
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TestsController.index')

Route.get('/json', 'TestsController.json')

Route.post('/upload', 'TestsController.upload')
```

Feel free to modify and add other routes.

Let me know if you find any issue or want a tutorial video on the same. Happy Coding!
