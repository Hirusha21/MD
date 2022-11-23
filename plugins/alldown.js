import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗]`
try {
let res = text
let bet = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=eafcf901640d1c599ae71519&query=${text}`)
let chat = global.db.data.chats[m.chat]
let bang = m.key.id
if (command == 'hiru.2') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = res
conn.sendFile(m.chat, json, 'hirusha.mp3', `*𝐅𝐫𝐨𝐦 𝐇𝐢𝐫𝐮𝐬𝐡𝐚*`, false, { mimetype: 'audio/mp4' })}
if (command == 'hiru.1') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = res
conn.sendFile(m.chat, json, 'hirusha.mp4', `*𝐅𝐫𝐨𝐦 𝐇𝐢𝐫𝐮𝐬𝐡𝐚*`)}
if (command == 'hiru.3') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = res
conn.sendFile(m.chat, json, `𝔽𝕚𝕝𝕖 𝔽𝕣𝕠𝕞 ℍ𝕚𝕣𝕦𝕤𝕙𝕒`)}
if (command == 'a') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = await bet.json()
conn.sendFile(m.chat, json.result.video, 'hirusha.mp4', json.result.title + ` | #𝐇𝐢𝐫𝐮𝐬𝐡𝐚`)}
if (command == 'b') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = await bet.json()
conn.sendFile(m.chat, json.result.video, 'hirusha.mp4')}
if (command == 'hiru.5') {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: bang}})
let json = await bet.json()
conn.sendFile(m.chat, json.result.audio, 'hirusha.mp3', `*𝐅𝐫𝐨𝐦 𝐇𝐢𝐫𝐮𝐬𝐡𝐚*`, false, { mimetype: 'audio/mp4' })}
} catch (e) {
m('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁')
}}
handler.help = ['hiru.2' , 'hiru.1' , 'hiru.3' , 'a' , 'b' , 'hiru.5'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['hiru.2', 'hiru.1' , 'hiru.3' , 'a' , 'b' , 'hiru.5']
export default handler
