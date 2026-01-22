# 🤖 WhatsApp Bot Base (Baileys)

Base WhatsApp Bot menggunakan **Baileys (Multi-Device)** dengan struktur rapi, custom store, dan sistem handler modular.  
Cocok untuk kamu yang ingin belajar, mengembangkan, atau membuat bot WhatsApp sendiri dari nol.

## 🎯 Tujuan Base Ini

Base ini dibuat untuk:
- Pembelajaran Baileys Multi-Device
- Referensi struktur bot WhatsApp yang rapi
- Fondasi untuk bot pribadi / publik
- Eksperimen custom store & handler

❗ Base ini **bukan bot siap pakai**, melainkan **pondasi** untuk dikembangkan sendiri.

> 📌 *Base ini masih dalam tahap pengembangan (WIP / Work In Progress).*  
> Fitur akan terus ditambahkan dan diperbaiki.

---

## ✨ Fitur Utama

- ✅ Menggunakan **Baileys Multi-Device**
- ✅ Custom Message Store
- ✅ Handler command terpisah
- ✅ Sistem owner & permission
- ✅ Support button message & fallback normal message
- ✅ Auto reconnect
- ✅ Mudah dikembangkan
- 🚧 Masih tahap pengembangan

---

## 📦 Teknologi yang Digunakan

- **Node.js**
- **Baileys**
- **Pino Logger**
- **FFmpeg** (untuk media)
- **Node-Cache**
- **Moment Timezone**

---

## 📲 Instalasi di Termux

### 1. Update & install dependency dasar
```bash
pkg update && pkg upgrade
pkg install git nodejs ffmpeg
```

### 2. Clone repository ini
```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

### 3. Install module dan jalankan
```bash
npm install
npm start
```

## 📨 Kirim pesan

### 🆒 Kirim pesan button
```javascript
sendMessButton("pilih menu", [{
		buttonId: `${prefix}allmenu`,
		buttonText: { displayText: 'All Menu' },
		type: 1
	},{
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
```

---

License: [MIT](https://choosealicense.com/licenses/mit/)

## Thanks to

| [![Nazedev](https://github.com/nazedev.png?size=100)](https://github.com/nazedev) | [![WhiskeySockets](https://github.com/WhiskeySockets.png?size=100)](https://github.com/WhiskeySockets) | 
| --- | --- |
| [NazeDev](https://github.com/nazedev) | [WhiskeySockets](https://github.com/WhiskeySockets) |
# Created By [IQBALRMDI](https://github.com/IQBALRMDIOFC)
