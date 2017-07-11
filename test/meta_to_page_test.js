/**
 * Test case for metaToPage.
 * Runs with mocha.
 */
'use strict'

const metaToPage = require('../lib/meta_to_page.js')
const { deepEqual } = require('assert')
const co = require('co')

describe('meta-to-page', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Meta to page', () => co(function * () {
    deepEqual(
      metaToPage({ offset: 0, limit: 25, total: 51 }),
      { size: 25, number: 1, total: 3 }
    )

    deepEqual(
      metaToPage({ offset: 26, limit: 25, total: 51 }),
      { size: 25, number: 2, total: 3 }
    )
  }))
})

/* global describe, before, after, it */
