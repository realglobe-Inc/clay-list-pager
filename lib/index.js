/**
 * List pager for ClayDB
 * @module clay-list-pager
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get paginateArray () { return d(require('./paginate_array')) }
}
