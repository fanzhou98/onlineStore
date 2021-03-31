<template>
  <div>
    <form class="wrap p-4 mt-5">
      <div class="form-row">
        <div class="form-group col">
          <label for="change_password">Type your old password</label>
          <input type="password" class="form-control" id="change_password">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label for="new_pass">Type your new password</label>
          <input type="password" class="form-control" id="new_pass">
        </div>
      </div>

      <button class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "ChangePassword"
  }
</script>

<style scoped>
  .wrap{
    background-color: #ecf0f1;
    border-radius: 20px;
  }
</style>