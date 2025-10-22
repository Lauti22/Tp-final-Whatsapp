export const seedChats = [
    {
    id: 'Músico, compositor y multiinstrumentista',
    name: 'David Gilmour',
    avatar: 'https://makerworld.bblmw.com/makerworld/model/USf17e747db46a3c/design/2025-05-10_93b0ea97304c18.jpg?x-oss-process=image/resize,w_1000/format,webp'
    },
    {
    id: 'Fundador de Pink Floyd',
    name: 'Roger Waters',
    avatar: 'https://www.hollywoodreporter.com/wp-content/uploads/2013/11/roger_waters_2013_l.jpg?w=2000&h=1126&crop=1'
    },
    {
    id: 'Cantante de Led Zeppelin',
    name: 'Robert Plant',
    avatar: 'https://c8.alamy.com/comp/E0YH37/may-12-1970-led-zeppelin-robert-plant-E0YH37.jpg'
    }
]

export const seedMessages = [
    {
    id: 'm1',
    chatId: 'Músico, compositor y multiinstrumentista', 
    author: 'other',
    text: 'Tengo pendiente ir a tocar a Argentina, guardate el mes de febrero que voy a andar por ahi',
    ts: Date.now() - 1000 * 60 * 45
    },

    {
    id: 'm2',
    chatId: 'Fundador de Pink Floyd',
    author: 'other',
    text: 'Que increible fue el recital el otro dia en River Lauti, menos mal que no te lo perdiste!',
    ts: Date.now() - 1000 * 60 * 30
    },

    {
    id: 'm3',
    chatId: 'Cantante de Led Zeppelin',
    author: 'other',
    text: 'Ya pudiste escuchar Stairway to Heaven? Fue una locura 🎸',
    ts: Date.now() - 1000 * 60 * 15
    }
]
