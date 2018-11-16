const normalizeResponseErrors = res => {
  if (!res.ok) return null;

  if (
    res.headers.has("content-type") &&
    res.headers.get("content-type").startsWith("application/json")
  ) {
    return res.json();
  }
  return res;
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
