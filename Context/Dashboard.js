import React, { createContext } from 'react';

export const DashboardContext = createContext();

export default function Dashboard(props) {

    const ExchangedData = { };

    return (
        <DashboardContext.Provider value={ExchangedData}>
            {props.children}
        </DashboardContext.Provider>
    );
}