import { describe, test } from "vitest";
import { h } from "vue";
import { mount } from "@vue/test-utils";
import Collapse from "./Collapse.vue";
import Item from "./CollapseItem.vue";
describe("Collapse.vue", () => {
  test("basic collapse", () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ["a"],
      },
      slots: {
        default: (
          <Item name="a" title="title a">
            content a
          </Item>
        ),
      },
      global: {
        stubs: ["Icon"],
      },
    });
    console.log(wrapper.html());
  });
});
