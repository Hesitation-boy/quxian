 <template>
    <div class="alet_container">
         <p>{{tipTitle}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
            }   
        },
        props:['tipTitle'],

    }
</script>




<style lang="scss" scoped>
    .alet_container{
        padding:20px 50px;
        display: inline-block;
        background-color:#000;
        opacity: .5;
        border-radius: 5px;
        position: absolute;
        top:100px;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
            color:#fff;
            font-size: 24px;
        }
    }
</style>