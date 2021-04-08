<template>
  <div>
    <div class="container-fluid">
      <div class="row shadow-lg text-white" style="background-color: #57606f; border-radius: 5px">
        <div class="col">
          No.
        </div>

        <div class="col">
          image
        </div>

        <div class="col">
          name
        </div>

        <div class="col">
          status
        </div>

        <div class="col">
          destination
        </div>

        <!-- current location  -->
        <div class="col">
          current location
        </div>
      </div>
      <div class="row" v-for="(item, key) in this.shipList" :key="key">
        <div class="col shadow-sm" style="background-color: #ecf0f1">
          <div class="row list-item">
            <!-- ID -->
            <div class="col">
              <div>
                {{key +1}}
              </div>
            </div>
            <!-- image -->
            <div class="col">
              <div>
                <img :src="global_const.GoodsImage_Prefix + item.image" class="p-2" alt="" style="height: 100px; width: 100px; border-radius: 20px">
              </div>
            </div>
            <!-- Name -->
            <div class="col">
              <div>
                {{item.name}}
              </div>
            </div>
            <!-- status -->
            <div class="col">
              <div>
                {{item.status}}
              </div>
            </div>
            <!-- destination  -->
            <div class="col">
              <div>
                {{item.shipping_address}}
              </div>
            </div>
            <!-- current location  -->
            <div class="col">
              <div>
                {{item.current_location}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getShippingTrack} from 'network/order'
  export default {
    name: "ShippingTrack",
    created() {
      // request data
      getShippingTrack(this.$store.state.userInfo.uid).then(res=>{
        this.shipList = res.ship_list
        // add goods image and name info
        for(let item of this.$store.state.storeGoodsList){
          for(let i of this.shipList){
            if(item.goods_id === i.goods_id){
              i['image'] = item['image']
              i['name'] = item['name']
            }
          }
        }

      })
    },
    data(){
      return {
        shipList:[],
        goods_info:[]
      }
    }
  }
</script>

<style scoped>
  .col{
    text-align: center;
  }
  .list-item>.col{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>