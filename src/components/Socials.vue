<template>
    <div class="socials">
        <i class="fa-brands fa-facebook fa-4x"></i>
        <i class="fa-brands fa-twitter fa-4x"></i>
        <i class="fa-brands fa-google fa-4x"></i>
    </div>
</template>

<script>
    export default {
        name: 'Socials',
        setup(){
            return{}
        }
    }
</script>

<style>

.socials{
    margin-top: 50px;
    margin: auto;
    width: 300px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i{
    color:  #D5DDE0;
}

</style>