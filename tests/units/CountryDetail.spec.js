import { mount } from "@nuxt/test-utils";
import CountryDetail from "@/components/CountryDetail.vue";

describe("CountryDetail", () => {
  it("renders the title and detail correctly", () => {
    const title = "Test Title";
    const detail = "Test Detail";
    const wrapper = mount(CountryDetail, {
      propsData: {
        title: title,
      },
      slots: {
        default: detail,
      },
    });

    expect(wrapper.find(".title").text()).toBe(title + ":");
    expect(wrapper.find(".detail").text()).toBe(detail);
  });
});
