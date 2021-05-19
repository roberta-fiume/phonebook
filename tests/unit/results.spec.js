import { shallowMount } from "@vue/test-utils";
import Results from "@/components/Results.vue";

describe("results", () => {
  describe("when no search has been made", () => {
    it("does not show any results or messages", () => {
      const wrapper = shallowMount(Results, {
        stubs: ["router-link"],
        mocks: {
          $store: {
            state: {
              searchTerm: "",
              results: [],
            },
          },
        },
      });
      expect(wrapper.find(".results").exists()).toBe(false);
    });
  });

  describe("when a matching search has been made", () => {
    it("shows results", () => {
      const wrapper = shallowMount(Results, {
        stubs: ["router-link"],
        mocks: {
          $store: {
            state: {
              searchTerm: "tim",
              results: [
                {
                  name: "Sue Perkins",
                  phone: "01234567893",
                },
                {
                  name: "Tim Cook",
                  phone: "01234567894",
                },
              ],
            },
          },
        },
      });
      expect(wrapper.find(".results").exists()).toBe(true);
      var results = wrapper.findAll("li");
      expect(results.length).toBe(2);
      expect(results.at(0).text()).toBe("Sue Perkins");
    });
  });
});
