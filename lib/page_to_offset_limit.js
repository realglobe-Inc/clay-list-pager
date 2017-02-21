/**
 * Convert page into offset/limit
 * @function pageToOffsetLimit
 * @param {Object} page - Paging object
 * @param {number} [page.number=1] - Number of page, starting with 1
 * @param {number} [page.size=DEFAULT_PAGE_SIZE] - Size of each pages
 * @returns {Object} Offset and limit
 */
'use strict'

const DEFAULT_PAGE_SIZE = 100

/** @lends pageToOffsetLimit */
function pageToOffsetLimit (page) {
  let {
    number: pageNumber = 1,
    size: pageSize = DEFAULT_PAGE_SIZE
  } = page

  if (pageNumber < 1) {
    throw new Error('Page number stars with 1')
  }
  return {
    offset: (pageNumber - 1) * pageSize,
    limit: pageSize
  }
}

module.exports = pageToOffsetLimit
