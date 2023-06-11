import React from 'react';
import {create, act} from 'react-test-renderer';
import ItemCard from '../src/components/ItemCard';
import JsonReader from '../src/utils/JsonReader';
import data from '../src/db/data.json';
const inmuebles = JsonReader.jsonInmueblesToArray(data);

const tree = create(<ItemCard inmueble={inmuebles[0]} />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('Like button pressed', () => {
  const likeButton = tree.root.findByProps({testID: 'likeButton'}).props;
  act(() => likeButton.onPress());
  const iconLike = tree.root.findByProps({testID: 'iconLike'}).props;
  expect(iconLike.color).toBe('red');
});
