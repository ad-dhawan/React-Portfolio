import Cheftastic from '../Assets/Cheftastic Portfolio Image.png'
import Crypto from '../Assets/Crypto Tracker Portfolio Image.png';
import CovidTracker from '../Assets/Covid Tracker Portfolio Image.png'
import zombaze from '../Assets/Zombaze Portfolio Image.png'
import news from '../Assets/news.png'
import ReactNative from '../Assets/ReactNative.png'
import android from '../Assets/android.png'
import unity from '../Assets/unity.png'
import ux from '../Assets/ux.png'
import dsc from '../Assets/dsc.png'
import AndroidJams from '../Assets/AndroidJams.png'
import graphics from '../Assets/graphic.png'  
import fcmAdmin from '../Assets/fcm-admin.png'
import CheftasticRecreate from '../Assets/CheftasticRecreate.png'

export const skillsPortfolio = [
    {
        id: 1,
        title: "React Native",
        img: ReactNative
    },
    {
        id: 2,
        title: "Native Android",
        img: android
    },
    {
        id: 3,
        title: "Unity Game Development",
        img: unity
    },
    {
        id: 4,
        title: "UI/UX",
        img: ux
    }
];

export const experiencePortfolio = [
    {
        id: 1,
        title: "Developer Students Club Core Team Member",
        img: dsc
    },
    {
        id: 2,
        title: "Campus Facilitator for Android Study Jams 2021",
        img: AndroidJams
    }
];

export const projects = [
    {
        id: 5,
        title: "Cheftastic Recreate",
        img: CheftasticRecreate,
        description: "A full stack UGC based application for users to upload and explore recipes.",
        // link: "https://github.com/ad-dhawan/fcm-admin",
        linkText: "Developing"
    },
    {
        id: 4,
        title: "FCM Admin",
        img: fcmAdmin,
        description: "Rest API to register token and send notifications via Firebase Cloud Messaging",
        link: "https://github.com/ad-dhawan/fcm-admin",
        linkText: "View Source Code"
    },
    {
        id: 1,
        title: "Cheftastic",
        img: Cheftastic,
        description: "An application with variety of recipes and shopping basket. It is live on Google Play Store and uses advance android libraries and components.",
        link: "https://play.google.com/store/apps/details?id=com.dhawan.cheftastic",
        linkText: "Download"
    },
    {
        id: 2,
        title: "Crypto Tracker",
        img: Crypto,
        description: "A web application made using React JS to view and filter all the latest crypto currency details.",
        link: "https://crypto-update.netlify.app/",
        linkText: "Visit website"
    },
    {
        id: 2,
        title: "Covid-19 Tracker",
        img: CovidTracker,
        description: "An application to see all the Covid-19 statistics and latest news from all over the world. It also lets you see all the cases in Indian States aswell. It is open source and available on github.",
        link: "https://github.com/ad-dhawan/Covid19India_tracker",
        linkText: "View Source Code"
    },
    {
        id: 3,
        title: "Zombaze",
        img: zombaze,
        description: "An unbeatable FPS survival game in which the player have to solve the maze with zombies in it. This game uses AI script in zombie to chase the player when in specific distance.",
        link: "https://github.com/ad-dhawan/ZombieWorld_Unity",
        linkText: "View Source Code"
    },
    // {
    //     id: 5,
    //     title: "Graphic Designing",
    //     img: graphics,
    //     description: "Yea, Sometimes I Design Too",
    //     link: "https://www.instagram.com/anonymous.digiart/",
    //     linkText: "View Artwork"
    // },
]