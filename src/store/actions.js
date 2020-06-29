"use strict";

const addAgenda = ({ commit }, agenda) => {
    commit('addAgenda', agenda);
};

const addAppointment = () => {
    console.log("added");
};

export default {
    addAgenda,
    addAppointment
};