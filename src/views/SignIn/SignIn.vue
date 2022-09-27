<template>
    <div class="container">
        <h3>Sign In</h3>

        <div class="input-fields">        
            <!-- <div class="each-input">    
                <label for="name">EMAIL</label>
                <br/>
                <input type="email"/>
            </div>
           
            <div class="each-input">
                <label for="name">PASSWORD</label>
                <br/>
                <input type="password"/>
            </div> -->
            <Input/>
    
            <!--Exporting Button component -->
            <Button class="signIn-btn" text="Sign In" style="width:300px"/>

            <div class="signIn-option">
                <h4>OR SIGN IN WITH</h4>
            </div>

            <!-- Exporting Social Media components -->
            <socials/>
            
            <div class="desc-in">
                <p>Don't have an account?</p>
                <p><a href="#">Sign up</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Socials from '@/components/Socials.vue'
import Input from '@/components/Input.vue';

export default{
    name: 'signIn',
    components: { Button, Socials, Input },
    setup() {
        return{}
    },
}
</script>

<style>
   @import './SignIn'
</style>
