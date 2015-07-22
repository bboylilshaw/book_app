class BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books if params[:format] == "json"
  end
end
