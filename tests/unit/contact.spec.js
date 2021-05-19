import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact.vue";
import ContactDetails from "@/components/ContactDetails.vue";
import getResults from "../../src/api/getResults";
jest.mock("../../src/api/getResults");

describe("contactDetails", () => {
  beforeEach(() => {
    getResults.mockClear();
    getResults.mockReturnValue([
      {
        name: "George Michael",
        phone: "0777777771",
      },
    ]);
  });

  it("displays contact name and number", () => {
    const $route = {
      path: "/contact",
      params: { contactName: "George Michael" },
    };

    const wrapper = shallowMount(Contact, {
      mocks: {
        $route,
      },
    });

    expect(getResults).toBeCalledWith("George Michael");
    expect(wrapper.findComponent(ContactDetails).exists()).toBeTruthy();
    expect(wrapper.findComponent(ContactDetails).props("contactName")).toBe(
      "George Michael"
    );
    expect(wrapper.findComponent(ContactDetails).props("contactNumber")).toBe(
      "0777777771"
    );
  });
});
