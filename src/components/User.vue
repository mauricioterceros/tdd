<template>
  <div></div>
</template>

<script>
export default {
  name: "User",

  data() {
    return {
      name: "",
      lastName: ""
    };
  },

  methods: {
    saveUser() {
      if (this._validateData()) {
        // code
      }
    },
    _validateData() {
      return this.name !== "" && this.lastName !== "";
    }
  }
};
</script>
