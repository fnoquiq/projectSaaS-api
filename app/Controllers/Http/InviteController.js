'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class InviteController {
  async store({ request, response }) {
    console.log(request.team)
  }
}

module.exports = InviteController
