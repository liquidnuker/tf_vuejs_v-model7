new Vue({
  el: "#app",
  data: {
    message: "",
    showInput: false,
    revealMessage: false

  },
  methods: {
    writeMessage: function() {
      this.showInput = !this.showInput;
    },
    revealMessage2: function() {
      this.revealMessage = true
    }
  }
});

new Vue({
  el: "#app2",
  data: {
    message: ""
  }
});
