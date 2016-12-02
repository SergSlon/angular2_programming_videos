/**
 * Provides a `Video` object
 */
export class Video{
    constructor(
        public id: Number,
        public title?: String,
        public publishedAt?: Date,
        public description?: String,
        public thumbnail?: String,
        public embedHtml?: String
    ) {}
}
