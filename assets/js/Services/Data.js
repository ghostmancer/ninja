ninja.factory('Data', ['$http', function($http) {
    var projects = [
        {
            id: 'cart',
            title: 'Laptop Cart',
            timeframe: 'March 2016',
            category: 'physical',
            tags: ['Design', 'Construction', 'CAD', 'Laser Cutting', 'Team IDEA'],
            description: 'One of the responsibilities of Inglemoor High School\'s student government is to communicate with students. The goal of this project is to give them another touch point with students.',
            icon: '/assets/img/cart-icon.png',
            constructionFlag: false,
            constructionButton: false,
            colors: {
                background: '#5f6465',
                text: '#ffffff',
                hex: ''
            }
        },
        {
            id: 'bowl',
            title: 'To-Go Bowl',
            timeframe: 'January 2016',
            category: 'physical',
            tags: ['Design', 'Construction', 'Team IDEA'],
            description: 'To-Go Bowls are wasteful for the world, and inconvenient for the user. This project addressed both those issues.',
            icon: '/assets/img/cup-icon.png',
            constructionFlag: false,
            constructionButton: false,
            colors: {
                background: '#628a5c',
                text: '#ffffff',
                hex: ''
            },
            slides: [
                {
                    title: 'Several generations of bowl prototypes',
                    url: '/assets/img/portfolio/bowl/bowl-iteration.jpg'
                },
                {
                    title: 'Final prototype',
                    url: '/assets/img/portfolio/bowl/bowl-final.jpg'
                },
            ]
        },
        {
            id: 'candydispenser',
            title: 'Candy Dispenser',
            timeframe: 'December 2015',
            category: 'physical',
            tags: ['Design', 'Construction', 'Team IDEA'],
            description: 'By using elements of what makes holiday traditions memorable, this toy aims to create memorable holidays for children.',
            icon: '/assets/img/dispenser-icon.png',
            constructionFlag: false,
            constructionButton: false,
            colors: {
                background: '#dC9c89',
                text: '#000000',
                hex: ''
            },
            slides: [
                {
                    title: 'The toy',
                    url: '/assets/img/portfolio/candydispenser/toymodel.jpg'
                },
                {
                    title: 'Toy on its stand',
                    url: '/assets/img/portfolio/candydispenser/fullmodel.jpg'
                },
                {
                    title: 'Dispenser prototype; front',
                    url: '/assets/img/portfolio/candydispenser/dispenser-front.jpg'
                },
                {
                    title: 'Dispenser prototype; side',
                    url: '/assets/img/portfolio/candydispenser/dispenser-side.jpg'
                }
            ]
        },
        {
            id: 'deskorganizer',
            title: 'Desk Organizer',
            timeframe: 'October 2015',
            category: 'physical',
            tags: ['Design', 'Construction', 'Team IDEA'],
            description: 'A desk organizer for the unique needs of the Design Technology classroom.',
            icon: '/assets/img/organizer-icon.png',
            constructionFlag: false,
            constructionButton: false,
            colors: {
                background: '#e4d895',
                text: '#000000',
                hex: ''
            },
            slides: [
                {
                    title: 'Desk Organizer; front view',
                    url: '/assets/img/portfolio/organizer/deskorganizer.jpg'
                },
                {
                    title: 'Desk Organizer; side view',
                    url: '/assets/img/portfolio/organizer/deskorganizer-2.jpg'
                }
            ]
        },

        {
            id: 'kiosk',
            title: 'Inglemoor Kiosk',
            timeframe: 'February 2016',
            category: 'programming',
            tags: ['Angular', 'Sass', 'Team IDEA'],
            description: 'One of the responsibilities of Inglemoor High School\'s student government is to communicate with students. The goal of this project is to give them another touch point with students.',
            icon: '/assets/img/kiosk-icon.png',
            constructionFlag: true,
            constructionButton: true,
            colors: {
                background: '#00798c',
                text: '#ffffff',
                hex: ''
            }
        },
        {
            id: 'formalwear',
            title: 'Formal Wear',
            timeframe: 'December 2015',
            category: 'programming',
            tags: ['Nodejs', 'Mongodb', 'Ionic', 'Angular', 'Sass', 'Competition'],
            description: 'An app for students in organizations like FBLA and DECA to get feedback on their formal attire. When preparing for competition, it\'s easy to forget about clothes - an important element of a presentation! Formal Wear helps users get actionable feedback from others.',
            icon: '/assets/img/formalwear-icon.png',
            constructionFlag: false,
            constructionButton: false,
            colors: {
                background: '#ffffff',
                text: '#000000',
                hex: '',
                factor: -0.05
            },
            slides: [
                {
                    title: 'Splash screen',
                    url: '/assets/img/portfolio/formalwear/splash.png'
                },
                {
                    title: 'Feed',
                    url: '/assets/img/portfolio/formalwear/feed.png'
                },
                {
                    title: 'Explore',
                    url: '/assets/img/portfolio/formalwear/explore.png'
                },
                {
                    title: 'Fashion tips',
                    url: '/assets/img/portfolio/formalwear/tips.png'
                },
                {
                    title: 'Notifications',
                    url: '/assets/img/portfolio/formalwear/notifications.png'
                },
                {
                    title: 'Profile',
                    url: '/assets/img/portfolio/formalwear/profile.png'
                },
                {
                    title: 'Profile Edit',
                    url: '/assets/img/portfolio/formalwear/clubs.png'
                },
                {
                    title: 'Question writing',
                    url: '/assets/img/portfolio/formalwear/questions.png'
                },
                {
                    title: 'Question responses',
                    url: '/assets/img/portfolio/formalwear/responses.png'
                },
            ]
        },
        {
            id: 'multiplayer',
            title: 'Multiplayer Demo',
            timeframe: 'Late Summer 2015',
            category: 'programming',
            tags: ['Nodejs', 'Unity', 'C#', 'Networking', 'Modelling'],
            description: 'An exploration of multiplayer. Before this project, I hadn\'t done much work with Unity - the game engine powering the client - real-time networking, or terrain generation. This project was an interesting exploration of all of these topics!',
            icon: '/assets/img/mmo-icon.png',
            constructionFlag: true,
            constructionButton: false,
            colors: {
                background: '#2c3e50',
                text: '#ecf0f1',
                hex: ''
            }
        },
        {
            id: 'obstaclecar',
            title: 'Obstacle-Avoiding Car',
            timeframe: 'Early Summer 2015',
            category: 'programming',
            tags: ['Arduino', 'C++', 'Robotics'],
            description: 'This project was an interesting one, as it was the first time I\'d worked with robotics. The physical difficulties of construction and organization came up, as did the limitations of hardware accuracy. The end result is something I am pretty pleased with.',
            icon: '/assets/img/car-icon.png',
            constructionFlag: true,
            constructionButton: false,
            colors: {
                background: '#a46b49',
                text: '#ffffff',
                hex: '#ffffff'
            }
        },
        {
            id: 'messenger',
            title: 'Instant Messenger',
            timeframe: 'Late Winter 2014',
            category: 'programming',
            tags: ['PHP', 'Networking'],
            description: 'While a project like this was beyond my skill level at the time, I still persevered in creating a very hackish working prototype of an online instant messenger.',
            icon: '',
            constructionFlag: true,
            constructionButton: true,
            colors: {
                background: '#81cfe0',
                text: '#1d2f33',
                hex: '#1d2f33'
            }
        },
        {
            id: 'vasn',
            title: 'VASN',
            timeframe: 'Mid-Winter 2014',
            category: 'programming',
            tags: ['PHP'],
            description: 'A social networking website on this scale was also beyond what I could reasonably achieve at the time, but I was really interested in a project that would test me and ultimately expand my capabilities.',
            icon: '/assets/img/vasn-icon.png',
            constructionFlag: true,
            constructionButton: true,
            colors: {
                background: '#000000',
                text: '#ffffff',
                hex: '#ff7b24',
                factor: 0.1
            }
        }
    ];

    var widgets = [
        {
            title: 'Color Game',
            link: 'http://andrey.ninja/colorgame/',
            description: 'A fun web game.',
            colors: {
                background: '#fa7921',
                text: '#ffffff',
                button: '#f3b61f',
                color: '#000000'
            }
        },
        {
            title: 'Shape Experiment',
            link: 'http://andrey.ninja/shape/',
            description: 'An exploration of Canvas.',
            colors: {
                background: '#2f2f2f',
                text: '#ffffff',
                button: '#cccccc',
                buttonText: '#2f2f2f'
            }
        }
    ];

    var details = {
        bowl: [
            {
                type: 'paragraph',
                data: {
                    text: 'The purpose of this project was to faddress several major issues with to-go boxes. They\'re bad for the environment in that styrofoam is not compostable, they\'re difficult to use because they cannot fit in one hand and be eaten "on the go", and they cannot be microwaved to be re-heated.'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: ''
                }
            },
            {
                type: 'list',
                data: {
                    content: [
                        'Compostable or recyclable; not destined for the landfill',
                        'Hand-held',
                        ''
                    ]
                }
            }
        ],
        vasn: [
            {
                type: 'paragraph',
                data: {
                    text: 'VASN is a social-networking site which had the purpose of exploring my capabilities as a developer at the time. Generally, it was successful, as VASN has many standard social-networking functionality. Posting, commenting, hashtagging, searching, and liking are all fully-functional!'
                }
            },
            {
                type: 'header',
                data: {
                    text: 'Technical Reflections'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'I worked on VASN such a long time ago that it is not really representative of the capabilities I have today. I leave it as a portfolio piece mostly because I\'m personally proud of the dedication I showed in creating something even when I didn\'t know exactly how to.',
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'Some of the weaknesses of VASN are that it doesn\'t use databases (at the time, I didn\'t about databases, and hacked together a folder-file structure), that similar code is copy-and-pasted rather than being centralized (making it so that if I fix a problem in one place, it still exists in another), and generally the code is badly organized.'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'Despite all these limitations I\'m retrospectively placing on it, VASN was a fun project which I was really proud of. If you\'d like to try it out, it\'t accessible at <a href="http://vasn.x10.mx/">vasn.x10.mx</a>.'
                }
            },
            {
                type: 'browser-slideshow',
                data: {
                    url: 'http://vasn.x10.mx/',
                    photos: [
                        '/assets/img/feed.png',
                        '/assets/img/profile.png',
                        '/assets/img/search.png'
                    ]
                }
            }
        ]
    }

    var skills = [
        {
            name: 'Technologies',
            id: 'technologies',
            data: [
                {
                    icon: '/assets/img/icons/node.png',
                    name: 'Node.js',
                    description: 'I\'ve done several projects with Node.js and feel comfortable using it. I\'m familiar with best practices for code organization, how modules function, as well as the value and implementation of asynchronous programming',
                    proficiency: 'Experienced'
                },
                {
                    icon: '/assets/img/icons/angular.png',
                    name: 'Angular',
                    size: '45%',
                    description: 'I\'ve done a couple projects with Angular, and although I\'m still learning, I\'m generally pretty comfortable. I know how to use Angular to follow MVC principles.',
                    proficiency: 'Familiar'
                },
                {
                    icon: '/assets/img/icons/mongo.png',
                    name: 'Mongodb',
                    size: '25%',
                    description: 'I\'ve used Mongodb as a database for my last couple projects, and in conjunction with Mongoose, I am familiar with how to store and retrieve data using schemas.',
                    proficiency: 'Familiar'
                },
                {
                    icon: '/assets/img/icons/sass.png',
                    name: 'Sass',
                    size: '45%',
                    description: 'I\'ve done a lot of work with Sass. I have a familiarity with CSS3 standards in general, and know how to use Sass to organize and modularize stylesheets.',
                    proficiency: 'Experienced'
                },
                {
                    icon: '/assets/img/icons/unity.png',
                    name: 'Unity',
                    description: 'My work with Unity has been fun, although infrequent and little. I am still learning a lot, but I can use Blender to create basic models, and C# to implement mechanics',
                    proficiency: 'Some experience'
                }
            ],
        },
        {
            name: 'Sketching',
            id: 'sketching',
            slides: [
                {
                    title: 'Garlic Press',
                    url: '/assets/img/skills/sketches/garlic press.jpg'
                },
                {
                    title: 'Jeep',
                    url: '/assets/img/skills/sketches/jeep.jpg'
                },
                {
                    title: 'Violin',
                    url: '/assets/img/skills/sketches/violin.jpg'
                },
                {
                    title: 'Toolbox',
                    url: '/assets/img/skills/sketches/craftsman.jpg'
                },
                {
                    title: 'Shoes',
                    url: '/assets/img/skills/sketches/shoes.jpg'
                }
            ]
        },
        {
            name: 'CAD',
            id: 'cad',
            slides: [
                {
                    title: 'Laptop Cart; back view',
                    url: '/assets/img/skills/cartcad-back.png'
                },
                {
                    title: 'Laptop Cart; exposed internals',
                    url: '/assets/img/skills/cartcad-exposed.png'
                }
            ]
        },
        {
            name: 'Photo Editing',
            id: 'editing',
            slides: [
                {
                    title: 'Mechanical Pencil Knight',
                    url: '/assets/img/skills/editing/knight.png'
                },
                {
                    title: 'Abstract',
                    url: '/assets/img/skills/editing/blackandpointy.png'
                },
                {
                    title: 'Flight!',
                    url: '/assets/img/skills/editing/flight.png'
                },
                {
                    title: 'Album Cover',
                    url: '/assets/img/skills/editing/oblin.png'
                },
                {
                    title: 'Vortex',
                    url: '/assets/img/skills/editing/gplabs.png'
                },
                {
                    title: 'Violin',
                    url: '/assets/img/skills/editing/violin.png'
                }
            ]
        },
        {
            name: 'Model Making',
            id: 'model',
            slides: [
                {
                    title: 'Desk Organizer',
                    url: '/assets/img/skills/deskorganizer-2.jpg'
                },
                {
                    title: 'To-Go Bowl',
                    url: '/assets/img/skills/bowl-final.jpg'
                },
                {
                    title: 'Cardboard Chair',
                    url: '/assets/img/skills/chair.jpg'
                },
                {
                    title: 'Temperature Modelling',
                    url: '/assets/img/skills/temperaturemodelling.jpg'
                },
                {
                    title: 'Laptop Cart',
                    url: '/assets/img/skills/cart.jpg'
                }
            ]
        },
        {
            name: 'Other Skills',
            id: 'other'
        }
    ]

    return {
        skills: skills,
        projects: projects,
        widgets: widgets,
        details: details
    }
}]);
