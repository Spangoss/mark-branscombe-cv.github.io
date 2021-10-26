function resetTypeIt() {
	var typeIt = new TypeIt('#job-title', {
			lifeLike: true,
			speed: 150,
			startDelay: 900,
			breakLines: false
		})
		.type('Servicenow')
		.pause(300)
		.delete(3)
		.pause(250)
		.type('Now Developer')
		.go();
}
