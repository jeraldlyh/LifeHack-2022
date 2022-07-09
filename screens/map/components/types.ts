import { LocationObjectCoords } from "expo-location";

export type TCurrentLocation = LocationObjectCoords & {
    address: string;
};

export type TSectionProps = {
    currentLocation: TCurrentLocation;
    setSection: (value: number) => void;
};

export type TNearestBin = {
    latitude: string;
    longitude: string;
    distance: number;
    address: string;
    location: string | null;
};

export type TCoordinates = {
    longitude: string;
    latitude: string;
};
