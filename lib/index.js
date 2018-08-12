/**
 * List pager for ClayDB
 * @module clay-list-pager
 */

'use strict'

const d = (module) => module && module.default || module

const metaToPage = d(require('./meta_to_page'))
const pageToOffsetLimit = d(require('./page_to_offset_limit'))
const paginateArray = d(require('./paginate_array'))

module.exports = {
  metaToPage,
  pageToOffsetLimit,
  paginateArray
}
