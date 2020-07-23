<template>
  <div class="box">
    <h1 class="header">Country Quiz</h1>
    <div class="box-item">
      <h1 class="question">
        <img
          :src="
            this.$store.state.country[
              this.$store.state.countryRandom[this.$store.state.trueCtry]
            ].flag
          "
          alt=""
        />
        Which country does this flag belong to?
      </h1>

      <div class="center">
        <div
          class="btn"
          :style="$store.state.color[0]"
          @click="
            select(
              $store.state.country[$store.state.countryRandom[0]].capital,
              0
            )
          "
        >
          <p class="btn1 btns">
            <span class="optionSpan">A</span>
            {{ $store.state.country[$store.state.countryRandom[0]].name }}
          </p>
        </div>
        <div
          class="btn"
          :style="$store.state.color[1]"
          @click="
            select(
              $store.state.country[$store.state.countryRandom[1]].capital,
              1
            )
          "
        >
          <p class="btn2 btns">
            <span class="optionSpan">B</span>
            {{ $store.state.country[$store.state.countryRandom[1]].name }}
          </p>
        </div>
        <div
          class="btn"
          :style="$store.state.color[2]"
          @click="
            select(
              $store.state.country[$store.state.countryRandom[2]].capital,
              2
            )
          "
        >
          <p class="btn3 btns">
            <span class="optionSpan">C</span>
            {{ $store.state.country[$store.state.countryRandom[2]].name }}
          </p>
        </div>
        <div
          class="btn"
          :style="$store.state.color[3]"
          @click="
            select(
              $store.state.country[$store.state.countryRandom[3]].capital,
              3
            )
          "
        >
          <p class="btn4 btns">
            <span class="optionSpan">D</span>
            {{ $store.state.country[$store.state.countryRandom[3]].name }}
          </p>
        </div>
      </div>

      <button @click="result" v-if="$store.state.nextButton">Next</button>
      <button @click="next" v-if="$store.state.button">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Flag",
  data() {
    return {
      src: this.$store.state.country[
        this.$store.state.countryRandom[this.$store.state.trueCtry]
      ].flag,
    };
  },
  methods: {
    select(event, number) {
      if (
        this.$store.state.button == false &&
        this.$store.state.nextButton == false
      ) {
        if (
          this.$store.state.country[
            this.$store.state.countryRandom[this.$store.state.trueCtry]
          ].capital == event
        ) {
          this.$store.state.button = true;
          this.$store.state.score += 1;
          console.log("doğru: " + this.$store.state.score);
          this.$store.state.color[this.$store.state.trueCtry].background =
            "#60BF88";
        } else {
          console.log("yanlış");
          this.$store.state.button = false;
          this.$store.state.nextButton = true;
          this.$store.state.color[this.$store.state.trueCtry].background =
            "#60BF88";
          this.$store.state.color[number].background = "#EA8282";
        }
      }
    },
    next() {
      this.$store.commit("creates", "change");
      this.$store.commit("change", "change");
      this.$store.commit("resetBackground");
    },
    result() {
      this.$store.state.flag = false;
      this.$store.state.nextButton = false;
      this.$store.commit("resetBackground");
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
.header {
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #f2f2f2;
  position: relative;
  left: -100px;
}
.box-item {
  text-align: center;
  width: 464px;
  background: #ffffff;
  border-radius: 24px;
  margin: auto;
}
.question {
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2f527b;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 40px;
}
img {
  position: relative;
  top: 15px;
  width: 50px;
  height: auto;
}
.center {
  text-align: center;
  margin: auto;
  padding-bottom: 20px;
}
.btn {
  text-align: center;
  position: relative;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  width: 400px;
  height: 56px;
  margin: auto;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgba(96, 102, 208, 0.8);
}
.optionSpan {
  position: absolute;
  left: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.btns {
  position: relative;
  top: -5px;
}
.btn:hover {
  background: #f9a826 !important;
  cursor: pointer !important;
}
button {
  position: relative;
  width: 116px;
  height: 56px;
  border: none;
  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  margin-bottom: 20px;
  margin-left: 200px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
}
@media only screen and (max-width: 12cm) {
  .header{
    position: relative;
    margin:0;
    padding:0;
    left: 0;
  }
  .question{
    left: 0;
  }
  .box-item {
    width: 98%;
  }
  .btn{
    width: 90%;
   
  }
  .center{
    width: 100%;
  
  }
}
</style>
