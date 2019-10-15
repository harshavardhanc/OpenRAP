import { TelemetryService } from "./telemetryService";
export declare class TelemetryInstance extends TelemetryService {
    private databaseSdk;
    sessionId: string;
    constructor();
    send(events: any): void;
}