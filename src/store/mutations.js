"use strict";

const addAgenda = (state, agenda) => {
	// if you see
	// this.state >>> WRONG >>> please remove and replace only by param state
	console.log("added");
	state.agendas.push(agenda);
};

const addAppointment = () => {
	console.log("added");
};

export default {
	addAgenda,
	addAppointment
};