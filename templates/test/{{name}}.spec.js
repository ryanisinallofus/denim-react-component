import React from 'react';
import { shallow } from 'enzyme';
import <%= Name %> from '../../<%= name %>';

describe('<<%= Name %> />', () => {
  it('renders <<%= Name %> /> components', () => {
    const wrapper = shallow(<<%= Name %> />);
    expect(wrapper.find(<%= Name %>)).exist();
  });
});
