// GET /api/cat
/* 
{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}
*/

// catToAdopt context
// dogToAdopt context
// onAdoptPet() - onClick handler of the button within the Pet
// fetchCat()
// fetchDog()

// GET /api/dog

/**
 * - DATA OVERVIEW -
 * All data is managed through the exported `data` interface
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
 *
 */

const data = {
  initialize: 1,
  adoptDog: 2,
  adoptCat: 3
};

export default data;
