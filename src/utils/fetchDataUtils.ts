
const ytApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11f6926eedmshcb72d26a5c1ed22p145c4cjsn77082c63295d',
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
}

const youtube138Options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11f6926eedmshcb72d26a5c1ed22p145c4cjsn77082c63295d',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

// fetch a video info by videoId
export const fetchVideoDetail = async (videoId: any) => {
  const video = await fetch(`https://youtube138.p.rapidapi.com/video/details/?id=${videoId}`, youtube138Options)
  return video;
}