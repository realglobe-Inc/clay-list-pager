/**
 * Paginate array with paging condition
 * @function paginateArray
 * @param {Object[]} array - Array to paginate
 * @param {Object} page - Paging object
 * @param {number} [page.number=1] - Number of page, starting with 1
 * @param {number} [page.size=DEFAULT_PAGE_SIZE] - Size of each pages
 * @returns {Object[]} Paginated array
 */
'use strict'

const pageToOffsetLimit = require('./page_to_offset_limit')

/** @lends paginateArray */
function paginateArray (array, page) {
  if (typeof page === 'number') {
    page = { number: page }
  }

  let { offset, limit } = pageToOffsetLimit(page)
  return array.slice(offset, offset + limit)
}

Object.assign(paginateArray, {
  pageToOffsetLimit
})

module.exports = paginateArray
