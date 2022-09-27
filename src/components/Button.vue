<template>
<button class="btn"> {{text}} </button>
</template>

<script>
    export default {
        name: 'Button',
        props: ['text']
    }
</script>

<style scoped>

.btn{
     /*border: 1px solid red;*/
     border: none;
     font-family: inherit;
     border-radius: 10px;
     padding: 10px;
     background-color: #1152FD;
     box-shadow:  3px 3px 5px 0px;
     color: white;
     width: 230px;
     font-size: 20px;
     font-weight: bold;
     cursor: pointer;
}
</style>