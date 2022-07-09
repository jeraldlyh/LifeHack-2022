import { LocationObjectCoords } from "expo-location";

export type TCurrentLocation = LocationObjectCoords & {
    address: string;
};

export type TSection = {
    key: number;
    metadata?: any;
};

export type TSectionProps = {
    currentLocation: TCurrentLocation;
    section: TSection;
    setSection: (value: TSection) => void;
};

export type TNearestBin = {
    latitude: string;
    longitude: string;
    distance: number;
    address: string;
    location: string | null;
    notes?: string;
};

export type TCoordinates = {
    longitude: string;
    latitude: string;
    notes?: string;
};
