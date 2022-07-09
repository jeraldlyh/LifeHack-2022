import { getFirestore, setDoc, doc, Timestamp, getDoc } from "firebase/firestore";
import firebaseApp from "../database/firebase";
import { TCoordinates, TNearestBin, TSectionProps } from "../screens/map/components/types";
import { TNearestBinsDto } from "./types";
import moment from "moment";
import { getDistance } from "geolib";
import * as Location from "expo-location";
import { AddressHelper } from "../utils";
import { RECYCLE_BIN_COORDINATES } from "../common/constants";
import { sampleSize } from "lodash";

const saveNearestBins = async (userId: string, nearestBins: TNearestBinsDto) => {
    const db = getFirestore(firebaseApp);

    await setDoc(doc(db, "map", userId), nearestBins);
};

const getNearestBins = async (userId: string): Promise<TNearestBinsDto> => {
    const db = getFirestore(firebaseApp);

    const result = await getDoc(doc(db, "map", userId));

    if (result.exists()) {
        return result.data() as TNearestBinsDto;
    }

    return null;
};

const loadNearestBins = async (userId: string, playerCoordinates: Pick<TSectionProps, "currentLocation">) => {
    const coordinates = sampleSize(RECYCLE_BIN_COORDINATES, 25);
    const existingBins = await getNearestBins(userId);

    // Return existing data to prevent API rate limits
    if (!!existingBins) {
        const lastUpdated = moment(existingBins.lastUpdated.toDate());
        const now = moment(new Date());

        if (now.diff(lastUpdated, "minute") < 15) {
            return existingBins;
        }

        const bins = await getLatestBins(coordinates, playerCoordinates);
        const dto = {
            bins,
            lastUpdated: Timestamp.now(),
        };
        await saveNearestBins(userId, dto);

        return dto;
    }

    const bins = await getLatestBins(coordinates, playerCoordinates);
    const dto = {
        bins,
        lastUpdated: Timestamp.now(),
    };
    await saveNearestBins(userId, dto);

    return dto;
};

const getLatestBins = async (
    coordinates: TCoordinates[],
    playerCoordinates: Pick<TSectionProps, "currentLocation">,
) => {
    return await Promise.all(
        coordinates.map(async (coordinate) => {
            const addresses = await Location.reverseGeocodeAsync({
                longitude: parseFloat(coordinate.longitude),
                latitude: parseFloat(coordinate.latitude),
            });

            return {
                longitude: coordinate.longitude,
                latitude: coordinate.latitude,
                distance: getDistance(
                    {
                        latitude: playerCoordinates.currentLocation.latitude,
                        longitude: playerCoordinates.currentLocation.longitude,
                    },
                    {
                        latitude: coordinate.latitude,
                        longitude: coordinate.longitude,
                    },
                ),
                address: AddressHelper.formatAddress(addresses[0]),
                location: addresses[0].name,
            };
        }),
    );
};

export const MapService = {
    loadNearestBins,
};
