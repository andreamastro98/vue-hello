const { createApp } = Vue

  createApp({
    data() {
      return {
        //variabili vue 3
        message: 'Hello Vue!',
        message2: '<h2> Prova inserimento h2 direttamente dai data </h2>',
        titleColor: "text-primary",
        valoreInput: "",
        immagine: "https://picsum.photos/id/237/200/300"
      }
    },
    methods: {
        //funzioni vue 3
        changeColor() {
            if ( this.titleColor == "text-primary"){
                this.titleColor = "text-danger"
            } else {
                this.titleColor = "text-primary"
            }
        }

    }
  }).mount('#app')
