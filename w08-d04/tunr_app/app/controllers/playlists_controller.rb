class PlaylistsController < ApplicationController
  before_action :authenticate

  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
    @songs = Song.all
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      redirect_to playlist_path(@playlist)
    else
      redirect_to new_playlist_path
    end

  end

  def edit
    @playlist = Playlist.find(params[:id])

  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update(playlist_params)
    redirect_to playlist_path(@playlist)
  end

  def destroy
  	@playlist = Playlist.find(params[:id])
  	@playlist.destroy
  	redirect_to playlists_path
  end

  def add_song
  	playlist = Playlist.find(params[:id])
  	song = Song.find(params[:song_id])
  	playlist.add_song(song)
  	redirect_to playlist_path(playlist)
  end

  def remove_song
  	playlist = Playlist.find(params[:id])
  	song = Song.find(params[:song_id])
  	playlist.remove_song(song)
  	redirect_to playlist_path(playlist)
  end

  private

  def playlist_params
  	params.require(:playlist).permit(:name)
  end

end