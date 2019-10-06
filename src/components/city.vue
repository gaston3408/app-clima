<template>
  <div id="city">
    <pre>{{weather}}</pre>
    <div class="container row">
      <div class="card text-white bg-info mb-3 col-md-4" style="max-width: 18rem;">
        <div class="card-header">{{weather.name}}</div>
        <div class="card-body">
          <img  alt=''>
          <h2 class="card-text">{{weather.main.temp}}</h2>
          <h4>Min<br>{{weather.main.temp_min}}°</h4>
          <h4>Max<br>{{weather.main.temp_max}}°</h4>
        </div>
        <br>
      </div>
      <div class="card text-white bg-info mb-3 col-md-4" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-info mb-3 col-md-4" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Info card title</h5>
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  props: ["weather"],

data(){
  return{
    
  }
},


}

</script>