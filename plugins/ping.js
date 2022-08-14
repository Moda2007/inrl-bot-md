const ddb = require('../lib/inrl')

ddb.bot(
	{
		pattern: 'ping ?(.*)',
		fromMe: true,
		desc: 'To check ping',
		type: 'misc',
	},
	async (abu, match) => {
		const start = new Date().getTime()
		await abu.send('```Ping!```')
		const end = new Date().getTime()
		return await abu.sendmessage(
			'*Pong!*\n ```' + (end - start) + '``` *ms*'
		)
	}
)
