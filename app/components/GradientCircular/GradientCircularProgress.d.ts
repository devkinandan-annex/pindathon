import React from "react";
export interface GradientCircularProgressProps {
    progress: number;
    size: number;
    startColor: string;
    endColor: string;
    middleColor: string;
    id?: string;
    strokeWidth?: number;
    emptyColor?: string;
    withSnail?: boolean;
}
declare const GradientCircularProgress: React.FunctionComponent<GradientCircularProgressProps>;
export default GradientCircularProgress;
