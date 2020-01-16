const models = require('../models');

const TweetController = {
	show: (req, res) => {
		models
			.Tweet
			.findByPk(req.params.id)
			.then(data => {
				if (!data) {
					return res.send({});
				}

				return res.send(data);
			});
	},
	index: (req, res) => {
		models
			.Tweet
			.findAll()
			.then(data => res.send(data));

	},
	create: (req, res) => {
		const body = req.body;
		models
			.Tweet
			.create({
				name: body.name,
				content: body.content,
			})
			.then(repo => {
				return res.send(repo);
			});
	},
	update: (req, res) => {
		const body = req.body;
		const id = req.params.id;
		models
			.Tweet
			.update(body, { where: { id: id }})
			.then(updated => {
				models
					.Tweet
					.findByPk(id)
					.then(data => res.send(data));
			});
	},
	delete: (req, res) => {
		const id = req.params.id;
		models
			.Tweet
			.destroy({
				where: {
					id: id,
				}
			})
			.then(data => {
				return res.send(true);
			})
	},
};

module.exports = TweetController;