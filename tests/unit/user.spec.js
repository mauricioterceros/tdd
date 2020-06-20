import { assert } from "chai";
import { shallowMount } from "@vue/test-utils";
import User from "@/components/User.vue";

describe("User CRUD", () => {
    it("Validate data shoudl not pass if no data enter", () => {
        const wrapper = shallowMount(User);

        const isValid = wrapper.vm._validateData();
        assert.isFalse(isValid);
    });

    it("Validate data shoudl pass if data enter", () => {
        const wrapper = shallowMount(User);

        wrapper.vm.$data.name = "test";
        wrapper.vm.$data.lastName = "user";
        const isValid = wrapper.vm._validateData();
        assert.isTrue(isValid);
    });
});
