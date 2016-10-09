class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
  end

  def show
    @appointment = Appointment.find(params[:id])
  end

  def new
    @appointment = Appointment.new
    @patients = Patient.all
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @patient = Patient.find(appointment_params[:patient_id])
    redirect_to patient_path(@patient.id)
  end
  
  def edit
    @appointment = Appointment.find(params[:id])
    @patients = Patient.all
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update(appointment_params)
    

  end

  def destroy
     @appointment = Appointment.find(params[:id])
     @appointment.destroy
     redirect_to appointments_path
  end

  private

  def appointment_params
    params.require(:appointment).permit(:doctor, :patient_id, :datetime)
  end


end
