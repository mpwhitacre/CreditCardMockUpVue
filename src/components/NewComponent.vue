<template>
	<div class="gitlink"> See on GitHub </div>
</template>

<style>
.gitlink {
  position: absolute;
  color: white;
  font-size: 20px;
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

</style>
