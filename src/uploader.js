export async function uploadVideo(videoBlob, apiUrl, errorDetails) {
    const formData = new FormData();
    formData.append('video', videoBlob, 'session-error.webm');
    formData.append('errorDetails', JSON.stringify(errorDetails));

    try {
        const response = await fetch(`${apiUrl}/upload-video`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log("Video uploaded successfully.");
        } else {
            console.error("Failed to upload video:", response.statusText);
        }
    } catch (err) {
        console.error("Error uploading video:", err);
    }
}
