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

ActiveRecord::Schema.define(version: 20150731191117) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cat_toys", force: :cascade do |t|
    t.integer "toyable_id"
    t.string  "toyable_type"
    t.string  "name"
  end

  add_index "cat_toys", ["toyable_type", "toyable_id"], name: "index_cat_toys_on_toyable_type_and_toyable_id", using: :btree

  create_table "lion_tamers", force: :cascade do |t|
    t.string  "name"
    t.integer "experience"
    t.boolean "living"
  end

  create_table "lion_tamers_lions", id: false, force: :cascade do |t|
    t.integer "lion_tamer_id"
    t.integer "lion_id"
  end

  create_table "lions", force: :cascade do |t|
    t.date    "birthdate"
    t.string  "name"
    t.text    "about"
    t.integer "weight"
    t.integer "health"
    t.text    "health_notes"
  end

  create_table "panthers", force: :cascade do |t|
    t.string  "name"
    t.integer "claw_length"
  end

end
