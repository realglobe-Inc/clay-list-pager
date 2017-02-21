'use strict'

const { paginateArray } = require('clay-list-pager')

{
  let array = [ { id: 1 }, { id: 2 }, { id: 3 } ]
  let page = { number: 2, size: 2 }
  let paginated = paginateArray(array, page)

  console.log(paginated) // -> [ { id: 3 } ]
}