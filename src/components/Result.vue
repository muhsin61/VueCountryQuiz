<template>
  <div class="box">
    <h1 class="header">Country Quiz</h1>
    <div class="box-item">
      <h1 class="result">Result</h1>
      <p class="resultText">
        You have got
        <strong class="resultNumber">{{ $store.state.score }}</strong> correct
        answer
      </p>
      <button @click="again">Try Again</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Result",
  methods: {
    again() {
      console.log("tekrar dene");
      this.$store.state.score = 0;
      this.$store.commit("creates", "change");
      this.$store.commit("change", "change");
    },
  },
};
</script>
<style scoped>
.box {
  position: relative;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
}
.box-item {
  text-align: center;
  width: 464px;
  height: 542px;
  background: #ffffff;
  border-radius: 24px;
  margin: auto;
}
.header {
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #f2f2f2;
  position: relative;
  left: -100px;
}
.result {
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #1d355d;
  padding-top: 150px;
}
.resultText {
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #1d355d;
}
.resultNumber {
  font-weight: normal;
  font-size: 28px;
  line-height: 27px;
  color: #13cc50;
}
button {
  width: 209px;
  height: 62px;
  border: 2px solid #1d355d;
  box-sizing: border-box;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #1d355d;
  cursor: pointer;
  background: white;
}
@media only screen and (max-width: 12cm) {
  .box{
    width: 100%;
  }
  .box-item {
    width: 90%;
  }
}
</style>
