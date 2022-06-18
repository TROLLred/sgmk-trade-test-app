<template>
    <v-container>
        <phonebook-form
            @addItem="addItem"
        />
        <phonebook-list
            :headers="headers"
            :items="chechens"
            @openDialog="openDialog"
        />
        <phonebook-modal-delete
            :item="currentItem"
            v-model="dialogVisible"
            @removeItem="removeItem"
        />
    </v-container>
</template>
<script>
import PhonebookForm from '@/components/PhonebookForm.vue';
import PhonebookList from '@/components/PhonebookList.vue';
import PhonebookModalDelete from '@/components/PhonebookModalDelete.vue';

export default {
    components: {
        PhonebookList,
        PhonebookForm,
        PhonebookModalDelete,
    },
    data: () => {
        return {
            currentItem: {},
            dialogVisible: false,
            headers: [
                { text: 'Имя', align: 'start', value: 'name', width: '22%', },
                { text: 'Фамилия', value: 'surname', width: '22%', },
                { text: 'Телефон', value: 'phonenumber', sortable: false, width: '22%', },
                { text: 'Адрес', value: 'address', sortable: false,  },
                { text: 'Действия', value: 'actions', sortable: false, align: 'center', width: '7%', },
            ],
            chechens: [
                {
                    id: 1,
                    name: "Руслан",
                    surname: "Гилаев",
                    phonenumber: "+7 256 597 26 88",
                    address: "ул. Ленина, д. 33",
                },
                {
                    id: 2,
                    name: "Асхаб",
                    surname: "Тамаев",
                    phonenumber: "+7 765 895 14 42",
                    address: "ул. Ленина, д. 1",
                },
                {
                    id: 3,
                    name: "Ушат",
                    surname: "Помоев",
                    phonenumber: "+7 456 789 12 82",
                    address: "ул. Сталина, д. 2",
                },
                {
                    id: 4,
                    name: "Улов",
                    surname: "Налимов",
                    phonenumber: "+7 123 456 78 90",
                    address: "ул. Строителей, д. 4",
                },
                {
                    id: 5,
                    name: "Подшум",
                    surname: "Прибоев",
                    phonenumber: "+7 656 258 14 88",
                    address: "ул. Ленина, д. 66",
                },
                {
                    id: 6,
                    name: "Друган",
                    surname: "Братанов",
                    phonenumber: "+7 282 354 56 99",
                    address: "ул. Лесная, д. 78",
                },
                {
                    id: 7,
                    name: "Разрез",
                    surname: "Батонов",
                    phonenumber: "+7 800 555 35 35",
                    address: "ул. Школьная, д. 92",
                },
                {
                    id: 8,
                    name: "Отжер",
                    surname: "Мамонов",
                    phonenumber: "+7 585 451 98 14",
                    address: "ул. Садовая, д. 87",
                },
                {
                    id: 9,
                    name: "Рамзан",
                    surname: "Кадыров",
                    phonenumber: "+7 322 228 14 88",
                    address: "ул. Мира, д. 14",
                },
                {
                    id: 10,
                    name: "Чучуть",
                    surname: "Вопросов",
                    phonenumber: "+7 919 681 53 27",
                    address: "ул. Молодёжная, д. 33",
                },
                {
                    id: 11,
                    name: "Бегун",
                    surname: "Безногов",
                    phonenumber: "+7 756 615 37 11",
                    address: "ул. Кирова, д. 88",
                },
                {
                    id: 12,
                    name: "Шамиль",
                    surname: "Басаев",
                    phonenumber: "+7 715 517 56 86",
                    address: "ул. Гагарина, д. 83",
                },
                {
                    id: 13,
                    name: "Рулон",
                    surname: "Обоев",
                    phonenumber: "+7 666 666 66 66",
                    address: "ул. Советская, д. 72",
                },
                {
                    id: 14,
                    name: "Атлон",
                    surname: "Безсбоев",
                    phonenumber: "+7 777 777 77 77",
                    address: "ул. Орджоникидзе, д. 14",
                },
                {
                    id: 15,
                    name: "Моргун",
                    surname: "Безглазов",
                    phonenumber: "+7 888 888 88 88",
                    address: "ул. Радищева, д. 88",
                },
            ],
        }
    },
    mounted() {
        // fetchChechens()
    },
    methods: {
        /*fetchChechens() {
            // get запрос с базы данных на сервере
        },*/
        addItem(item) {
            this.chechens.push(item);
        },
        openDialog(item) {
            this.currentItem = item;
            this.dialogVisible = true;
        },
        removeItem() {
            this.chechens = this.chechens.filter(i => i.id !== this.currentItem.id);
            this.currentItem = {};
        },
        /*removeItem(item) {
            this.chechens = this.chechens.filter(i => i.id !== item.id);
        },*/
    },
}
</script>
<style scoped>
    
</style>