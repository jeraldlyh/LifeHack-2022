import React from "react";

export type TModalProp = {
    handleDismiss: () => void;
    body: React.ReactNode;
};

export type TCompetition = {
    course: string;
    difficulty: string;
    amount: string;
};

export enum EDifficulty {
    Easy = "Easy",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
}
