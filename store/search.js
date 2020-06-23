export const state = () => ({
  results: {
    "took": 3,
    "timed_out": false,
    "_shards": {
      "total": 1,
      "successful": 1,
      "skipped": 0,
      "failed": 0
    },
    "hits": {
      "total": {
        "value": 0,
        "relation": "eq"
      },
      "max_score": 4.4679523,
      "hits": []
    }
  }
})

export const mutations = {
  setResults (state, results) {
    state.results = results
  }
}
