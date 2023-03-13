let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY YotsubaDesu🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "😈Virtex 1", rowId: '.virtex1', description: 'Elaina Virus By Yots' },
	    {title: "😈Virtex 2", rowId: '.virtex2', description: 'Elaina Virus By Yots' },
	{title: "😈Virtex 3", rowId: '.virtex3', description: 'By Yots' },
	{title: "😈Virtex 4", rowId: '.virtex4', description: 'By Yots' },
	{title: "😈Virtex 5", rowId: '.virtex5', description: 'Elaina Virtex' },
	{title: "😈Virtex 6", rowId: '.virtex6', description: 'Zx Anime' },
    {title: "😈Virtex 7", rowId: '.virtex7', description: 'Elaina Virtex' },
	{title: "😈Virtex 8", rowId: '.virtex8', description: 'Elaina Viruss' },
	{title: "😈Virtex 9", rowId: '.virtex9', description: 'Elaima Virus' },
	{title: "😈Virtex 10", rowId: '.virtex10', description: 'Elainaa Virus' },
	{title: "😈Virtex 11", rowId: '.virtex11', description: 'Elaina Viruss' },
	{title: "😈Virtex 12", rowId: '.virtex12', description: 'Yots' },
	{title: "😈Virtex 13", rowId: '.virtex13', description: 'Virtex By Yots' },
	{title: "😈Virtex 14", rowId: '.virtex14', description: 'Virtex By Yots' },
    {title: "😈Virtex 15", rowId: '.virtex15', description: 'elaina virt' },
	{title: "😈Virtex 16", rowId: '.virtex16', description: 'Jangan lupa solat' },
	{title: "😈Virtex 17", rowId: '.virtex17', description: 'By Yots ×፝֟͜×' },
	{title: "😈Virtex 18", rowId: '.virtex18', description: 'by yots' },
	{title: "😈Virtex 19", rowId: '.virtex19', description: 'elaina x yots' },
    {title: "😈Virtex 20", rowId: '.virtex20', description: 'elaina virtex' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Jangan Disalah Gunakan' },
	    {title: "🔥Virus Power", rowId: '.powerlist', description: 'Jangan Disalah Gunakan' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = true

export default handler
