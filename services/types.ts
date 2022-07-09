import { Timestamp } from "firebase/firestore";
import { TNearestBin } from "../screens/map/components/types";

export type TNearestBinsDto = { bins: TNearestBin[]; lastUpdated: Timestamp } | null;
