let recorder = null;
let chunks = [];

export async function startRecording() {
    if (recorder) return; // Avoid multiple recorders

    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
    });

    recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    chunks = [];

    recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            chunks.push(event.data);
        }
    };

    recorder.onstop = () => {
        console.log("Recording stopped.");
    };

    recorder.start();
    console.log("Recording started...");
}

export function stopRecording() {
    if (recorder && recorder.state === "recording") {
        recorder.stop();
        recorder = null;
        console.log("Recording stopped.");
    }
}

export function getRecordedBlob() {
    return new Blob(chunks, { type: 'video/webm' });
}
