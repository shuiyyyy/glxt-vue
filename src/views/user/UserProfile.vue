<template>
  <div >
    个人信息 ID = {{id}}
  </div>
</template>

<script>

export default {
    props: ['id'],
    name: 'UserProfile',
    beforeRouterEnter: (to, from, next) => {
        console.log('准备进入个人信息');
        next(vm => {
            vm.getData();
        });
    },
    beforeRouterLeave: (to, from, next) => {
        console.log('准备离开个人信息');
        next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'
      }).then(function (repos) {
        console.log(repos);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
