export default {
    id: "he-0",
    family: true,
    label: "Hellenic",
    link: "https://en.wikipedia.org/wiki/Hellenic_languages",
    children: [
        {
            id:"he-1",
            label:"Dorian",
            family:true,
            link:"https://en.wikipedia.org/wiki/Doric_Greek",
            children:[
                {
                    id:"he-2",
                    label:"Doric",
                    extinct:true,
                    link:"https://en.wikipedia.org/wiki/Doric_Greek",
                    children:[
                        {
                            id:"he-3",
                            label:"Tsakonian",
                            link:"https://en.wikipedia.org/wiki/Tsakonian_language"
                        }
                    ]
                }
            ]
        },
        {
            id:"he-4",
            label:"Northwest Greek",
            extinct:true,
            link:"https://en.wikipedia.org/wiki/Doric_Greek"
        }
    ]
}
