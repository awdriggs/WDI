# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150730230238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: true do |t|
    t.string "name"
    t.text   "img_url"
    t.text   "description"
    t.string "birth_year"
    t.string "nationality"
  end

  create_table "artists_museums", id: false, force: true do |t|
    t.integer "artist_id"
    t.integer "museum_id"
  end

  create_table "museums", force: true do |t|
    t.string "name"
    t.text   "description"
    t.string "address"
    t.string "img_url"
  end

  create_table "paintings", force: true do |t|
    t.string  "title"
    t.text    "img_url"
    t.string  "year_made"
    t.integer "artist_id"
  end

end
