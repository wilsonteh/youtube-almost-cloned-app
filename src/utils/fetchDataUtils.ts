
const youtubeV3Options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const ytAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
};

// fetch trending videos for the home page of youtube
export const fetchTrendingVideos = async () => {
	const res = await fetch('https://yt-api.p.rapidapi.com/trending?geo=MY', ytAPIOptions);
	const trendingVideos = await res.json();

	return trendingVideos.data;
}


// fetch a video detail by videoId
export const fetchVideoDetail = async (videoId: string) => {

	const [videoRes, commentsRes, relatedVideosRes] = await Promise.all([

		fetch(`https://youtube-v31.p.rapidapi.com/videos?part=part&id=${videoId}`, youtubeV3Options),
		fetch(`https://yt-api.p.rapidapi.com/comments?id=${videoId}&sort_by=top`, ytAPIOptions), 
		fetch(`https://yt-api.p.rapidapi.com/related?id=${videoId}`, ytAPIOptions), 

	]);

	const [video, comments, relatedVideos] = 
		await Promise.all([
			videoRes.json(), 
			commentsRes.json(), 
			relatedVideosRes.json()
		]);

	return {
		video: video.items[0], 
		comments: comments.data,
		relatedVideos: relatedVideos.data
	};
}

// fetch channel details & videos by channelId
export const fetchChannelDetail = async (channelId: string, sortBy: string = "newest") => {
	const res = await fetch(
		`https://yt-api.p.rapidapi.com/channel?id=${channelId}&sort_by=${sortBy}`, 
		ytAPIOptions
	);
	const channelData = await res.json();

	return channelData;

}

