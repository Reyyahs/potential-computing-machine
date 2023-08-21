import selfie1 from "../img/selfie1.png"
import FirstPortflio from "../img/FirstPortfolio.png"
import FureverHome from "../img/Furever Home.png"
import NoteTaker from "../img/Note Taker.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Reagan",
    lastName: "Yang",
    selfPortrait: selfie1,
    gradient: `-webkit-linear-gradient(135deg)`,
    baseColor: colors[0],
    socials: [

        {
            link: "https://www.instagram.com/Reyyahs/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/reagan-yang-aba24b13b/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }


    ],
    bio: "Hello! I'm Reagan. I'm finishing up my Edx Full-Stack Program. Previously, I was a Sales Rep for Napa Auto with robust experiences in proactively initiating, contacting, managing, and developing leads on a local basis with Commercial and Non-Commercial Clients. Things I enjoy are anime, gaming, and anything I find interesting!",
    skills:
        {
            proficientWith: [ 'git', 'github', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'Anime',
            emoji: '🍥'
        },
        {
            label: 'Music',
            emoji: '🎶'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Gaming',
            emoji: '🕹️'
        }

    ],
    portfolio: [
        {
            title: "First Ever Portfolio",
            live: "https://reyyahs.github.io/glowing-garbanzo/",
            source: "https://github.com/Reyyahs/glowing-garbanzo",
            image: FirstPortflio
        },
        {
            title: "FureverHome: FullStack Project",
            live:"https://fathomless-shore-00999-99874d90faa8.herokuapp.com/",
            source:"https://github.com/mahlheim/curly-broccoli/tree/main",
            image: FureverHome 
        },
        {
            title: "Note Taker Application",
            live:"https://fathomless-shore-00999-99874d90faa8.herokuapp.com/",
            image: NoteTaker
        }
    ]
}
