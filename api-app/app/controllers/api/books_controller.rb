class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    render json: Book.all
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book
    else
      render json: { message: book.errors }, status: 400
    end
  end

  def show
    render json: @book
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: { message: @book.errors }, status: 400
    end
  end

  def destroy
   @book = Book.find(book_params[:id])
   if @book.delete
      render json: Book.all, status: 412
    else
      render json: { message: "book deleted", success: 'ok'}
    end
   #if @book.destroy
    # render json: { message: "Deleted" }
   #else
    # render json: { errors: { message: "The Book Failed to Destroy" }}
   #end
  end

  private

    def set_book
      @book = Book.find_by(id: params[:id])
    end

    def book_params
      params.require(:book).permit(:id, :name, :author, :img_url, :rating)
    end

end
