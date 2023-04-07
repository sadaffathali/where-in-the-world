import { mount } from "@nuxt/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  test("renders a link to home page with correct text", () => {
    const wrapper = mount(Header);
    const link = wrapper.find("a");

    expect(link.text()).toBe("Where in the world?");
    expect(link.attributes().to).toBe("/");
  });

  test("toggles dark mode when button is clicked", async () => {
    const wrapper = mount(Header);
    const button = wrapper.find("button");
    const html = document.getElementsByTagName("html")[0];

    expect(html.classes()).not.toContain("dark");

    await button.trigger("click");

    expect(html.classes()).toContain("dark");
  });
});
