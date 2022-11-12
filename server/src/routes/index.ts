import { Express } from 'express';
import { homePage } from '../functions'

module.exports = function(app: Express) {
    app.get('/', homePage)
}