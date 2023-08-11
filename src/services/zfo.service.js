export const zfoService = {
    getAllUsers,
    getUser,
    getLanguages,
    getLang
}

const gUsers = [
    {
        username: 'Kai Nagar',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691168226/ProfilePic_a8vnxo.jpg',
        Title: 'Founder'
    },
]

const gLanguages = [
    {
        code: 'en',
        lngName: 'English',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691731743/britain_hbqmlu.svg',
        dir: 'ltr'
    },
    {
        code: 'he',
        lngName: 'עברית',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691731743/Flag_of_Israel.svg_vx3jrz.png',
        dir: 'rtl'
    },
]

function getAllUsers() {
    return gUsers
}

function getLanguages() {
    return gLanguages
}
function getLang(code) {
    return gLanguages.find(l => l.code === code)
}

function getUser(username) {
    const user = gUsers.find(u => u.username === username)
    if (user !== -1) return user
}