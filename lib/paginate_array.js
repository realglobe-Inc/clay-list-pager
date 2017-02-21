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

const DEFAULT_PAGE_SIZE = 100

/** @lends paginateArray */
function paginateArray (array, page) {
  if (typeof page === 'number') {
    page = { number: page }
  }
  let {
    number: pageNumber = 1,
    size: pageSize = DEFAULT_PAGE_SIZE
  } = page
  if (pageNumber < 1) {
    throw new Error('Page number stars with 1')
  }
  return array.slice(pageSize * (pageNumber - 1), pageSize * pageNumber)
}

Object.assign(paginateArray, { DEFAULT_PAGE_SIZE })

module.exports = paginateArray
