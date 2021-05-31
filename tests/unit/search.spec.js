/* eslint-disable */
import { shallowMount } from "@vue/test-utils";
import Search from "@/views/Search.vue";
import getResults from "../../src/api/getResults";


describe("searchBox", () => {
  beforeEach(() => {
    getResults.mockClear();
    getResults.mockReturnValue([
      {
        name: "George Michael",
        phone: "0777777771",
      },
    ]);
  });



  it("It updates term and results if a search term is in the route", () => {
    const $route = {
      path: "/search",
      params: { term: "a" },
    };

    const wrapper = shallowMount(Search, {
      mocks: {
        $route,
        $store: {
          state: {
            searchTerm: "",
            results: [],
          },
        },
      },
    });

    expect(wrapper.vm.$store.state.searchTerm).toBe("a");
    expect(wrapper.vm.$store.state.results).toStrictEqual([
      {
        name: "George Michael",
        phone: "0777777771",
      },
    ]);
  });

  it("It keeps term and results empty if a search term is not in the route", () => {
    const $route = {
      path: "/",
    };

    const wrapper = shallowMount(Search, {
      mocks: {
        $route,
        $store: {
          state: {
            searchTerm: "",
            results: [],
          },
        },
      },
    });

    expect(wrapper.vm.$store.state.searchTerm).toBe("");
    expect(wrapper.vm.$store.state.results).toStrictEqual([]);
  });

    
  describe('should display spinner when results are loading', () => {
        const wrapper = shallowMount(Search, {
          mocks: {
            $store: {
              state: {
                searchTerm: "",
                loading: false,
              },

              actions: {
                getResults: jest.fn()
              }
            },
          },
        });

        it('should display a spinner when loading the results', async() => {
            //GIVEN
            let spinner = wrapper.findAll('.image');
            expect(spinner.exists()).toBe(false);
        
            //WHEN
            wrapper.find('button').trigger('click');
      
          
            await Vue.nextTick();
            expect(wrapper.vm.$store.actions.getResults).toHaveBeenCalledTimes(1);
      
            let spinnerImage = wrapper.findAll('.image');
            expect(spinnerImage.exists()).toBe(true);
        })
    })            
});
