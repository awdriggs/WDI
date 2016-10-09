class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :doctor
      t.references :patient
      t.datetime :datetime
      t.timestamps
    end
  end
end
