/**
 * Convert clay collection meta object into page
 * @function metaToPage
 * @returns {Object} page object
 */
'use strict'

/** @lends metaToPage */
function metaToPage (meta = {}) {
  let {
    offset = 0,
    limit = 25,
    total
  } = meta

  return {
    size: limit,
    number: Math.floor(offset / limit) + 1,
    total: Math.ceil(total / limit)
  }
}

module.exports = metaToPage
