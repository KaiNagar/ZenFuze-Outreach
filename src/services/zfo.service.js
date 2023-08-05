export const zfoService = {
    getAllUsers,
    getUser
}

const gUsers = [
    {
        username: 'Kai Nagar',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691168226/ProfilePic_a8vnxo.jpg',
        Title: 'Founder'
    }
]

function getAllUsers(){
    return gUsers
}

function getUser(username) {
    const user = gUsers.find(u => u.username === username)
    if (user !== -1) return user
}