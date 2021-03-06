const flatten = require('callbag-flatten')
const map = require('callbag-map')
const forEach = require('callbag-for-each')
const share = require('callbag-share')
const fromObservable  = require('callbag-from-obs')
const fromIterable = require('callbag-from-iter')
const fromEvent = require('callbag-from-event')
const fromPromise = require('callbag-from-promise')

module.exports = {
  // Create
  // TODO: Make sure everything is multicast
  fromObservable,
  fromIterable,
  fromEvent,
  fromPromise,
  // fromAsync: fromPromise,

  // Side Effects
  sideEffect: require('callbag-for-each'),
  log: (res) => forEach(((...args) => console.log(...args)))(res),

  // Transform Data
  map: map,
  accumulate: require('callbag-scan'),
  scan: () => {
    throw new Error('If you meant `scan` in the Reactive Stream sense, Please use `accumulate` instead.')
  },
  flatten: require('callbag-flatten'),

  // Filters
  take: require('callbag-take'),
  skip: require('callbag-skip'),
  filter: require('callbag-filter'),

  // Combiners
  // switchTo: res => map(() => res),
  merge: require('callbag-merge'),
  concat: require('callbag-concat'),
  combine: require('callbag-combine')
}

