<template>
<div class="container">
<div class="row">
<div class="col-md-4"></div>
<div class="col-md-4">
    <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="login" class="login-form">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form>
  </div>
</div>
<div class="col-md-4"></div>
</div>
</div>
</template>
<script>
export default {
    name : 'Login',
    data () {
        return {
            email : '',
            password : ''
        }
    },
    methods : {
        login() {
            let { email, password } = this;
            // console.log(email, password, ">>>>>>>here")
            this.$store.dispatch('login', { email : email, password : password})
            .then(()=> {
                console.log("success to login")
                this.$router.push('/orders');
            })   
        }
    }
}
</script>

<style scoped>
.form-group {
    margin-top: 15px;
}
.btn-primary {
    margin-top: 15px;
}
</style>