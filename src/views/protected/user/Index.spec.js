import { mount } from '@vue/test-utils';
import Index from "./Index.vue";

describe("Index.vue", () => {
  test("setup correctly", () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('counter:0')
    wrapper.find('button').trigger('counter:1')

  });
});
