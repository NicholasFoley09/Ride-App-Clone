<template>
    <div class="container">
        <h3>SIGN UP</h3>
        <div class="input-fields">
            <!-- Importing Input component -->
            <Input/>

            <!--Importing Button component -->
            <Button class="signUp-btn" text="Sign Up" style="width:300px"/>
    
            <div class="desc-up">
                <p>Already have an account?</p>
                <p><a href="#">Sign in</a></p>
            </div>
    
        </div>
    </div>
       
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

    export default {
        name: 'SignUp',
        components: {Button,Input},
        setup(){
            return {}
        }
    }
</script>

<style scoped>
 @import "./SignUp.css";
</style>