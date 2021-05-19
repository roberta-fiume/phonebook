import { shallowMount } from "@vue/test-utils";
import ContactDetails from "@/components/ContactDetails.vue";

describe("contactDetails", () => {
  it("displays contact name and number", () => {
    const wrapper = shallowMount(ContactDetails, {
      stubs: ["router-link"],
      propsData: {
        contactName: "John Smith",
        contactNumber: "987654321",
      },
    });
    var descriptions = wrapper.findAll("dd");
    expect(descriptions.at(0).text()).toBe("John Smith");
    expect(descriptions.at(1).text()).toBe("987654321");
  });
});
