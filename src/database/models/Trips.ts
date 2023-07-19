export interface Trip {
    name: string;
    dateFrom: Date;
    dateTo: Date;
    availability: string;
    country: string;
    image: string;
    description: string;
    itinerary?: Array<Itinerary>;
    price?: TripPrice;
    practicalInformation: string;
}

interface Flight {
    date: Date;
    flightID: string;
    departure: string;
    departureTime: string;
    arrival: string;
    arrivalTime: string;
}

interface Itinerary {
    itineraryDay: string;
    itineraryDescription: string;
}

interface TripPrice {
    tripPrice: number;
    suplements: Array<PriceSuplement>;
    totalPrice: number;
}

interface PriceSuplement {
    priceSuplementDescription: string;
    priceSuplement: number;
}
