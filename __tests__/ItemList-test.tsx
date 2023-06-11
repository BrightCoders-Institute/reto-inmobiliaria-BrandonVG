import React from 'react';
import {create} from 'react-test-renderer';
import JsonReader from '../src/utils/JsonReader';
import data from '../src/db/data.json';
import ItemsList from '../src/components/ItemsList';
const inmuebles = JsonReader.jsonInmueblesToArray(data);

const tree = create(<ItemsList data={inmuebles} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
