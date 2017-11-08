const API_URL = "https://kitsu.io/api/edge/anime"
console.log(API_URL)

const TitleService = {
  fetchTitles: () => {
    return fetch(`${API_URL}`)
      .then(response => response.json())
  },

  fetchTitleShow: (title) => {
    return fetch(`${API_URL}` + title.id, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      },
    }).then(response => response.json())
  },


}

export default TitleService;
