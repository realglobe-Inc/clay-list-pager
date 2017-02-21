/**
 * Test case for paginateArray.
 * Runs with mocha.
 */
'use strict'

const paginateArray = require('../lib/paginate_array.js')
const assert = require('assert')
const co = require('co')

describe('paginate-array', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Paginate array', () => co(function * () {
    assert.deepEqual(
      paginateArray([ { id: 1 }, { id: 2 }, { id: 3 } ], { number: 1, size: 2 }),
      [ { id: 1 }, { id: 2 } ]
    )

    assert.deepEqual(
      paginateArray([ { id: 1 }, { id: 2 }, { id: 3 } ], { number: 1, size: 5 }),
      [ { id: 1 }, { id: 2 }, { id: 3 } ]
    )

    assert.deepEqual(
      paginateArray([ { id: 1 }, { id: 2 }, { id: 3 } ], { number: 2, size: 2 }),
      [ { id: 3 } ]
    )

  }))

})

/* global describe, before, after, it */
