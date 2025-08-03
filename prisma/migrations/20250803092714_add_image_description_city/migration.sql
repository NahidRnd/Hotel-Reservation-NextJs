-- AlterTable
ALTER TABLE "City" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the ',
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY['t_amsterdam.jfif']::TEXT[];
