<template>
	<a href="https://github.com/mpwhitacre/CreditCardMockUpVue" class="gitlink" target="_blank"> See on GitHub </a>
</template>

<style>
.gitlink {
  position: absolute;
  text-decoration: none;
  right: 0%;
  top: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to bottom right, #44cf5b,#108f25,green);
  height: 50px;
  width: 220px;
  text-align: center;
  line-height:50px;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  transition: .5s ease;
  backface-visibility:hidden;
}

.gitlink:hover{
 line-height: 45px;
 transition: .5s ease;
 transform: scale(1.05);
}

.gitlink:active {
   box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
}

</style>
