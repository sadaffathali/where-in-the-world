import Vue from "vue";

export default () => {
  Vue.filter("numberFormatter", function (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
};
