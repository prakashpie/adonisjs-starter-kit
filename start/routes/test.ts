import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TestsController.index')

Route.get('/json', 'TestsController.json')

Route.post('/upload', 'TestsController.upload')
