/**
 * - DATA OVERVIEW -
 * All data is managed through the context interface in MyProvider
 *
 * - The state should be populated when the main component mounts with `data.initialize()`
 *   - loading state is set to true until data returns
 *
 * - Animals will be available via context at `catToAdopt` and `dogToAdopt`
 *
 * - Animals are updated by calling `data.adoptCat()` and `data.adoptDog()`, respectively
 *
 * - Animals are retrieved by calling fetchCat and fetchDog
 *
 * - CONTEXT INTERFACE -
 * Expect cat and dog to be available via context
 *
 * context = {
 *  catToAdopt: Object | null,
 *  dogToAdopt: Object | null
 * }
 *
 * e.g. this.context.dogToAdopt =>
 * {
 *  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
 *  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
 *  name: 'Zeus',
 *  sex: 'Male',
 *  age: 3,
 *  breed: 'Golden Retriever',
 *  story: 'Owner Passed away'
 * }
 *
 */

import soFetch from "./db.fetch";
const BASE_URL = process.env.REACT_APP_DB_URL || "http://localhost:8080/api";

/**
 * Hydrates the state from the DB on mount
 * @returns {Object} with { adoptCat, adoptDog }
 * @throws on DB error
 */
const initialize = () =>
  Promise.all([fetchDog(), fetchCat()]).then(res => ({
    dogToAdopt: res[0],
    catToAdopt: res[1]
  }));

/**
 * Fetches the current dog from the database if it exists
 * @returns {Object | null}
 * @throws on DB error
 */
const fetchCat = () => soFetch(`${BASE_URL}/cat`);

/**
 * Fetches the current cat from the database if it exists
 * @returns {Object | null}
 * @throws on DB error
 */
const fetchDog = () => soFetch(`${BASE_URL}/dog`);

/**
 * Deletes the current dog from the database and fetches a new dog
 * @returns {Object | null}
 * @throws on DB error
 */
const adoptDog = () =>
  soFetch(`${BASE_URL}/dog`, { method: "DELETE" }).then(() => fetchDog());

/**
 * Deletes the current cat from the database and fetches a new cat
 * @returns {Object | null}
 * @throws on DB error
 */
const adoptCat = () =>
  soFetch(`${BASE_URL}/cat`, { method: "DELETE" }).then(() => fetchCat());

const db = {
  initialize,
  adoptDog,
  adoptCat
};

export default db;
