import React from 'react';
import {create} from 'react-test-renderer';
import ImageCard from '../src/components/ImageCard';

const tree = create(
  <ImageCard
    img="https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg"
    stars="4.4"
  />,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
