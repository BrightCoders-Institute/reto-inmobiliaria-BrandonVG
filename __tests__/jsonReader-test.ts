import JsonReader from '../src/utils/JsonReader';
import data from '../src/db/data.json';

describe('Test for json reader', () => {
  test('array data should have 10 items', () => {
    const array = JsonReader.jsonInmueblesToArray(data);
    expect(array.length).toBe(10);
  });

  test('Should return The Willows as the name of the first item', () => {
    const array = JsonReader.jsonInmueblesToArray(data);
    expect(array[0].name).toBe('The Willows');
  });
});
