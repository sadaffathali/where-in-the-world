import { mount } from "@nuxt/test-utils";
import ModeToggle from "@/components/ModeToggle.vue";

describe("ModeToggle.vue", () => {
  it("renders the component with the default mode set to true", () => {
    const wrapper = mount(ModeToggle);
    expect(wrapper.vm.theme).toBe(true);
  });

  it("toggles the theme data property and adds/removes the dark class on click", async () => {
    const wrapper = mount(ModeToggle);
    const html = document.getElementsByTagName("html")[0];

    // check initial state
    expect(wrapper.vm.theme).toBe(true);
    expect(html.classList).toContain("dark");

    // simulate click event and wait for next tick
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();

    // check updated state
    expect(wrapper.vm.theme).toBe(false);
    expect(html.classList).not.toContain("dark");

    // simulate another click event and wait for next tick
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();

    // check final state
    expect(wrapper.vm.theme).toBe(true);
    expect(html.classList).toContain("dark");
  });
});
