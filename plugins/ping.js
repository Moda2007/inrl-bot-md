const ddb = require('../lib/inrl')

ddb.bot(
	{
		pattern: 'ping ?(.*)',
		fromMe: true,
		desc: 'To check ping',
		type: 'misc',
	},
	async (sock, match) => {
		const start = new Date().getTime()
		await sock.send('```Ping!```')
		const end = new Date().getTime()
		return await sock.sendmessage(
			'*Pong!*\n ```' + (end - start) + '``` *ms*'
		)
	}
)
