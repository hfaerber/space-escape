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
    error: false,
  },
  created () {
    this.getDailyImages(this.api, this.findStartDate())
      .then(data => {
        this.images = this.cleanData(data).reverse();
      })
      .catch(err => this.error = true)
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
    },
    findStartDate: () => {
      let today = new Date();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();
      if (mm < 10) {
        mm = `0${mm}`;
      }
      return `${yyyy}-${mm}-01`
    }
  }
})

// Code to control display/functionaity of 'BackToToday' button
topbutton = document.getElementById("top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function goToToday() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
