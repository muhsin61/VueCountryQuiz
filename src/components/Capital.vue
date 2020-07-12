<template>
  <div class="box">
    <h1 class="header">Country Quiz</h1>
    <div class="box-item">
      <h1 class="question">{{ $store.state.country[$store.state.countryrandom[$store.state.trueCtry]].capital }} is the capital of</h1>
     
      <div class="center">
        <div class="btn" :style="$store.state.color[0]" @click="select($store.state.country[$store.state.countryrandom[0]].capital,0)"><p class="btn1 btns"><span class="sSpan">A</span> {{ $store.state.country[$store.state.countryrandom[0]].name }}</p></div>
        <div class="btn" :style="$store.state.color[1]" @click="select($store.state.country[$store.state.countryrandom[1]].capital,1)"><p class="btn2 btns"><span class="sSpan">B</span> {{ $store.state.country[$store.state.countryrandom[1]].name }}</p></div>
        <div class="btn" :style="$store.state.color[2]" @click="select($store.state.country[$store.state.countryrandom[2]].capital,2)"><p class="btn3 btns"><span class="sSpan">C</span> {{ $store.state.country[$store.state.countryrandom[2]].name }}</p></div>
        <div class="btn" :style="$store.state.color[3]" @click="select($store.state.country[$store.state.countryrandom[3]].capital,3)"><p class="btn4 btns"><span class="sSpan">D</span> {{ $store.state.country[$store.state.countryrandom[3]].name }}</p></div>
      </div>
  
      <button @click="result" v-if="$store.state.nextButton">Next</button>
      <button @click="next" v-if="$store.state.button">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Capital',
  methods:{
    select(event,number){
      console.log("number: " + number)
      if(this.$store.state.button==false && this.$store.state.nextButton==false){
        if( this.$store.state.country[this.$store.state.countryrandom[this.$store.state.trueCtry]].capital == event){
        this.$store.state.button=true;
        this.$store.state.score += 1;
        console.log("doğru: " + this.$store.state.score)
        this.$store.state.color[this.$store.state.trueCtry].background = 'blue';
      }else{
        console.log("yanlış")
        this.$store.state.button = false;
        this.$store.state.nextButton = true;
        this.$store.state.color[this.$store.state.trueCtry].background = '#60BF88';
        this.$store.state.color[number].background = '#EA8282';
        }
      }
      
    },
    next(){
      this.$store.commit("creates","change")
      this.$store.commit("change","change")
      this.$store.commit("reset","reset")
    },
    result(){
      this.$store.state.select = false;
      this.$store.state.nextButton = false;
      this.$store.commit("reset","reset")
    }
  }
  
}
</script>

<style scoped>

.box{
  position: relative;
  text-align: center;
}
.header{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #F2F2F2;
  position: relative;
  left: -100px;
}
.box-item{
  text-align: center;
  width: 464px;
  background: #FFFFFF;
  border-radius: 24px;
  margin:auto;
  }
.center{
  text-align: center;
  margin: auto;
  padding-bottom: 20px;
  }
.question{
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #2F527B;
  margin: auto;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 20px;
}
.btn{
  text-align:center;
  position:relative;
  background: #FFFFFF;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  width: 400px;
  height: 56px;
  margin: auto;
  margin-bottom: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgba(96, 102, 208, 0.8);
  }
.sSpan{
  position: absolute;
  left: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
  .btns{
    position:relative;
    top: -5px;
  }
.btn:hover{
  background: #F9A826!important;
  cursor: pointer!important;
  color: white;
}
.btn::before:hover{
  color: white;
}
button{
  position: relative;
  width: 116px;
  height: 56px;
  border: none;
  background: #F9A826;
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
  color: #FFFFFF;
}

</style>
