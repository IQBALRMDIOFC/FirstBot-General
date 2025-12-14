const fs = require('fs');
const chalk = require('chalk');

/*
[[[[[[[[[[[[[[[[[[[[[[[[•]]]]]]]]]]]]]]]]]]]]]]]]
[             [ Base BY IQBALRMDI ]             ]
[              Inspired by NazeDev              ]
[       There are many codes from NazeDev       ]
[               Thanks to NazeDev               ]
[[[[[[[[[[[[[[[[[[[[[[[[•]]]]]]]]]]]]]]]]]]]]]]]]
*/

global.owner = ['6289514307144']
global.author = 'IQBALRMDI'
global.botname = 'FirstBot-General'
global.packname = 'Bot WhatsApp'
global.listprefix = ['+','!','.']

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.tempatStore = 'baileys_store.json'
global.pairing_code = true
global.number_bot = '6285322012075'

global.my = {
	yt: null,
	gh: 'https://github.com/IQBALRMDIOFC',
	gc: 'https://chat.whatsapp.com/B5qJIwZHm4VEYZJQE6iMwy',
	ch: '120363393280930398@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
