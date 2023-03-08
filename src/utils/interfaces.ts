// define all the raw data types of the objects returned by the API 

interface Image {
  url: string, 
  width: number, 
  height: number 
}

export interface ChannelInfo {
  title: string, 
  description: string,
  thumbnail: Image[],
  image: {
    banner: Image[],
    tvBanner: Image[],
    mobileBanner: Image[]
  },
  subscriberCount: string,
  keywords: string[], 
  isFamilySafe: boolean,
  availableCountries: string[],
};

export interface ChannelVideo {
  id: string,
  title: string,
  description: string,
  viewCount: string,
  publishedText: string,
  lengthText: string,
  thumbnail: Image[],
  richThumbnail: Image[]
}