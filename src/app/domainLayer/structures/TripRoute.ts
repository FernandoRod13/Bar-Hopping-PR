export class TripRoute {
    tripStopsIds: [String]; // the ids of the Partners


    constructor(tripsStopsIds: [string]) {
        this.tripStopsIds = tripsStopsIds;
    }

    parseToJSON(): any {
        var tripRoute = {
            tripsStopIds: this.tripStopsIds
        };
        return tripRoute;
    }

}

