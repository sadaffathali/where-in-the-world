import { shallowMount } from "@nuxt/test-utils";
import SearchInput from "@/components/HomePage/Filters.vue";

describe("SearchInput", () => {
  it('emits a "search" event when the input value changes', () => {
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        input: "",
      },
    });

    const input = wrapper.find("input");
    input.setValue("Canada");

    expect(wrapper.emitted().search).toBeTruthy();
    expect(wrapper.emitted().search[0]).toEqual(["canada"]);
  });
});
