/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer, { create } from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// This is a comment regarding possible the failing states the App can go through:
// 1.One Of The Players won
// 2.Players Drew the game
// 3. Trying to click on an already clicked Tile
// 3. Reset Game not reseting App to the initial State
// 4. Is every turn returned correctly so there are no keen turns with the same string ?

const tree = create(<App/>)

test('snapshot',()=>{
  expect(tree).toMatchSnapshot()
})