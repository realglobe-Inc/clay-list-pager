/**
 * Test case for pageToOffsetLimit.
 * Runs with mocha.
 */
'use strict'

const pageToOffsetLimit = require('../lib/page_to_offset_limit.js')
const assert = require('assert')
const co = require('co')

describe('page-to-offset-limit', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Page to offset limit', () => co(function * () {
    assert.deepEqual(
      pageToOffsetLimit({ number: 1, size: 2 }),
      { offset: 0, limit: 2 }
    )

    assert.deepEqual(
      pageToOffsetLimit({ number: 3, size: 5 }),
      { offset: 10, limit: 5 }
    )
  }))
})

/* global describe, before, after, it */
