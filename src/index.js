import { startRecording, stopRecording } from './recording.js';
import { initErrorDetection } from './error-detection.js';

export default class ScyllaSDK {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    start() {
        startRecording();
        initErrorDetection(this.apiUrl);
    }

    stop() {
        stopRecording();
    }
}
