
import {TripManifest} from './TripManifest';
import {TripRoute} from './TripRoute';

export class Trip{
    id: string;
    capacity: number;
    date: Date;
    manifest: TripManifest;
    tripRoute: TripRoute;
    type: string;
}