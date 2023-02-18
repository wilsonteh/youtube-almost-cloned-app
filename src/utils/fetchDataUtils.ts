
const youtubeV3Options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11f6926eedmshcb72d26a5c1ed22p145c4cjsn77082c63295d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const ytAPIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11f6926eedmshcb72d26a5c1ed22p145c4cjsn77082c63295d',
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

