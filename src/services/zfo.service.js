export const zfoService = {
    getAllMembers,
    getMember,
    getLanguages,
    getLang,
    getAllCompenies
}

const gUsers = [
    {
        username: 'Kai Nagar',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691168226/ProfilePic_a8vnxo.jpg',
        title: 'Founder'
    },
    {
        username: 'Adam Saya',
        imgUrl: 'https://media.licdn.com/dms/image/C4D03AQGt-5QUsOUGKw/profile-displayphoto-shrink_800_800/0/1639257490935?e=1697673600&v=beta&t=e6c6jWL-woW5KcOtTuUkJvjlE4yH-t_l0U-ytXJSx0k',
        title: 'Chief marketing officer'
    },
]

const gCompanies = [
    {
        id: makeId(),
        name: 'Dental Harmoni',
        logoUrl: 'https://en.dental-harmonia-tel-aviv.com/sites/S_JUFQLYEUVBG2HJKO6KIEHAQU3I/files/logodental2_1.png'
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

function getAllMembers() {
    return gUsers
}

function getLanguages() {
    return gLanguages
}
function getLang(code) {
    return gLanguages.find(l => l.code === code)
}

function getMember(username) {
    const user = gUsers.find(u => u.username === username)
    if (user !== -1) return user
}

function getAllCompenies() {
    return gCompanies
}


function makeId(length = 5) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}