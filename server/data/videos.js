const dataStoreVideos = require('./store/videostore.json');
const featuredVideos = require('./store/featuredVideos.json');
const watchlistVideos = require('./store/watchlist.json');

class Video {
  constructor(allVideos, featuredIds, watchlistIds) {
    allVideos = allVideos || dataStoreVideos;
    featuredIds = featuredIds || featuredVideos;
    watchlistIds = watchlistIds || watchlistVideos;
    this.videos = allVideos;
    this.featuredIds = featuredIds;
    this.watchlistIds = watchlistIds;
  }
  
  videoById(id) {
    return this.videos.find( v => v.id === id );
  }
  
  featuredVideos() {
    return this.featuredIds.map(this.videoById);
  }
  
  watchlistVideos() {
    return this.watchlistIds.map(this.videoById);
  }
  
  search(searchTerm) {
    return this.videos.filter(v => {
      v.title.toLowerCase().includes(searchTerm.toLowerCase())
        || v.imageName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
  allVideos() {
    return this.videos;
  }
}

module.exports = Video;