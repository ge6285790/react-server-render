// API reference https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md

import React from 'react';
import { mount } from 'enzyme';
import Repos from '../../../../common/components/repos/Repos';
import Repo from '../../../../common/components/repos/Repo';

test('子層測試', () => {
  // const todo = { children: <Repo /> };
  const reposComponent = mount(
    <Repos children={<Repo />} />
  );
  const repos = reposComponent.find('.repos');
  const repo = reposComponent.find('.repo');
  console.log('div', repos.props());
  expect(repo.text()).toBe('Repo');
});
