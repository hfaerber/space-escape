Vue.component('dailyimage', {
  props: ['image'],
  template: `
    <section class='daily-container'>
      <header class='daily-header'>
        <p>{{ image.title }}</p>
        <p>{{ image.date }}</p>
      </header>
      <img class='image' :src="image.url"></img>
    </section>`,
  data: function () {
    return {
      dailyimage: this.image
    }
  },
});

var app = new Vue({
  el: '#app',
  data: {
    api: 'jq2n1ETd4APk53HUGfnypIpPwz7Q84Q6CjJAbjiT',
    images: [],
    title: 'TEST TITLE FROM APP VUE',
    date: 'TEST DATE PLEASE'
  },
  created () {
    this.getDailyImages(this.api, '2020-02-01')
      .then(data => {
        // console.log(data)
        this.images = this.cleanData(data).reverse();
        // console.log('img', this.images)
      })
  },
  methods: {
    cleanData: (data) => {
      return data.map(day => {
        return {
          date: day.date,
          url: day.url,
          title: day.title,
          explanation: day.explanation,
          copyright: day.copyright ? day.copyright : null
        }
      })
    },
    getDailyImages: async (api, date) => {
      const url = date ?
      `https://api.nasa.gov/planetary/apod?api_key=${api}&start_date=${date}` :
      `https://api.nasa.gov/planetary/apod?api_key=${api}`;
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('Something went wrong')
      }
      const imageData = await response.json();
      return imageData
    }
  }
})
