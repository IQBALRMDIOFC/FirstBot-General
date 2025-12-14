process.on("uncaughtException", console.error)
process.on("unhandledRejection", console.error)

/*
[[[[[[[[[[[[[[[[[[[[[[[[•]]]]]]]]]]]]]]]]]]]]]]]]
[             [ Base BY IQBALRMDI ]             ]
[              Inspired by NazeDev              ]
[       There are many codes from NazeDev       ]
[               Thanks to NazeDev               ]
[[[[[[[[[[[[[[[[[[[[[[[[•]]]]]]]]]]]]]]]]]]]]]]]]
*/

require("./settings");
const fs = require("fs");
const os = require("os");
const util = require("util");
const jimp = require("jimp");
const path = require("path");
const https = require("https");
const axios = require("axios");
const chalk = require("chalk");
const fetch = require("node-fetch");
const webp = require("node-webpmux");
const FileType = require("file-type");
const ffmpeg = require("fluent-ffmpeg");
const moment = require('moment-timezone');
const PhoneNum = require("awesome-phonenumber");
const { exec, spawn, execSync } = require("child_process");
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("baileys");

const { antiSpam } = require('./lib/antispam');
const { GroupUpdate, LoadDataBase } = require("./lib/message");
const { imageToWebp, videoToWebp, gifToWebp, writeExif } = require("./lib/exif");
const { cmdAdd, cmdDel, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus, getAllExpired, checkExpired } = require("./lib/database");
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, errorCache, normalize, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML, tarBackup } = require("./lib/function");

module.exports = sock = async (sock, m, msg, store) => {
	const botNumber = sock.decodeJid(sock.user.id);
	const ownerNumber = db?.set?.[botNumber]?.owner?.map(x => x.id) || owner;

	try {
	  await LoadDataBase(sock, m);
		await GroupUpdate(sock, m, store);

		const body = ((m.type === "conversation") ? m.message.conversation :
		(m.type == "imageMessage") ? m.message.imageMessage.caption :
		(m.type == "videoMessage") ? m.message.videoMessage.caption :
		(m.type == "extendedTextMessage") ? m.message.extendedTextMessage.text :
		(m.type == "reactionMessage") ? m.message.reactionMessage.text :
		(m.type == "buttonsResponseMessage") ? m.message.buttonsResponseMessage.selectedButtonId :
		(m.type == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
		(m.type == "templateButtonReplyMessage") ? m.message.templateButtonReplyMessage.selectedId :
		(m.type == "interactiveResponseMessage"  && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : "") :
		(m.type == "messageContextInfo") ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || "") :
		(m.type == "editedMessage") ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || "") :
		(m.type == "protocolMessage") ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || "") : "") || "";

		const budy = (typeof m.text == "string" ? m.text : "");
		const isCreator = isOwner = [botNumber, ...ownerNumber].filter(v => typeof v === "string").map(v => v.replace(/[^0-9]/g, "")).includes(m.sender.split("@")[0]);
		const cases = db.cases ? db.cases : (db.cases = [...fs.readFileSync(__filename, 'utf-8').matchAll(/case\s+['"]([^'"]+)['"]/g)].map(match => match[1]));
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const author = db?.set?.[botNumber]?.author || 'IQBALRMDI';
		const packname = db?.set?.[botNumber]?.packname || 'Bot WhatsApp';
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const time_now = new Date()
		const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
		const set = db.set[botNumber]
		
		// Auto Set Bio
		if (set.autobio) {
			if (new Date() * 1 - set.status > 60000) {
				await sock.updateProfileStatus(`${sock.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`).catch(e => {})
				set.status = new Date() * 1
			}
		}
		
		// Set Mode
		if (!isCreator) {
			if ((set.grouponly === set.privateonly)) {
				if (!sock.public && !m.key.fromMe) return
			} else if (set.grouponly) {
				if (!m.isGroup) return
			} else if (set.privateonly) {
				if (m.isGroup) return
			}
		}

		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			if ((set.autoread && sock.public) || isCreator) {
				sock.readMessages([m.key]);
				console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type), chalk.bgHex('#AF26EB')(m.key.id) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			}
		}

    // Mengetik & Anti Spam & Hit
		if (sock.public && isCmd) {
			if (set.autotyping) {
				await sock.sendPresenceUpdate('composing', m.chat)
			}
			if (cases.includes(command)) {
				cmdAdd(db.hit);
				cmdAddHit(db.hit, command);
			}
			if (set.antispam && antiSpam.isFiltered(m.sender)) {
				console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
				return m.reply('「 ❗ 」Beri Jeda 5 Detik Per Command Kak')
			}
		}
		if (isCmd && !isCreator) antiSpam.addFilter(m.sender)

    let fileSha256;
		if (m.isMedia && m.msg.fileSha256 && db.cmd && (m.msg.fileSha256.toString('base64') in db.cmd)) {
			let hash = db.cmd[m.msg.fileSha256.toString('base64')]
			fileSha256 = hash.text
		}

    async function sendMessButton(text, buttons = []) {
      const useButton = set.button === true && Array.isArray(buttons) && buttons.length > 0
    
      const baseMessage = {
        document: fs.readFileSync("./package.json"),
        fileName: ucapanWaktu,
        fileLength: 99999999999999,
        pageCount: 99999999999999,
        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        caption: text,
        footer: "© By IQBALRMDI",
        mentions: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
        contextInfo: {
          forwardingScore: 10,
          isForwarded: true,
          externalAdReply: {
            title: `© IQBALRMDI`,
            body: global.botname,
            thumbnailUrl: "https://files.catbox.moe/nkz432.jpg",
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true,
            showAdAttribution: false
          }
        }
      }
    
      // kalau TIDAK pakai button → tambahin saluran
      if (!useButton) {
        baseMessage.contextInfo.forwardedNewsletterMessageInfo = {
          newsletterJid: my.ch,
          serverMessageId: null,
          newsletterName: 'Join For More Info'
        }
      }
    
      if (useButton) {
        return sock.sendButtonMsg(
          m.chat,
          { ...baseMessage, buttons },
          { quoted: m }
        )
      } else {
        return sock.sendMessage(
          m.chat,
          baseMessage,
          { quoted: m }
        )
      }
    }

    switch(fileSha256 || command) {
      case "menu": {
        await sendMessButton(`Selamat datang Kak @${m.sender.split("@")[0]} di base IQBALRMDI ini adalah menu\n- allmenu\n- botmenu\n- groupmenu\n- downloadmenu\n\nTerima kasih untuk @${"0@s.whatsapp.net".split("@")[0]}`, [{
    				buttonId: `${prefix}allmenu`,
    				buttonText: { displayText: 'All Menu' },
    				type: 1
    			},{
    				buttonId: `${prefix}sc`,
    				buttonText: { displayText: 'SC' },
    				type: 1
    			}, {
    				buttonId: 'list_button',
    				buttonText: { displayText: 'list' },
    				nativeFlowInfo: {
    					name: 'single_select',
    					paramsJson: JSON.stringify({
    						title: 'List Menu',
    						sections: [{
    							title: 'List Menu',
    							rows: [{
    								title: 'All Menu',
    								id: `${prefix}allmenu`
    							},{
    								title: 'Bot Menu',
    								id: `${prefix}botmenu`
    							},{
    								title: 'Group Menu',
    								id: `${prefix}groupmenu`
    							},{
    							  title: 'Downloader Menu',
    							  id: `${prefix}downloadmenu`
    							}]
    						}]
    					})
    				},
    				type: 2
    			}]
    		);
      }
      break
      
      case "allmenu": {
        await sendMessButton(`Tambahin sendiri yaa`);
      }
      break
      
      case "botmenu": {
        await sendMessButton(`Tambahin sendiri yaa`);
      }
      break
      
      case "groupmenu": {
        await sendMessButton(`Tambahin sendiri yaa`);
      }
      break
      
      case "downloadmenu": {
        await sendMessButton(`Tambahin sendiri yaa`);
      }
      break
      
      case 'runtime': case 'tes': case 'bot': {
				switch(args[0]) {
					case 'mode': case 'public': case 'self':
					if (!isCreator) return m.reply(mess.owner)
					if (args[1] == 'public' || args[1] == 'all') {
						if (sock.public && set.grouponly && set.privateonly) return m.reply('*Sudah Aktif Sebelumnya*')
						sock.public = set.public = true
						set.grouponly = true
						set.privateonly = true
						m.reply('*Sukse Change To Public Usage*')
					} else if (args[1] == 'self') {
						set.grouponly = false
						set.privateonly = false
						sock.public = set.public = false
						m.reply('*Sukse Change To Self Usage*')
					} else if (args[1] == 'group') {
						set.grouponly = true
						set.privateonly = false
						m.reply('*Sukse Change To Group Only*')
					} else if (args[1] == 'private') {
						set.grouponly = false
						set.privateonly = true
						m.reply('*Sukse Change To Private Only*')
					} else m.reply('Mode self/public/group/private/all')
					break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam': case 'button':
					if (!isCreator) return m.reply(mess.owner)
					if (args[1] == 'on') {
						if (set[args[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[args[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (args[1] == 'off') {
						set[args[0]] = false
						m.reply('*Sukse Change To Off*')
					} else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
            let list
            if (key === 'status') {
              list = new Date(value).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })
            } 
            else if (key === 'owner' && Array.isArray(value)) {
              list = value.map(v => {
                let lock = v.lock ? '🔒' : '🔓'
                return `@${v.id} ${lock}`
              }).join(', ')
            } 
            else if (typeof value === 'boolean') {
              list = value ? 'on🟢' : 'off🔴'
            } 
            else {
              list = value
            }
            return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`
          }).join('\n')
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}\n\nExample: ${prefix + command} mode`);
					break
					default:
					if (args[0] || args[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*\n- Button Message : *${prefix + command} button on/off*`)
				}
				if (!args[0] && !args[1]) return m.reply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`)
			}
			break
      
      default:
    }

	} catch (e) {
		console.log(e);
		if (e?.message?.includes('No sessions')) return;
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		m.reply('Error: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'Tidak diketahui') + '\nLog Error Telah dikirim ke Owner\n\n')
		return sock.sendFromOwner(ownerNumber, `Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});