import { shallowMount } from "@vue/test-utils";
import SearchBox from "@/components/SearchBox.vue";
import getResults from "../../src/api/getResults";
jest.mock("../../src/api/getResults");

describe("searchBox", () => {
  beforeEach(() => {
    getResults.mockClear();
  });

  describe("when a search term is provided", () => {
    it("prefills the search box with the search term", () => {
      const wrapper = shallowMount(SearchBox, {
        mocks: {
          $store: {
            state: {
              searchTerm: "tim",
            },
          },
        },
      });
      expect(wrapper.find("input").element.placeholder).toBe(
        "Search for contacts"
      );
      expect(wrapper.find("input").element.value).toBe("tim");
    });
  });
  describe("when content is entered into the search box", () => {
    it("updates the store search term and results", () => {
      const wrapper = shallowMount(SearchBox, {
        mocks: {
          $store: {
            state: {
              searchTerm: "",
              results: [],
            },
          },
        },
      });
      var inputBox = wrapper.find("input");

      inputBox.setValue("tim");
      expect(wrapper.vm.$store.state.searchTerm).toBe("tim");

      wrapper.find("button").trigger("click");
      expect(getResults).toBeCalledWith("tim");
    });
  });
});
