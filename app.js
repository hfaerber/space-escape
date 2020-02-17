Vue.component('dailyimage', {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  template: `
    <section class='daily-container'>
      <p class='blueP'>HELLO WORLD!</p>
      <p class='blueP'>{{ date }}</p>
      <p class='blueP'>{{ title }}</p>
      <img class='image' :src="url"></img>
    </section>`,
  data() {
    return {
      date: "2020-02-16",
      explanation: "To some, this huge nebula resembles a person's head surrounded by a parka hood. In 1787, astronomer William Herschel discovered this unusual planetary nebula: NGC 2392. More recently, the Hubble Space Telescope imaged the nebula in visible light, while the nebula was also imaged in X-rays by the Chandra X-ray Observatory. The featured combined visible-X ray image, shows X-rays emitted by central hot gas in pink. The nebula displays gas clouds so complex they are not fully understood. NGC 2392 is a double-shelled planetary nebula, with the more distant gas having composed the outer layers of a Sun-like star only 10,000 years ago. The outer shell contains unusual light-year long orange filaments. The inner filaments visible are being ejected by strong wind of particles from the central star. The NGC 2392 Nebula spans about 1/3 of a light year and lies in our Milky Way Galaxy, about 3,000 light years distant, toward the constellation of the Twins (Gemini).",
      hdurl: "https://apod.nasa.gov/apod/image/2002/NGC2392_HubbleSchmidt_960.jpg",
      media_type: "image",
      service_version: "v1",
      title: "NGC 2392: Double-Shelled Planetary Nebula",
      url: "https://apod.nasa.gov/apod/image/2002/NGC2392_HubbleSchmidt_960.jpg"
    }
  },
});

var app = new Vue({
  el: '#app',
})