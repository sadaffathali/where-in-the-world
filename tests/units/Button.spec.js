import { shallowMount } from "@nuxt/test-utils";
import Button from "@/components/Button.vue";

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        link: "https://www.example.com",
        size: "big",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
