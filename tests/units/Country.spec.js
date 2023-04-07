import { mount } from "@nuxt/test-utils";
import CountryItem from "@/components/HomePage/Country.vue";

describe("CountryItem", () => {
  it("renders the country name", () => {
    const country = {
      name: {
        common: "Test Country",
      },
      population: 1000000,
      region: "Test Region",
      capital: ["Test Capital"],
      cca2: "TC",
      flags: {
        png: "test.png",
      },
    };
    const wrapper = mount(CountryItem, {
      propsData: { country },
    });
    expect(wrapper.html()).toContain("Test Country");
  });
});
