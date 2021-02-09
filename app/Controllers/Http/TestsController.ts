import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

const fs = require('fs')

export default class TestsController {
  public async index () {
    return [{ id: 1, username: 'virk' }]
  }

  public async upload ({request} : HttpContextContract) {
    const avatar = request.file('avatar')
    if (!avatar) {
      return {
        message: 'Please upload file',
        success: false
      }
    }

    await avatar.move(Application.tmpPath('uploads'))

    return {
      message: 'File uploaded successfully',
      success: true
    }
  }

  public async json () {
    let rawData = fs.readFileSync(`${Application.tmpPath('request')}/user.json`);
    return JSON.parse(rawData)
  }
}
