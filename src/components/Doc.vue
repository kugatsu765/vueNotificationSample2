<template>
  <div id="app">
    <form class="mb-4">
      <div class="flex flex-col my-4">
        <label>
          Position
          <span
            class="text-xs mx-2 text-gray-600"
          >Cannot be used after the first click button.</span>
        </label>
        
        <select
          class="h-8 bg-gray-200 shadow rounded mx-2 my-1 px-3"
          v-model="position"
          :disabled="buttonClicked"
        >
          <option v-for="position in positions" :key="position">
            {{
            position
            }}
          </option>
        </select>
      </div>
      <div class="flex flex-col my-4">
        <label>Title</label>
        <input type="text" class="h-8 bg-gray-200 shadow rounded mx-2 my-1 px-3" v-model="title">
      </div>
      <div class="flex flex-col my-4">
        <label>Message</label>
        <input type="text" class="h-8 bg-gray-200 shadow rounded mx-2 my-1 px-3" v-model="message">
      </div>

      <div class="flex flex-col my-4">
        <label>Timer</label>
        <input
          type="number"
          min="0"
          max="60"
          class="h-8 bg-gray-200 shadow rounded mx-2 my-1 px-3"
          v-model="timer"
        >
      </div>

      <div class="py-1">
        <input type="checkbox" class="bg-red-500 mr-2 leading-tight" v-model="infiniteTimer">
        <label>Infinite timer duration</label>
      </div>
      <div class="py-1">
        <input type="checkbox" class="bg-red-500 mr-2 leading-tight" v-model="showCloseIcn">
        <label>Show the close icon</label>
      </div>
      <div class="py-1">
        <input type="checkbox" class="bg-red-500 mr-2 leading-tight" v-model="showLeftIcn">
        <label>how the left icon</label>
      </div>
    </form>

    <button
      @click="notif('new');"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-blue-500 hover:bg-blue-700 hover:shadow text-white btn-light"
    >Primary</button>
    <button
      @click="notif('dark');"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-gray-800 hover:bg-gray-900 hover:shadow text-white btn-dark"
    >dark</button>
    <button
      @click="notif('success');"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-green-500 hover:bg-green-700 hover:shadow text-white btn-success"
    >success</button>
    <button
      @click="notif('error');"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-red-500 hover:bg-red-700 hover:shadow text-white btn-danger"
    >error</button>
    <button
      @click="notif('warning');"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-orange-500 hover:bg-orange-700 hover:shadow text-white btn-warning"
    >warning</button>
    <button
      @click="remove();"
      type="button"
      class="p-2 px-3 rounded mx-2 bg-purple-500 hover:bg-purple-700 hover:shadow text-white btn-dark"
    >Remove All</button>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {
      positions: [
        "topLeft",
        "topCenter",
        "topRight",
        "bottomLeft",
        "bottomCenter",
        "bottomRight"
      ],
      position: "bottomCenter",
      timer: 5,
      infiniteTimer: false,
      showLeftIcn: true,
      showCloseIcn: true,
      count: 0,
      buttonClicked: false,
      title: "Vue Notification 🔥",
      message:
        "Lorsque l’expérience de l’utilisateur est supérieure à l’attente de l’utilisateur, la confiance est établie."
    };
  },
  computed: {
    getConfig: function() {
      return {
        position: this.position,
        timer: this.timer,
        infiniteTimer: this.infiniteTimer,
        showLeftIcn: this.showLeftIcn,
        showCloseIcn: this.showCloseIcn,
        title: this.title,
        message: this.message
      };
    }
  },
  methods: {
    notif: function(type) {
      var { message, ...otherConfig } = this.getConfig;
      this.count++;
      this.buttonClicked = true;
      this.$notification[type](message + " " + this.count, otherConfig);
    },
    remove: function() {
      this.$notification.removeAll();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 4px;
}

.vn-container p {
  font-size: 14px;
}
</style>
