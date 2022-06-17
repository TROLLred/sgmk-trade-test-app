<template>
    <v-dialog
        v-model='dialogVisible'
        max-width='521'
        @click:outsie='dialogVisible=false'
    >
        <v-card>
            <v-card-title>{{fullname}}</v-card-title>
            <v-card-text>
                Советую хорошенько подумать, дон, прежде, чем что-то делать, дон. 
                Если уверены, то нажмите кнопку "Удалить", дон, в противном случае,
                нажмите кнопку "Оставить", дон. Как-то так, дон. Ахмат сила!
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialogVisible=false"
                >
                    Оставить
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="acceptRemoveItem"
                >
                    Удалить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        value: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        fullname() {
            return `Вы действительно хотите удалить пользователя ${this.item.name} ${this.item.surname}?`
        }
    },
    data: () => ({
        dialogVisible: false,
    }),
    methods: {
        acceptRemoveItem() {
            this.dialogVisible = false;
            this.$emit('removeItem');
        }
    },
    created() {
        this.dialogVisible = this.value
    },
    watch: {
        value(newValue) {
            this.dialogVisible = newValue
        },
        dialogVisible(newValue) {
            this.$emit('input', newValue)
        }
    },
}
</script>
<style scoped>
    
</style>