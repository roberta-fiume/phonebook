/* eslint-disable */

import SearchBox from "@/components/SearchBox.vue";
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
const localVue = createLocalVue()
localVue.use(Vuex)

describe("searchBox", () => {
  describe('Initial state', () => {

    const wrapper = shallowMount(SearchBox);

    it('should test that component exists', () => {
      expect(wrapper.exists()).toBe(true);
    })


    it('should test that input field is empty initially', () => {
      const wrapper = shallowMount(SearchBox, {
        mocks: {
          $store: {
            state: {
              searchTerm: "",
            },
          },
        },
      });
      expect(wrapper.vm.$store.state.searchTerm).toBe("");
    })
  })

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
      expect(wrapper.vm.$store.state.searchTerm).toBe("tim");
    });
  });


  describe("when content is entered into the search box", () => {

    let expectedValue = "tim";

    it("updates the state searchterm in store", () => {
      const wrapper = shallowMount(SearchBox, {
        computed: {
          searchValue: () => expectedValue
        },
        mocks: {
          $store: {
            state: {
              searchTerm: "",
              results: [],
            },

            actions: {
              updateSearchValue: jest.fn()
            }
          },
        },
      });

      var inputBox = wrapper.find("input");
    
      
      expect(inputBox.exists()).toBe(true);
      expect(wrapper.vm.$store.actions.updateSearchValue).toHaveBeenCalledTimes(1);
      expect(wrapper.vm.$store.actions.updateSearchValue).toBeCalledWith(expectedValue);

      expect(wrapper.vm.$store.state.searchTerm).toBe("tim");
 
      // wrapper.find("button").trigger("click");
      // expect(wrapper.vm.$store.actions.getResults).toHaveBeenCalled();
    });
  });
 
});
