export default {
	agendas: [
		{
			agendaId: "ANG-0001",
			name: "Work",
			description: "My Agenda to manage my workd",
			startHour: "10:00",
			endHour: "16:00",
			appointments: [
				// scheduledAppointments.filter(app => app.agendaId === this.agendaId)
				// concat
				// Iterate to simulate by clonning
				// recursiveAppointments.filter(app => app.agendaId === this.agendaId)
			]
		},
		// more agendas
	],
	scheduledAppointments: [],
	postponedAppointments: [],
	recursiveAppointments: [],
	participants: []
};