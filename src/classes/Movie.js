export default class Movie {
    constructor(id, title, description, slogan, releaseDate, imgUrl, genres, budget, revenue, votesAvg, voutesCount,runtime) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.slogan = slogan;
        this.releaseDate = releaseDate;
        this.imgUrl = imgUrl;
        this.genres = genres;
        this.budget = budget;
        this.revenue = revenue;
        this.votesAvg = votesAvg;
        this.voutesCount = voutesCount; 
        this.runtime = runtime;
    }
}