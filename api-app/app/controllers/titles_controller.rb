class TitlesController < ApiController
  def index
    @titles = Title.all
    render json: @titles
  end

  def show
    @title = Title.find(params[:id])
    render json: @title.to_json
  end

  def create
    @title = Title.create(title_params)
    if @title.save
      render json: @title
    else
      render json: { errors: { message: "Something went wrong" }}
    end
  end

  def destroy
    @title = Title.find(title_params[:id])
    if @title.destroy
      render json: { message: "Deleted" }
    else
      render json: { errors: { message: "Something went wrong" }}
    end
  end

  private

  def title_params
    params.require(:title).permit(:id, :name, :summary, :rank, :episodes, :categories, :season)
  end
end
