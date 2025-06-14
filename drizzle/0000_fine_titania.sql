DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('active', 'inactive', 'archived');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"name" text NOT NULL,
	"status" "status" NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"stock" integer NOT NULL,
	"available_at" timestamp NOT NULL
);
