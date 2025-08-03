const mydb = {
  city: [
    {
        id: '1001',
        name: 'Istanbul'
    },
    {
        id: '1002',
        name: 'Berlin'
    },
    {
        id: '1003',
        name: 'Paris'
    }
  ],

    hotel: [
        {
            id: '8001',
            name: 'Smoothie Stay',
            description: 'A juicy blend of comfort and color.',
            coverImage: '/room-1.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 4.8,
            cityId: '1002',
            amenities: {
                connect: [
                    { id: '1' },
                    {
                        id: '5'
                    },
                    {
                        id: '7'
                    },
                    {
                        id: '20'
                    }
                ],
            },
        },
        {
            id: '8002',
            name: 'Vakko Hotel and Residence',
            description: 'Vakko Hotel and Residence features a fitness center, terrace, a restaurant and bar in Istanbul. A sauna and a car rental service are available for guests. The property provides a 24-hour front desk, a shuttle service, room service and free WiFi throughout the property. The hotel will provide guests with air-conditioned rooms offering a desk, a coffee machine, a fridge, a dishwasher, a safety deposit box, a flat-screen TV, a balcony and a private bathroom with a bidet. Every room has an electric tea pot, while some rooms will provide you with a patio and others also provide guests with city views. All guest rooms in Vakko Hotel and Residence are equipped with free toiletries and an iPad.A continental, vegetarian or vegan breakfast is served at the property. Popular points of interest near the accommodation include Dolmabahce Palace, Istanbul Congress Center and Taksim Metro Station. Istanbul Airport is 21 miles away.',
            coverImage: '/room-2.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 4.6,
            cityId: '1001',
        },
        {
            id: '8003',
            name: 'JW Marriott Hotel',
            description: 'Located in Istanbul, 7.8 miles from Blue Mosque, JW Marriott Hotel Istanbul Marmara Sea provides accommodations with a seasonal outdoor swimming pool, free private parking, a fitness center and a garden. Providing a restaurant, the property also features a shared lounge, as well as an indoor pool and a hot tub. The property has a 24-hour front desk, a shuttle service, room service and free WiFi throughout the property. Guest rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. Each room is equipped with a coffee machine, while certain rooms include a kitchen with a fridge, a dishwasher and an oven. At JW Marriott Hotel Istanbul Marmara Sea every room includes bed linen and towels. Guests at the accommodation can enjoy a buffet breakfast. JW Marriott Hotel Istanbul Marmara Sea offers 5-star accommodations with a spa center and terrace. There is n on-site bar and guests can also use the business area. Halic Congress Center is 8.2 miles from the hotel, while Hagia Sophia is 8.3 miles away. Istanbul Airport is 25 miles from the property.',
            coverImage: '/room-3.jpg',
            gallery: ['/vvv4.jpg','/vvv5.jpg'],
            rating: 4.6,
            cityId: '1003',
        }
    ],
    service: [
        { 
            id: '1',            
            name: 'Free WiFi', 
            icon: 'wifi' 
        },
        { 
        id: '2',            
        name: 'Smoking area', 
        icon: 'smoking_rooms' 
        },
        {
        id: '3',
        name:     "Airport shuttle (free)",
        icon: "flight_land",
        },
    {
    id: '4',
    name:     "Non-smoking rooms",
    icon: "smoke_free",     
    },
    {
    id: '5',
    name:     "Restaurant",
    icon: "restaurant",
    
},
    {
    id: '6',
    name:     "Spa",
    icon: "spa",
    
},
    {
        id: '7',
    name:     "Fitness center",
    icon: "fitness_center",
    
},
    {
        id: '8',
    name:     "Breakfast",
    icon: "free_breakfast",
    
},
    {
        id: '9',
    name:     "Bar",
    icon: "local_bar",
    
},
    {
        id: '10',
    name:     "Parking on site",
    icon: "local_parking",
    
},
    {
        id: '11',
    name:     "Family rooms",
    icon: "family_restroom",
},
    {
        id: '12',
    name:     "Room service",
    icon: "room_service",
},
    {
        id: '13',
    name:     "Laundry",
    icon: "local_laundry",
},
    {
        id: '14',
    name:     "Baggage storage",
    icon: "luggage",
},
    {
        id: '15',
    name:     "Heating",
    icon: "heat_pump",
},
    {
        id: '16',
    name:     "Terrace",
    icon: "deck",
},
    {
        id: '17',
    name:     "Private Parking",
    icon: "car_rental",
},
    {
        id: '18',
    name:     "2 swimming pools",
    icon: "pool",
},
    {
        id: '19',
    name:     "Free parking",
    icon: "no_crash",
},
    {
        id: '20',
    name:     "Tea/Coffee Maker" ,
    icon: "coffee_maker",
}
    ]
};

export default mydb;
