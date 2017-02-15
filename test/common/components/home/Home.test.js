import React from 'react';
import { mount } from 'enzyme';
import Home from '../../../../common/components/home/Home';

test('首頁測試', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const wrapper = mount(
    <Home todo={todo} />
  );
  const div = wrapper.find('.home');
  expect(div.text()).toBe('Home');
});
