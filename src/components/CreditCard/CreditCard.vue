<template>
  <div>
    <div class="mockCard">
    <img v-bind:src="'https://github.com/mpwhitacre/CreditCardMockUpVue/blob/development/src/assets/' + backgroundNumber + '.jpg?raw=true'">
    <div class="chip"> </div>
        <div class="cardLogo"> </div>
      <label class="cardNum" for="cardNumber" ref="cardNumber" >
      <span v-for="(n, $index) in cardMask" :key="$index">
      <span  v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''">
      *
      </span>
      <span :class="{ '-active' : n.trim() === '' }" :key="$index" v-else-if="cardNumber.length > $index">
      {{cardNumber[$index]}}
      </span>
      <span :class="{ '-active' : n.trim() === '' }" v-else :key="$index + 1" >
      {{n}}
      </span>
      </span>
      </label>
    <div class="ch">
      <label for="card">Card Holder </label>
      <div class="chn">
        <span v-if="cardName">
         {{ cardName }}
        </span>
        <span v-else>
          Full Name
        </span>
      </div>
        </div>
        <div class="exp">
      <label for="expire">Expires</label>
      <div class="expd">
        <span v-if="cardMonth">{{ cardMonth }}</span>
        <span v-else>MM</span>
        <span>/</span>
        <span v-if="cardYear">{{String(cardYear).slice(2,4)}}</span>
        <span v-else>YY</span>
      </div>
      </div>

  </div>
  <div class="infoBox">
    Card Number:
    <br/>
    <input type="text" class="textBoxes" placeholder="Card Number" v-mask="chooseCardMask" v-model="cardNumber">
    <br/>
    <br/>
    Cardholder Name:
    <br/>
    <input class="textBoxes" v-model="cardName" placeholder="Full Name">
    <br/>
    <br/>
    <div class="expTxt"> Expiration Date: </div>
    <div class="cvvTxt"> CVV: </div>
    <br/>
    <select class="card-info-selector" v-model="cardMonth">
      <option value="">Month</option>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
      <select class="card-info-selector" v-model="cardYear">
      <option value="">Year</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
    <input class="card-info-cvv" v-model="cvv">
    <br/>
    <br/>
    <br/>
    <button class="submitButton" value="submit" @click="submitCard()">SUBMIT</button>
    </div>
    </div>
</template>

<script>
export default {
 name: 'app',
 data: () => ({
   cardName: null,
   cardMask: "#### #### #### ####",
   cardNumber: "",
   cardNumberTemp: "",
   backgroundNumber:  Math.floor(Math.random()* 5 + 1),
   cardMonth: "",
   cardYear: "",
   cvv: ""
 }),
   mounted() {
     this.cardNumberTemp = this.cardMask;
 },
 computed: {
  chooseCardMask: function () {
    return this.cardMask;
   },
 },
  methods: {
    submitCard: function() {
      const requestObject = { 'cardHolderName': this.cardName, 'cardNumber': this.cardNumber, 'expirationMonth': this.cardMonth, 'expirationYear': this.cardYear, 'cvv': this.cvv };
      fetch('/api/add', {
        method: 'post',
        body: JSON.stringify(requestObject),
        headers: {
          'Content-Type':'application/json'
        }
      })
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  position: relative;
}


.infoBox {
  position: relative;
  top: -80px;
  z-index: 1;
  background:#ffffff;
  max-width: 570px;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  padding-top: 100px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-self: center;
  font-size: 14px;
  float: center;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 1);
}

.mockCard {
  position: relative;
  z-index: 2;
  width: 100%;
  border-radius: 10px;
  width: 450px;
  padding: 10px;
  margin: auto;
  height: 250px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 0 #000,1px 1px 0 #000,1px 1px 0 #000,1px 1px 0 #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, .4);
}

.mockCard img {
    position: absolute;
    margin: auto;
    display: block;
    max-width: 100%;
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.textBoxes {
  width:100%;
  border-radius: 5px;
  border-color: black;
  border: 1px solid;
}

.card-info-selector {
  width: 100px;
  background:white;
  padding: 5px;
  border-color: black;
  border: 1px solid;
  float: left;
  margin-right:15px;
  border-radius: 5px;
  -webkit-appearance: none;
  margin-right: 2rem;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png);
  background-position: right;
  background-repeat: no-repeat;
  background-position-x: 90%;
}

.card-info-cvv {
  width: 20%;
  float: right;
  border-radius: 5px;
  border-color: black;
  border: 1px solid;
}

.mockCard .ch {
  position: absolute;
  bottom: 8%;
  left: 5%;
  font-size: 12px;
  width: 70%;
}

.mockCard .ch:hover {
  transition: .25s ease-in-out;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 3px;
}

.mockCard .chn {
  font-size: 20px;
}


.mockCard .exp {
  display: inline-block;
  position: absolute;
  bottom: 8%;
  right: 5%;
  font-size: 12px;
  width: 15%;
}

.mockCard .exp:hover {
  transition: .25s ease-in-out;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 3px;
}

.mockCard .expd {
  font-size: 14px;
}

.mockCard .cardNum {
  font-size: 20px;
  position: absolute;
  top: 40%;
  transition: .25s ease-in-out;
}

.mockCard .cardNum:hover {
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 3px;

}

.mockCard .chip {
  width: 62px;
  height: 50px;
  background: url(https://raw.githubusercontent.com/muhammederdem/vue-interactive-paycard/master/src/assets/images/chip.png);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 5%;
  left: 5%;
}

.mockCard .chip:hover {
  transition: .25s ease-in-out;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 3px;
}

.mockCard .cardLogo {
  background: url(https://raw.githubusercontent.com/muhammederdem/vue-interactive-paycard/master/src/assets/images/visa.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 50px;
  position: absolute;
  top: 6%;
  right: 5%;
}

.mockCard .cardLogo:hover {
  transition: .25s ease-in-out;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 3px;
}

.submitButton {
  cursor: pointer;
  width: 75%;
  height: 40px;
  display: block;
  margin: auto;
  color: white;
  background: #001cab;
  border-color: #001cab;
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0);
}

.submitButton:hover {
  box-shadow: inset 0 0 10px rgba(0,0,0,.25);
}

.submitButton:active {
  transform: scale(.95);
  box-shadow: inset 0 0 10px rgba(0,0,0,1);
}

.infoBox .expTxt {
  margin: auto;
  float: left;
}


.infoBox .cvvTxt {
  margin-left: auto;
  float: right;
  margin-right: 0;
}
</style>

