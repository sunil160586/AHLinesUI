import { Headers } from '@angular/http';

export class AppConfig {
    apiEndPoint: string = 'http://localhost:58335/';
    headers: Headers = new Headers({ 
        'Content-Type': 'application/json; charset=utf-8'
    });
};

export class HomeConfig {
    getBannerSlides: string = 'api/home/bannerslides';
    getLatestNews: string = 'api/home/latestnews';
    getMoreLatestNews: string = 'api/home/morelatestnews';
    getTrendingBreakingNews: string = 'api/home/trendingbreakingnews';
    getLatestTrendingNews: string = 'api/home/latesttrendingnews';
    getMoreTrendingNews: string = 'api/home/moretrendingnews';
    getTabLatestGallery: string = 'api/home/tablatestgallery';
    getTabLatestVideos: string = 'api/home/tablatestvideos';
    getTabMoreNews: string = 'api/home/tabmorenews';
    getTabMostRead: string = 'api/home/tabmostread';
    getEntertainmentNews: string = 'api/home/entertainmentnews';
    getMarketWatch: string = 'api/home/marketwatch';
    getPhotoGallery: string = 'api/home/photogallery';
};

export class NewsConfig {
    getSpecialBreakingNews: string = 'api/news/special/breaking';
    getSpecialLatestNews: string = 'api/news/special/latest';
    getSpecialNews: string = 'api/news/special';
    getSeemandhraBreakingNews: string = 'api/news/seemandhra/breaking';
    getSeemandhraLatestNews: string = 'api/news/seemandhra/latest';
    getSeemandhraNews: string = 'api/news/seemandhra';
    getTelanganaBreakingNews: string = 'api/news/telangana/breaking';
    getTelanganaLatestNews: string = 'api/news/telangana/latest';
    getTelanganaNews: string = 'api/news/telangana';
    getSportsBreakingNews: string = 'api/news/sports/breaking';
    getSportsLatestNews: string = 'api/news/sports/latest';
    getSportsNews: string = 'api/news/sports';
    getNationalBreakingNews: string = 'api/news/national/breaking';
    getNationalLatestNews: string = 'api/news/national/latest';
    getNationalNews: string = 'api/news/national';
    getWorldBreakingNews: string = 'api/news/world/breaking';
    getWorldLatestNews: string = 'api/news/world/latest';
    getWorldNews: string = 'api/news/world';
    getNRIBreakingNews: string = 'api/news/nri/breaking';
    getNRILatestNews: string = 'api/news/nri/latest';
    getNRINews: string = 'api/news/nri';
    getCrimeWatchBreakingNews: string = 'api/news/crimewatch/breaking';
    getCrimeWatchLatestNews: string = 'api/news/crimewatch/latest';
    getCrimeWatchNews: string = 'api/news/crimewatch';
    getBusinessBreakingNews: string = 'api/news/business/breaking';
    getBusinessLatestNews: string = 'api/news/business/latest';
    getBusinessNews: string = 'api/news/business';
    getFashionAndLifeStyleBreakingNews: string = 'api/news/fashionandlifestyle/breaking';
    getFashionAndLifeStyleLatestNews: string = 'api/news/fashionandlifestyle/latest';
    getFashionAndLifeStyleNews: string = 'api/news/fashionandlifestyle';
    getScienceAndTechnologyBreakingNews: string = 'api/news/scienceandtechnology/breaking';
    getScienceAndTechnologyLatestNews: string = 'api/news/scienceandtechnology/latest';
    getScienceAndTechnologyNews: string = 'api/news/scienceandtechnology';
    getHealthAndLivingBreakingNews: string = 'api/news/healthandliving/breaking';
    getHealthAndLivingLatestNews: string = 'api/news/healthandliving/latest';
    getHealthAndLivingNews: string = 'api/news/healthandliving';
    getNewsArticle: string = 'api/news/article/{articleId}';
};

export class MoviesConfig {
    getLatestMovieNewsAndGossips: string = 'api/movies/latestmovienewsandgossips';
    getMovieVideos: string = 'api/movies/videos';
    getLatestMovieAudios: string = 'api/movies/latestmovieaudios';
    getMovieNewsAndGossips: string = 'api/movies/movienewsandgossips';
    getMovieArticle: string = 'api/movies/news/articleId/{articleId}';
    getLatestMovieReviews: string = 'api/movies/latestmoviesreviews';
    getMoviesReviews: string = 'api/movies/moviesreviews';
};

export class GalleryConfig {
    getCelebritiesGallery: string = 'api/gallery/celebrities/{celebrityType}';
    getMoviesGallery: string = 'api/gallery/movies';
    getEventsGallery: string = 'api/gallery/events';
    getWallpapersGallery: string = 'api/gallery/wallpapers';
    getActressGalleryList: string = 'api/gallery/actress/{actressId}';
    getActorGalleryList: string = 'api/gallery/actor/{actorId}';
    getMovieGalleryList: string = 'api/gallery/movie/{movieId}';
    getEventGalleryList: string = 'api/gallery/event/{eventId}';
    getWallPaperGalleryList: string = 'api/gallery/wallpaper/{wallpaperId}';
    getAllCelebritiesTitleNames: string = 'api/gallery/celebritiestitlenames/{celebrityType}';
    getAllMoviesTitleNames: string = 'api/gallery/moviestitlenames';
    getAllEventsTitleNames: string = 'api/gallery/eventstitlenames';
    getCelebritiesListBasedOnTitle: string = 'api/gallery/celebritieslistbasedontitle/{celebrityType}/{title}';
    getMoviesListBasedOnTitle: string = 'api/gallery/movieslistbasedontitle/{title}';
    getEventsListBasedOnTitle: string = 'api/gallery/eventslistbasedontitle/{title}';
};

export class VideosConfig {
    getLatestVideos: string = 'api/videos/latest';
    getPoliticalVideos: string = 'api/videos/political';
    getMoviesVideos: string = 'api/videos/movies';
    getSportsVideos: string = 'api/videos/sports';
    getOtherVideos: string = 'api/videos/others';
    getLatestVideoDetailsBasedOnId: string = 'api/videos/latest/{videoId}';
    getRemainingLatestVideos: string = 'api/videos/latest/remaining/{videoId}';
    getPoliticalVideoDetailsBasedOnId: string = 'api/videos/political/{videoId}';
    getRemainingPoliticalVideos: string = 'api/videos/political/remaining/{videoId}';
    getMovieVideoDetailsBasedOnId: string = 'api/videos/movies/{videoId}';
    getRemainingMoviesVideos: string = 'api/videos/movies/remaining/{videoId}';
    getSportsVideoDetailsBasedOnId: string = 'api/videos/sports/{videoId}';
    getRemainingSportsVideos: string = 'api/videos/sports/remaining/{videoId}';
    getOtherVideoDetailsBasedOnId: string = 'api/videos/others/{videoId}';
    getRemainingOtherVideos: string = 'api/videos/others/remaining/{videoId}';
    getMoreSportsVideos: string = 'api/videos/sports/morevideos';
    getMorePoliticalVideos: string = 'api/videos/political/morevideos';
    getMoreMoviesVideos: string = 'api/videos/movies/morevideos';
};

export class MetaKeysConfig {
    getActressGalleryMetaKeys: string = 'api/metakeys/pagename/actress';
    getActorsGalleryMetaKeys: string = 'api/metakeys/pagename/actors';
    getMoviesGalleryMetaKeys: string = 'api/metakeys/pagename/moviepics';
    getEventsGalleryMetaKeys: string = 'api/metakeys/pagename/events';
    getWallpapersGalleryMetaKeys: string = 'api/metakeys/pagename/wallpapers';
}