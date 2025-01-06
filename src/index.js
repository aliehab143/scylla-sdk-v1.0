class ScyllaSDK {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.recorder = null;
        this.chunks = [];
    }

    async start() {
        if (this.recorder) {
            console.warn("Recording already started.");
            return;
        }

        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" },
        });

        this.recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        this.chunks = [];

        this.recorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                this.chunks.push(event.data);
            }
        };

        this.recorder.onstop = () => {
            console.log("Recording stopped.");
        };

        this.recorder.start();
        console.log("Recording started...");
    }

    stop() {
        if (this.recorder && this.recorder.state === "recording") {
            this.recorder.stop();
            this.recorder = null;
            console.log("Recording stopped.");
        } else {
            console.warn("No recording in progress.");
        }
    }

    async uploadVideo(errorDetails = {}) {
        const blob = new Blob(this.chunks, { type: "video/webm" });

        if (blob.size > 0) {
            const formData = new FormData();
            formData.append("video", blob, "session-recording.webm");
            formData.append("errorDetails", JSON.stringify(errorDetails));

            try {
                const response = await fetch(`${this.apiUrl}/upload-video`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    console.log("Video uploaded successfully.");
                } else {
                    console.error("Failed to upload video:", response.statusText);
                }
            } catch (error) {
                console.error("Error uploading video:", error);
            }
        }
    }
}

export default ScyllaSDK;
