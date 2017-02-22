/**
 * List pager for ClayDB
 * @module clay-list-pager
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get pageToOffsetLimit () { return d(require('./page_to_offset_limit')) },
  get paginateArray () { return d(require('./paginate_array')) }
}
