import { assert } from "chai";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";

// dummy component
import HelloWorld from "@/components/HelloWorld.vue";

// Importing Store
// Importing mock states
import mockAgendaState from "./mockAgenda";
// import mockAgendaState2 from "./mockAgenda2";
// import mockAgendaState3 from "./mockAgenda3";
import actions from "@/store/actions"; // it works like a util
import mutations from "@/store/mutations"; // it works like a util
import getters from "@/store/getters"; // it works like a util

describe("Agenda functionality", () => {
	it("Check default agenda array", () => {
		const localVue = createLocalVue();
		localVue.use(Vuex); // this could go in BEFORE || BEFORE EACH

		const store = new Vuex.Store({ // this could go into BEFORE EACH
			state: mockAgendaState,
			actions,
			mutations,
			getters,
			modules: {}
		});
		const wrapper = mount(HelloWorld, {
			store,
			localVue
		});

		assert.equal(wrapper.vm.$store.state.agendas.length, 1);
	});
});