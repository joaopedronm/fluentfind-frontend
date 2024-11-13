import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'

import teach1 from './teach1.png'
import teach2 from './teach2.png'
import teach3 from './teach3.png'
import teach4 from './teach4.png'
import teach5 from './teach5.png'
import teach6 from './teach6.png'
import teach7 from './teach7.png'
import teach8 from './teach8.png'
import teach9 from './teach9.png'
import teach10 from './teach10.png'
// import teach11 from './teach11.png'
// import teach12 from './teach12.png'
// import teach13 from './teach13.png'
// import teach14 from './teach14.png'
// import teach15 from './teach15.png'

import EnglandFlag from './england.png'
import SpainFlag from './spain.png'
import GermanyFlag from './germany.png'
import BrazilFlag from './brazil.png'
import EgyptFlag from './egypt.png'
import ItalyFlag from './italy.png'
import ChinaFlag from './china.png'
import FranceFlag from './france.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'English',
        image: EnglandFlag
    },
    {
        speciality: 'Spanish',
        image: SpainFlag
    },
    {
        speciality: 'German',
        image: GermanyFlag
    },
    {
        speciality: 'Italian',
        image: ItalyFlag
    },
    {
        speciality: 'French',
        image: FranceFlag
    },
    {
        speciality: 'Mandarin',
        image: ChinaFlag
    },
    {
        speciality: 'Portuguese',
        image: BrazilFlag
    },
    {
        speciality: 'Arabic',
        image: EgyptFlag
    },
]

export const teachers = [
    {
        _id: 'teach1',
        name: 'Prof. Richard James',
        image: teach1,
        speciality: 'English',
        degree: 'MA in English Literature',
        experience: '4 Years',
        about: 'Prof. James is dedicated to providing an engaging learning experience, emphasizing language fluency, critical thinking, and comprehensive linguistic skills.',
        fees: 50,
        address: {
            line1: '17th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach2',
        name: 'Prof. Emily Larson',
        image: teach2,
        speciality: 'Spanish',
        degree: 'MA in Spanish Language and Culture',
        experience: '3 Years',
        about: 'Prof. Larson brings a dynamic approach to teaching Spanish, focusing on cultural immersion and conversational proficiency.',
        fees: 60,
        address: {
            line1: '27th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach3',
        name: 'Prof. Sarah Patel',
        image: teach3,
        speciality: 'Portuguese',
        degree: 'MA in Portuguese Linguistics',
        experience: '1 Year',
        about: 'Prof. Patel is passionate about teaching Portuguese through interactive lessons that enhance both grammar and real-world usage.',
        fees: 30,
        address: {
            line1: '37th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach4',
        name: 'Prof. Christopher Lee',
        image: teach4,
        speciality: 'Mandarin',
        degree: 'MA in Mandarin Studies',
        experience: '2 Years',
        about: 'Prof. Lee is committed to simplifying complex aspects of Mandarin, helping students achieve fluency and confidence in speaking.',
        fees: 40,
        address: {
            line1: '47th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach5',
        name: 'Prof. Henrich Garcia',
        image: teach5,
        speciality: 'French',
        degree: 'MA in French Language and Literature',
        experience: '4 Years',
        about: 'Prof. Garcia offers immersive French language courses that prioritize conversation, comprehension, and written expression.',
        fees: 55,
        address: {
            line1: '57th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach6',
        name: 'Prof. Michael Smith',
        image: teach6,
        speciality: 'Italian',
        degree: 'MA in Italian Studies',
        experience: '5 Years',
        about: 'Prof. Smith incorporates Italian culture and tradition into his language lessons for an enriching learning experience.',
        fees: 45,
        address: {
            line1: '67th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach7',
        name: 'Prof. Angela Brown',
        image: teach7,
        speciality: 'German',
        degree: 'MA in German Linguistics',
        experience: '6 Years',
        about: 'Prof. Brown emphasizes a methodical approach to learning German, focusing on pronunciation, grammar, and everyday dialogue.',
        fees: 65,
        address: {
            line1: '77th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach8',
        name: 'Prof. David Chen',
        image: teach8,
        speciality: 'Mandarin',
        degree: 'PhD in East Asian Languages',
        experience: '8 Years',
        about: 'Prof. Chen provides comprehensive Mandarin courses that cover advanced language structures and cultural nuances.',
        fees: 70,
        address: {
            line1: '87th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach9',
        name: 'Prof. Sofia Martinez',
        image: teach9,
        speciality: 'Spanish',
        degree: 'MA in Spanish Philology',
        experience: '2 Years',
        about: 'Prof. Martinez uses multimedia and interactive exercises to help students build confidence in speaking and writing Spanish.',
        fees: 40,
        address: {
            line1: '97th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    {
        _id: 'teach10',
        name: 'Prof. Liam Wilson',
        image: teach10,
        speciality: 'Arabic',
        degree: 'MA in Arabic Studies',
        experience: '7 Years',
        about: 'Prof. Wilson integrates traditional and modern teaching methods to help students master Arabic script and conversation.',
        fees: 75,
        address: {
            line1: '107th Avenue, Central',
            line2: 'City Center, London'
        }
    },
    // {
    //     _id: 'teach11',
    //     name: 'Prof. Thomas Hughes',
    //     image: teach11,
    //     speciality: 'French',
    //     degree: 'MA in French Linguistics',
    //     experience: '6 Years',
    //     about: 'Prof. Hughes emphasizes practical conversation and grammar, helping students achieve fluency through immersive practice.',
    //     fees: 60,
    //     address: {
    //         line1: '101st Avenue, Central',
    //         line2: 'City Center, London'
    //     }
    // },
    // {
    //     _id: 'teach12',
    //     name: 'Prof. Isabella Fernandez',
    //     image: teach12,
    //     speciality: 'Spanish',
    //     degree: 'MA in Spanish Literature',
    //     experience: '4 Years',
    //     about: 'Prof. Fernandez engages students with a mix of literature and spoken Spanish, fostering a deep understanding of the language.',
    //     fees: 55,
    //     address: {
    //         line1: '111th Avenue, Central',
    //         line2: 'City Center, London'
    //     }
    // },
    // {
    //     _id: 'teach13',
    //     name: 'Prof. Ahmed Al-Sayed',
    //     image: teach13,
    //     speciality: 'Arabic',
    //     degree: 'MA in Arabic Studies',
    //     experience: '7 Years',
    //     about: 'Prof. Al-Sayed is dedicated to teaching Arabic through modern and classical contexts, ensuring a well-rounded learning experience.',
    //     fees: 70,
    //     address: {
    //         line1: '121st Avenue, Central',
    //         line2: 'City Center, London'
    //     }
    // },
    // {
    //     _id: 'teach14',
    //     name: 'Prof. Mei Wang',
    //     image: teach14,
    //     speciality: 'Mandarin',
    //     degree: 'MA in Mandarin Linguistics',
    //     experience: '5 Years',
    //     about: 'Prof. Wang’s approach simplifies Mandarin through structured lessons that build strong foundations in speaking and comprehension.',
    //     fees: 65,
    //     address: {
    //         line1: '131st Avenue, Central',
    //         line2: 'City Center, London'
    //     }
    // },
    // {
    //     _id: 'teach15',
    //     name: 'Prof. Hans Schmidt',
    //     image: teach15,
    //     speciality: 'German',
    //     degree: 'MA in German Language',
    //     experience: '8 Years',
    //     about: 'Prof. Schmidt focuses on conversational German, helping students gain confidence through practical language usage and interactive activities.',
    //     fees: 75,
    //     address: {
    //         line1: '141st Avenue, Central',
    //         line2: 'City Center, London'
    //     }
    // }
];