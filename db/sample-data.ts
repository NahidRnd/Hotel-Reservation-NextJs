import { hashSync } from "bcrypt-ts-edge";

const sampleData = {

    users: [
    {
      name: 'Nahid Admin',
      email: 'nahid@mail.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Kamal Demir',
      email: 'ddd@mail.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
    room: [
    {
      name: "Standard Queen Room",
      type: "Standard",
      price: 89.99,
      capacity: 2,
      images: [
        "/leg1.jpg",
        "/leg2.jpg",
        "/leg3.jpg"
      ],
      hotelId: "785bca9b-e365-4959-844d-0f1ad3af62b9"
    },
    {
      name: "Executive Twin Room",
      type: "Executive",
      price: 129.99,
      capacity: 2,
      images: [
        "/lit1.jpg",
        "/lit2.jpg"
      ],
      hotelId: "785bca9b-e365-4959-844d-0f1ad3af62b9"
    },
    {
      name: "Family Suite",
      type: "Suite",
      price: 229.99,
      capacity: 5,
      images: [
        "/jw7.jpg",
        "/jw8.jpg",
        "/jw6.jpg"
      ],
      hotelId: "785bca9b-e365-4959-844d-0f1ad3af62b9"
    },
    {
      name: "Panoramic Skyline Room",
      type: "Deluxe",
      price: 199.99,
      capacity: 2,
      images: [
        "/leg4.jpg",
        "/leg5.jpg"
      ],
      hotelId: "827253e9-c947-49dd-9692-abd819ea8a55"
    },
    {
      name: "Budget Single Room",
      type: "Economy",
      price: 59.99,
      capacity: 1,
      images: [
        "/man2.jpg"
      ],
      hotelId: "827253e9-c947-49dd-9692-abd819ea8a55"
    },
    {
      name: "Executive Twin Room",
      type: "Executive",
      price: 88.99,
      capacity: 2,
      images: [
        "/ele7.jpg",
        "/ele9.jpg"
      ],
      hotelId: "8cabb781-cf73-4793-95ea-84cc7f3b35a3"
    },
    {
      name: "Family Suite",
      type: "Suite",
      price: 152.99,
      capacity: 5,
      images: [
        "/ele2.jpg",
        "/ele5.jpg"
      ],
      hotelId: "8cabb781-cf73-4793-95ea-84cc7f3b35a3"
    },
    {
      name: "Executive Twin Room",
      type: "Executive",
      price: 129.99,
      capacity: 2,
      images: [
        "/baru2.jpg",
        "/baru3.jpg"
      ],
      hotelId: "930852a0-0e26-48a2-83ea-ffe15a260892"
    },
  ],
  
  city: [
    {
        //id: '1001',
        name: 'Istanbul'
    },
    {
        //id: '1002',
        name: 'Berlin'
    },
    {
        //id: '1003',
        name: 'Paris'
    }
  ],

    hotel: [
        {
            name: 'Smoothie Stay',
            description: 'A juicy blend of comfort and color.',
            coverImage: '/room-1.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 4.8,
            cityId: '397e5cde-64ca-46fc-b979-f66e9c3f62c9',
            // amenities: {
            //     connect: [
            //         { id: '40ffaaf1-7864-4f81-b669-c56343f275e7' },
            //         {
            //             id: '129c57b1-8141-48a8-b833-aa57d962cd99'
            //         },
            //         {
            //             id: '037aa77a-74a1-4633-ab40-a82a80fc0c98'
            //         },
            //         {
            //             id: '4b10c162-30b6-497e-a648-af1392280c00'
            //         }
            //     ],
            // },
        },
        {
            name: 'Vakko Hotel and Residence',
            description: 'Vakko Hotel and Residence features a fitness center, terrace, a restaurant and bar in Istanbul. A sauna and a car rental service are available for guests. The property provides a 24-hour front desk, a shuttle service, room service and free WiFi throughout the property. The hotel will provide guests with air-conditioned rooms offering a desk, a coffee machine, a fridge, a dishwasher, a safety deposit box, a flat-screen TV, a balcony and a private bathroom with a bidet. Every room has an electric tea pot, while some rooms will provide you with a patio and others also provide guests with city views. All guest rooms in Vakko Hotel and Residence are equipped with free toiletries and an iPad.A continental, vegetarian or vegan breakfast is served at the property. Popular points of interest near the accommodation include Dolmabahce Palace, Istanbul Congress Center and Taksim Metro Station. Istanbul Airport is 21 miles away.',
            coverImage: '/room-2.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 4.6,
            cityId: '907807f8-157f-4317-a93d-adcbd395c891',
            amenities: {
                connect: [
                    { id: '40ffaaf1-7864-4f81-b669-c56343f275e7' },
                    {
                        id: '947d4c5c-2a59-485b-8772-9a13f79e3024'
                    },
                    {
                        id: 'b7ad5542-88d3-49db-abca-7c171709d34c'
                    },
                    {
                        id: 'e82eb48f-edac-48af-a575-197049c57298'
                    }
                ],
            },
        },
        {
            name: 'Mandarin Oriental Bosphorus',
            description: 'Mandarin Oriental Bosphorus, Istanbul features a fitness center, a garden and a sun terrace with swimming pool and buffet breakfast in Istanbul. Well situated in the Besiktas district, this hotel provides a shared lounge, as well as a sauna and a hot tub. The property has a kids club, room service and currency exchange for guests. Free WiFi is available to all guests, while selected rooms will provide you with a balcony.At the hotel you will find a restaurant serving Italian, Mediterranean and Asian cuisine. Vegetarian, dairy-free and halal options can also be requested.Mandarin Oriental Bosphorus, Istanbul offers 5-star accommodations with a hot spring bath and playground.Speaking Arabic, German, English and French at the reception, staff are always on hand to help.Dolmabahce Palace is 2.6 miles from the accommodation, while Dolmabahce Clock Tower is 3.7 miles away. Istanbul Airport is 24 miles from the property.',
            coverImage: '/room-3.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 3.8,
            cityId: '907807f8-157f-4317-a93d-adcbd395c891',
            amenities: {
                connect: [
                    { id: '40ffaaf1-7864-4f81-b669-c56343f275e7' },
                    {
                        id: '947d4c5c-2a59-485b-8772-9a13f79e3024'
                    },
                    {
                        id: 'b7ad5542-88d3-49db-abca-7c171709d34c'
                    },
                ],
            },
        },
        {
            name: 'Çırağan Palace',
            description: 'Well situated in the center of Istanbul, Çırağan Palace Kempinski Istanbul provides air-conditioned rooms with free WiFi, free private parking and room service. 1.1 miles from Dolmabahce Palace and 2.2 miles from Dolmabahce Clock Tower, the property has a garden and a bar. The hotel has a fitness center, year-round outdoor pool and terrace, and guests can dine in the restaurant. All rooms come with a safety deposit box, while selected rooms will provide you with a balcony. The breakfast offers buffet, continental or American options. Speaking Arabic, German, English and French at the reception, staff will be happy to provide guests with practical information on the area. Istanbul Congress Center is 2.7 miles from the hotel, while Taksim Metro Station is 2.8 miles from the property. Istanbul Airport is 23 miles away, and the property offers a paid airport shuttle service.',
            coverImage: '/room-3.jpg',
            gallery: ['/vvv1.jpg','/vvv2.jpg'],
            rating: 3.8,
            cityId: '907807f8-157f-4317-a93d-adcbd395c891',
            amenities: {
                connect: [
                    { id: '40ffaaf1-7864-4f81-b669-c56343f275e7' },
                    {
                        id: '947d4c5c-2a59-485b-8772-9a13f79e3024'
                    },
                    
                ],
            },
        }
    ],
    service: [
        { name: 'Free WiFi', icon: 'wifi' },
        { name: 'Smoking area', icon: 'smoking_rooms' },
        {
    name:     "Airport shuttle (free)",
    icon: "flight_land",
        },
    {
    name:     "Non-smoking rooms",
    icon: "smoke_free",
    
},
    {
    name:     "Restaurant",
    icon: "restaurant",
    
},
    {
    name:     "Spa",
    icon: "spa",
    
},
    {
    name:     "Fitness center",
    icon: "fitness_center",
    
},
    {
    name:     "Breakfast",
    icon: "free_breakfast",
    
},
    {
    name:     "Bar",
    icon: "local_bar",
    
},
    {
    name:     "Parking on site",
    icon: "local_parking",
    
},
    {
    name:     "Family rooms",
    icon: "family_restroom",
},
    {
    name:     "Room service",
    icon: "room_service",
},
    {
    name:     "Laundry",
    icon: "local_laundry",
},
    {
    name:     "Baggage storage",
    icon: "luggage",
},
    {
    name:     "Heating",
    icon: "heat_pump",
},
    {
    name:     "Terrace",
    icon: "deck",
},
    {
    name:     "Private Parking",
    icon: "car_rental",
},
    {
    name:     "2 swimming pools",
    icon: "pool",
},
    {
    name:     "Free parking",
    icon: "no_crash",
},
    {
    name:     "Tea/Coffee Maker" ,
    icon: "coffee_maker",
}
    ]
};

export default sampleData;
