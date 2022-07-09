import { LocationObjectCoords } from "expo-location";

export type TCurrentLocation = LocationObjectCoords & {
    address: string;
};

export type TSectionProps = {
    currentLocation: TCurrentLocation;
    setSection: (value: number) => void;
};
