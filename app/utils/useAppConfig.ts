import React from "react";


export const  useAppConfig = () => {
    // logic to fetch global app config and store it
    // const devicesList = useGenericFetch("devices", "/devices");
    return {
        devices: {
            list: []
        },
        sleep: {
            enabled: true,
            
        },
        steps: {
            enabled: true,
        },
        vouchers: {
            enabled: true,
        },
        leaderboard: {
            enabled: true,
        },
        challenges: {

        },
        marketplace: {

        },
        user: {

        },
        permissions: {

        }
    }
}
export default useAppConfig;