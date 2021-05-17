import Cheftastic from '../Assets/Cheftastic.png'
import CovidTracker from '../Assets/CovidTracker.png'
import zombaze from '../Assets/zombaze.jpg'
import news from '../Assets/news.png'
import ReactNative from '../Assets/ReactNative.png'
import android from '../Assets/android.png'
import unity from '../Assets/unity.png'
import ux from '../Assets/ux.png'
import dsc from '../Assets/dsc.png'
import AndroidJams from '../Assets/AndroidJams.png'
import graphics from '../Assets/graphic.png'

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
        id: 1,
        title: "Cheftastic",
        img: Cheftastic,
        description: "An application with variety of recipes and shopping basket. It is live on Google Play Store and uses advance android libraries and components.",
        link: "https://play.google.com/store/apps/details?id=com.dhawan.cheftastic",
        linkText: "Download"
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
        description: "An unbeatable FPS survival game in which the player have to solve the maze with zombies in it. This game uses AI in zombies to find and chase the player.",
        link: "https://github.com/ad-dhawan/ZombieWorld_Unity",
        linkText: "View Source Code"
    },
    {
        id: 4,
        title: "RSS News Reader",
        img: news,
        description: "A JAVA based android application which lets you read latest news with almost 50 articles a day. This app uses RSS Feed to fetch and display data.",
        link: "https://github.com/ad-dhawan/RSS-Reader",
        linkText: "View Source Code"
    },
    {
        id: 5,
        title: "Graphic Designing",
        img: graphics,
        description: "I DESIGN",
        link: "https://www.instagram.com/anonymous.digiart/",
        linkText: "View Artwork"
    },
]