import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData = pgTable('storyData', {
    id:serial('id').primaryKey(),
    storySubject:text('storySubject'),
    storyType:varchar('storyType'),
    ageGroup:varchar('ageGroup'),
    imageType:varchar('imageType'),
    output:json('output'),
    coveredImage:varchar('coverImage')
});