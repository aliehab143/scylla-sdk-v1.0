import { stopRecording, getRecordedBlob } from './recording.js';
import { uploadVideo } from './uploader.js';

export function initErrorDetection(apiUrl) {
    window.onerror = (message, source, lineno, colno, error) => {
        console.error("Global error detected:", { message, source, lineno, colno, error });
        handleDetectedError({ message, source, lineno, colno, error }, apiUrl);
    };

    window.addEventListener("unhandledrejection", (event) => {
        console.error("Unhandled promise rejection:", event.reason);
        handleDetectedError({ reason: event.reason }, apiUrl);
    });
}

async function handleDetectedError(errorDetails, apiUrl) {
    stopRecording();
    const videoBlob = getRecordedBlob();

    if (videoBlob.size > 0) {
        console.log("Uploading error session video...");
        await uploadVideo(videoBlob, apiUrl, errorDetails);
    }
}
