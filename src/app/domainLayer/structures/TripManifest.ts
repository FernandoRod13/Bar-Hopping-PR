import { TripGroup } from './TripGroup';

export class TripManifest {
    participants: [TripGroup];
    size: number;


    constructor(participants: [TripGroup], size: number) {
        this.participants = participants;
        this.size = size;
    }
    
}