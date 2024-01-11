const eventsDB = [
    {
        id: 3001,
        contractNumber: 3001,
        invoiceNumber: 3001,
        eventTitle: "Birthday Dinner",
        eventDate: "2024-02-10",
        eventLocation: "Hotel Imperial; South Street and Brown Avenue, # 2576",
        startEventTime: "18:00",
        endEventTime: "24:00",
        guestsEventQuantity: 90,
        clientName: "John Hougges",
        clientEmail: "john.h@gmail.com",
        clientPhone: 769338796,
        selectEventMenu: 1,
        selectEventPackage: "gold",
        eventCost: 2500,
    },
    {
        id: 3002,
        contractNumber: 3002,
        invoiceNumber: 3002,
        eventTitle: "Business Dinner",
        eventDate: "2024-02-09",
        eventLocation: "Hotel Delux; South Street and White Avenue, # 2584",
        startEventTime: "18:30",
        endEventTime: "23:30",
        guestsEventQuantity: 50,
        clientName: "Johnson & Johnson",
        clientEmail: "info@johnson.com",
        clientPhone: 657338796,
        selectEventMenu: 3,
        selectEventPackage: "platinum",
        eventCost: 4500,
    },
    {
        id: 3003,
        contractNumber: 3003,
        invoiceNumber: 3003,
        eventTitle: "Wedding Aaron & Janne Loeb ",
        eventDate: "2024-02-10",
        eventLocation: "Quinta de Jarama; Burgos Street and Quarter Avenue, # 4504",
        startEventTime: "18:30",
        endEventTime: "23:30",
        guestsEventQuantity: 100,
        clientName: "Aaron Loeb",
        clientEmail: "aaronloeb@yahoo.com",
        clientPhone: 998738796,
        selectEventMenu: 3,
        selectEventPackage: "gold",
        eventCost: 7900,
    },
    {
        id: 3004,
        contractNumber: 3004,
        invoiceNumber: 3004,
        eventTitle: "Wedding David & Lucy Martinez",
        eventDate: "2024-02-24",
        eventLocation: "Russafa Street and Quarter Avenue, 10, # 46504",
        startEventTime: "19:00",
        endEventTime: "24:00",
        guestsEventQuantity: 200,
        clientName: "Lucy Wilson",
        clientEmail: "lucyw34@yahoo.com",
        clientPhone: 609878796,
        selectEventMenu: 3,
        selectEventPackage: "gold",
        eventCost: 8000,
    },
    {
        id: 3005,
        contractNumber: 3005,
        invoiceNumber: 3005,
        eventTitle: "Ruby´s Birthday party",
        eventDate: "2024-02-17",
        eventLocation: "Hotel Oliveira, Red Cross Avenue, 253, # 46804",
        startEventTime: "18:00",
        endEventTime: "22:00",
        guestsEventQuantity: 30,
        clientName: "Matt Barton",
        clientEmail: "mbarton95@yahoo.com",
        clientPhone: 60980079,
        selectEventMenu: 3,
        selectEventPackage: "gold",
        eventCost: 900,
    },
    {
        id: 3006,
        contractNumber: 3006,
        invoiceNumber: 3006,
        eventTitle: "Robert´s Birthday party",
        eventDate: "2024-02-17",
        eventLocation: "Villa Bilbao, Polish Avenue, 908, # 46003",
        startEventTime: "17:00",
        endEventTime: "22:00",
        guestsEventQuantity: 35,
        clientName: "Linda Birdman",
        clientEmail: "lindabm_43@yahoo.com",
        clientPhone: 609006541,
        selectEventMenu: 2,
        selectEventPackage: "gold",
        eventCost: 1000,
    },
    {
        id: 3007,
        contractNumber: 3007,
        invoiceNumber: 3007,
        eventTitle: "Wedding Emily & Laura Perez",
        eventDate: "2024-03-02",
        eventLocation: "Dr. Sanchis M., 900, # 46546",
        startEventTime: "19:30",
        endEventTime: "24:00",
        guestsEventQuantity: 220,
        clientName: "Laura Perez",
        clientEmail: "laura98@yahoo.com",
        clientPhone: 609878796,
        selectEventMenu: 2,
        selectEventPackage: "diamond",
        eventCost: 12500,
    },
    {
        id: 3008,
        contractNumber: 3008,
        invoiceNumber: 3008,
        eventTitle: "Wedding Sophia & William",
        eventDate: "2024-03-16",
        eventLocation: "Paradise Villa, 45 Highway 826, # 40003",
        startEventTime: "16:00",
        endEventTime: "24:00",
        guestsEventQuantity: 250,
        clientName: "William Kindle",
        clientEmail: "laura98@yahoo.com",
        clientPhone: 60018700,
        selectEventMenu: 2,
        selectEventPackage: "platinum",
        eventCost: 15000,
    },
    {
        id: 3009,
        contractNumber: 3009,
        invoiceNumber: 3009,
        eventTitle: "Business coctail Skype Co.",
        eventDate: "2024-03-01",
        eventLocation: "Hotel Delux; South Street and East Avenue, # 9084",
        startEventTime: "18:30",
        endEventTime: "23:30",
        guestsEventQuantity: 30,
        clientName: "Skype Co.",
        clientEmail: "admin@skype.com",
        clientPhone: 90056488,
        selectEventMenu: 3,
        selectEventPackage: "platinum",
        eventCost: 3200,
    },
    {
        id: 3010,
        contractNumber: 3010,
        invoiceNumber: 3010,
        eventTitle: "Business Executive dinner",
        eventDate: "2024-03-23",
        eventLocation: "River hotel; Last road Street and 68 Avenue, # 5635",
        startEventTime: "19:00",
        endEventTime: "24:00",
        guestsEventQuantity: 100,
        clientName: "Microsoft",
        clientEmail: "admin@microsoft.com",
        clientPhone: 6005001,
        selectEventMenu: 2,
        selectEventPackage: "diamond",
        eventCost: 12500,
    },
    {
        id: 3011,
        contractNumber: 3011,
        invoiceNumber: 3011,
        eventTitle: "Simon´s Birthday party",
        eventDate: "2024-03-17",
        eventLocation: "Villa Bilbao, Brown Street, 1208, # 46003",
        startEventTime: "19:00",
        endEventTime: "24:00",
        guestsEventQuantity: 35,
        clientName: "Linda Birdman",
        clientEmail: "lindabm_43@yahoo.com",
        clientPhone: 60906541,
        selectEventMenu: 2,
        selectEventPackage: "gold",
        eventCost: 1000,
    },
    {
        id: 3012,
        contractNumber: 3012,
        invoiceNumber: 3012,
        eventTitle: "Angela´s Birthday party",
        eventDate: "2024-03-16",
        eventLocation: "Villa Bilbao, Brown Street, 1208, # 46003",
        startEventTime: "11:00",
        endEventTime: "13:00",
        guestsEventQuantity: 32,
        clientName: "Alice Kingsman",
        clientEmail: "akingsman-003@gmail.com",
        clientPhone: 600078906,
        selectEventMenu: 1,
        selectEventPackage: "gold",
        eventCost: 1000,
    },
    {
        id: 3013,
        contractNumber: 3013,
        invoiceNumber: 3013,
        eventTitle: "David´s Birthday party",
        eventDate: "2024-03-23",
        eventLocation: "Villa Bilbao, Brown Street, 1208, # 46003",
        startEventTime: "19:00",
        endEventTime: "23:00",
        guestsEventQuantity: 28,
        clientName: "Julia Mendez",
        clientEmail: "juliamendez_k@gmail.com",
        clientPhone: 77569003,
        selectEventMenu: 2,
        selectEventPackage: "diamond",
        eventCost: 1300,
    },
    {
        id: 3014,
        contractNumber: 3014,
        invoiceNumber: 3014,
        eventTitle: "Business coctail IONOS Co.",
        eventDate: "2024-03-23",
        eventLocation: "IONOS office building; Corner Street 609B, # 9084",
        startEventTime: "19:30",
        endEventTime: "23:30",
        guestsEventQuantity: 60,
        clientName: "IONOS Co.",
        clientEmail: "admin@ionos.com",
        clientPhone: 90056488,
        selectEventMenu: 3,
        selectEventPackage: "platinum",
        eventCost: 6700,
    },
    {
        id: 3015,
        contractNumber: 3015,
        invoiceNumber: 3015,
        eventTitle: "Wedding Maria & Jules",
        eventDate: "2024-03-16",
        eventLocation: "Coconut Villa, 24 Highway 900, # 40001",
        startEventTime: "16:00",
        endEventTime: "24:00",
        guestsEventQuantity: 300,
        clientName: "Jules Arnaiz",
        clientEmail: "jules_arnaiz@yahoo.com",
        clientPhone: 90918700,
        selectEventMenu: 1,
        selectEventPackage: "gold",
        eventCost: 15000,
    },
    {
        id: 3016,
        contractNumber: 3016,
        invoiceNumber: 3016,
        eventTitle: "Wedding Dina & Carlo",
        eventDate: "2024-03-30",
        eventLocation: "Lovestone Villa, 69 Avenue 1000, # 10001",
        startEventTime: "18:00",
        endEventTime: "24:00",
        guestsEventQuantity: 120,
        clientName: "Dina Cortez",
        clientEmail: "dina_c_acid@gmail.com",
        clientPhone: 61112200,
        selectEventMenu: 3,
        selectEventPackage: "platinum",
        eventCost: 17000,
    },
]

const menuDB = [
    {
        menu1: "Tomato soup, Rissoto al fungi, Stuffed Slices Turkey",
        menu2: "Spring salad, Roasted potatoes, Roasted Pork Loin",
        menu3: "Roasted veggies, Roasted potatoes, Prime Rib Roast",
    }
]

const packageDB = [
    {
        name: "platinum",
        item: "Coctail hour, four course-dinner with red meat choices, plated dinner with full service",
        price: 75,
    },
    {
        name: "diamond",
        item: "Four course-dinner with white protein choices, plated dinner with full service",
        price: 55,
    },
    {
        name: "gold",
        item: "Three course-dinner with white protein, plated or buffet",
        price: 45,
    }
]