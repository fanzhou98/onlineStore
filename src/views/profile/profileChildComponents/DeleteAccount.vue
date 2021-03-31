<template>
  <div>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col">
          <div>
            <h2>Are you sure you want to delete the account?</h2>
          </div>

          <div class="d-flex justify-content-center align-items-center" style="margin-top: 40px">
            <a class="btn btn-primary" style="border-radius: 10px">Confirm delete</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DeleteAccount"
  }
</script>

<style scoped>
  .container-fluid{
    height: 400px;
  }
</style>