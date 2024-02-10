export const zfoService = {
    getAllMembers,
    getMember,
    getLanguages,
    getLang,
    getAllCompenies,
    getQuestions
}

const gUsers = [
    {
        id: makeId(),
        username: 'Kai Nagar',
        imgUrl: 'https://res.cloudinary.com/db9bey3ot/image/upload/v1691168226/ProfilePic_a8vnxo.jpg',
        title: 'Founder & Visionary',
        desc: 'Meet Kai Nagar, the visionary behind ZenFuze Outreach. With a passion for helping businesses thrive in the digital age, Kai leads the charge with expertise and dedication.'
    },
    {
        id: makeId(),
        username: 'Natasha Ablogin',
        imgUrl: 'https://media.licdn.com/dms/image/D4D03AQEf9R07JWsyJg/profile-displayphoto-shrink_200_200/0/1689838333260?e=1701302400&v=beta&t=ym2JKB8dV0QFdZCCWbCo3QP01V_c0sY6vNlbN4UlbgY',
        title: 'Media Buyer & Campaign Manager',
        desc: 'Natasha Ablogin is our ace media buyer and campaign manager. With a keen eye for digital strategies and a commitment to delivering results, Natasha ensures your campaigns are optimized for success.'
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

const gQuestions = [
    {
        title:
            'Why is having a strong social media presence essential for my real estate business?',
        id: makeId(),
        answer:
            "A strong social media presence is crucial for real estate agents because it enhances brand visibility, builds customer trust, and drives engagement. It can significantly impact your business's growth and revenue.",
    },
    { title: 'How can social media advertising benefit my real estate business?', id: makeId(), answer: 'Social media advertising allows real estate agents to reach a highly targeted audience, increasing the chances of converting leads into clients. It\'s a cost-effective way to boost brand awareness and drive sales.' },
    { title: 'What if I don\'t have any experience with social media marketing?', id: makeId(), answer: 'No worries! We specialize in working with real estate agents of all levels of experience. We\'ll guide you through the process, from creating a strategy to managing campaigns. We do it all for you!' },
    { title: 'How can you help my real estate business stand out on social media?', id: makeId(), answer: 'We develop unique and creative content strategies tailored to your brand as a real estate agent. We also leverage data analytics to ensure your content resonates with your audience, making your business stand out in the competitive real estate market.' },
    { title: 'What results can I expect from your social media services?', id: makeId(), answer: 'You can expect increased brand awareness, higher engagement rates, a growing online community, and, ultimately, improved leads and conversions for your real estate business.' },
    { title: 'How does your free discovery call work, and what can I gain from it?', id: makeId(), answer: 'Our free discovery call allows us to understand your real estate business and its needs better. During the call, we\'ll provide insights and strategies customized to your goals, giving you a clear path to success in the real estate market.' },
    { title: 'Can I trust your agency with my real estate business\'s social media presence?', id: makeId(), answer: 'Absolutely! Trust is at the core of our values. We prioritize ethical practices and transparency in every aspect of our work, ensuring your real estate business\'s online reputation is in good hands.' },
    { title: 'What sets your agency apart from others in the real estate industry?', id: makeId(), answer: 'Our unwavering commitment to your success as a real estate agent sets us apart. We focus solely on paid advertising for real estate, ensuring that every dollar spent brings a return on investment. With our expertise and dedication, your real estate business will thrive in today\'s digital landscape.' },
    { title: 'How quickly can I expect to see results from your services?', id: makeId(), answer: 'The timeline for seeing results from our services varies based on your specific goals and starting point, but our strategies are designed to show noticeable improvements in your real estate business within a reasonable time frame.' },
    { title: 'How do I book a free discovery call with your team?', id: makeId(), answer: 'Booking a call is easy! Simply scroll down here and find a suitable time slot on our calendar. We look forward to speaking with you and helping your real estate business thrive.' },
];


function getAllMembers() {
    return gUsers
}

function getLanguages() {
    return gLanguages
}
function getLang(code) {
    return gLanguages.find(l => l.code === code)
}
function getQuestions() {
    return gQuestions
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