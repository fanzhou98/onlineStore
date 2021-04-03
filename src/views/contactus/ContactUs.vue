<template>
  <div class="wrap">
    <div class="container-fluid shadow-sm p-4 ">
      <div class="row">
        <div class="col p-3">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="please type your email here">
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comments</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your comments or suggestions here"></textarea>
            </div>
          </form>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
4
<script>
  export default {
    name: "ContactUs"
  }
</script>

<style scoped>
  .wrap{
    background-color: #ecf0f1;
    height: 100vh;
  }
</style>