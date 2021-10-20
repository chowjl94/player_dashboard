import httpClient from "./httpclient";

const VIDEOS = "/api/videos";

const getVideos = () => {
	return httpClient.get(VIDEOS, {
		params: {
			order: "asc",
		},
	});
};

const postVideo = (matchId, desc, video , handleUploadProgress) => {
	var formData = new FormData();
	var imagefile = document.querySelector("#file");
	formData.append("matchId", matchId);
	formData.append("desc", desc);
	formData.append("file", video);
	const options = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		onUploadProgress: handleUploadProgress,
	};
	return httpClient.post(VIDEOS, formData, options);
};

const deleteVideo = (videoId) => {
	return httpClient.delete(`/api/videos/${videoId}`);
}



export { getVideos, postVideo, deleteVideo };

