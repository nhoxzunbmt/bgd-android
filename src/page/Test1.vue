<template>
    <div id="example">
        <p>Thông điệp ban đầu: "{{ message }}"</p>
        <p>Thông điệp bị đảo ngược bằng tính toán (computed): "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
    export default {
        computed: {
            // một computed getter
            reversedMessage: function () {
                // `this` trỏ tới đối tượng vm
                return this.message.split(' ').reverse().join(' ')
            }
        },
        data() {
            return {
                message: 'người đông bến đợi thuyền xuôi ngược',
                counter:1,

            }
        },
        created(){
            console.log(this.$store.state.cart)
        }
    }
</script>