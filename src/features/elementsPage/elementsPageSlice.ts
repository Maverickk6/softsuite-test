import { createSlice } from '@reduxjs/toolkit'


type Element = {
    "name": string,
    "description": string,
    "payRunId": number,
    "payRunValueId": number,
    "classificationId": number,
    "classificationValueId": number,
    "categoryId": number,
    "categoryValueId": number,
    "reportingName": string,
    "processingType": string,
    "status": string,
    "prorate": string,
    "effectiveStartDate": string,
    "effectiveEndDate": string,
    "selectedMonths": string[],
    "payFrequency": string,
}

interface ElementPageType {
    loading: boolean;
    error: null | string;
    data: Element[] | null;
}


export const initialState = {
    loading: false,
    error: null,
    data: [
        {
            name: "Eddy",
            description: "A nice description",
            payRunId: 2343,
            payRunValueId: 234323,
            classificationId: 1343,
            classificationValueId: 134313,
            categoryId: 4334,
            categoryValueId: 434443,
            reportingName: 'customer',
            processingType: 'customer purchase',
            status: 'pending',
            prorate: 'fixed prorate',
            effectiveStartDate: '2015-03-24',
            effectiveEndDate: '2015-06-16',
            selectedMonths: ['April', 'May'],
            payFrequency: 'regular'
        },]
} as ElementPageType;


export const elementPageSlice = createSlice({
    name: 'elementPage',
    initialState,
    reducers: {

    },
    // extraReducers(builder) {

    // }
});