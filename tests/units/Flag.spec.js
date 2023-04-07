import { shallowMount } from "@nuxt/test-utils";
import Flag from "@/components/Flag.vue";

describe("Flag", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Flag, {
      propsData: {
        src: "https://www.example.com",
        alt: "test",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
