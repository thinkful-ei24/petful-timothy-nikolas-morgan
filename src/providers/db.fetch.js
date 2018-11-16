const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has("content-type") &&
      res.headers.get("content-type").startsWith("application/json")
    ) {
      // It's a nice JSON error returned to us, so decode it
      return res.json().then(err => Promise.reject(err));
    }
    // It's a less informative error, so just parse the status code
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res.json();
};

/**
 * Stop trying to make `fetch` happen, W3C; it's not going to happen.
 * @param {String} path
 * @param {Object} [fetchOpts={ method: 'get' }]
 * @param {Object} [params=null]
 */
export default function soFetch(
  path,
  fetchOpts = { method: "get" },
  params = null
) {
  const url = new URL(path);
  if (params !== null)
    Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return fetch(url, fetchOpts).then(normalizeResponseErrors);
}
