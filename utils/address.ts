import { LocationGeocodedAddress } from "expo-location";

const formatAddress = (address: LocationGeocodedAddress) => {
    let output = `${address.district} ${address.street}`;

    if (address.streetNumber) {
        output += ` St.${address.streetNumber}`;
    }

    if (address.postalCode) {
        output += ` ${address.postalCode}`;
    }
    return output;
};

export const AddressHelper = {
    formatAddress,
};
