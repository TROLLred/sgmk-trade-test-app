<template>
    <v-data-table
        :headers="headers"
        :items="filteredChechens"
        :items-per-page="10"
        sort-by="surname"
        class="table elevation-2"
        :loading="loading"
        loading-text="Loading... Please wait"
    >
        <!-- Добавление фильтров в заголовки -->
        <template v-slot:[`header.name`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon small :color="name ? 'primary' : ''">
                            mdi-filter
                        </v-icon>
                    </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                    <v-text-field
                        v-model="name"
                        class="pa-4"
                        type="text"
                        label="Введите поисковой запрос"
                        :autofocus="true"
                    ></v-text-field>
                    <v-btn
                        @click="name = ''"
                        small
                        text
                        color="primary"
                        class="ml-2 mb-2"
                    >
                        Очистить
                    </v-btn>
                </div>
            </v-menu>
        </template>

        <template v-slot:[`header.surname`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon small :color="surname ? 'primary' : ''">
                            mdi-filter
                        </v-icon>
                    </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                    <v-text-field
                        v-model="surname"
                        class="pa-4"
                        type="text"
                        label="Введите поисковой запрос"
                        :autofocus="true"
                    ></v-text-field>
                    <v-btn
                        @click="surname = ''"
                        small
                        text
                        color="primary"
                        class="ml-2 mb-2"
                    >
                        Очистить
                    </v-btn>
                </div>
            </v-menu>
        </template>

        <template v-slot:[`header.phonenumber`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon small :color="phonenumber ? 'primary' : ''">
                            mdi-filter
                        </v-icon>
                    </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                    <v-text-field
                        v-model="phonenumber"
                        class="pa-4"
                        type="text"
                        label="Введите поисковой запрос"
                        :autofocus="true"
                    ></v-text-field>
                    <v-btn
                        @click="phonenumber = ''"
                        small
                        text
                        color="primary"
                        class="ml-2 mb-2"
                    >
                        Очистить
                    </v-btn>
                </div>
            </v-menu>
        </template>

        <template v-slot:[`header.address`]="{ header }">
            {{ header.text }}
            <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon small :color="address ? 'primary' : ''">
                            mdi-filter
                        </v-icon>
                    </v-btn>
                </template>
                <div style="background-color: white; width: 280px">
                    <v-text-field
                        v-model="address"
                        class="pa-4"
                        type="text"
                        label="Введите поисковой запрос"
                        :autofocus="true"
                    ></v-text-field>
                    <v-btn
                        @click="address = ''"
                        small
                        text
                        color="primary"
                        class="ml-2 mb-2"
                    >
                        Очистить
                    </v-btn>
                </div>
            </v-menu>
        </template>
        <!-- Добавляю колонку с кнопкми удаления -->
        <template v-slot:[`item.actions`]="{ item }"> <!-- Eslinter считает, что v-slot:item.actions - ошибка))) -->
            <v-icon small @click="$emit('openDialog', item)"> <!-- Посылаю колбэком вверх пользователя на удаление -->
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
</template>
<script>
export default {
    props: {
        headers: {
            type: [Array, Object],
            required: true,
        },
        items: {
            type: [Array, Object],
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        }
    },
    data () {
        return {
            name: '',
            surname: '',
            phonenumber: '',
            address: '',
        }
    },
    computed: {
        filteredChechens() {
            let conditions = []; /* массив фильтров */
            if (this.name) {
                conditions.push(this.filterName);
            }
            if (this.surname) {
                conditions.push(this.filterSurname);
            }
            if (this.phonenumber) {
                conditions.push(this.filterPhoneNumber);
            }
            if (this.address) {
                conditions.push(this.filterAddress);
            }
            if (conditions.length > 0) {
                return this.items.filter((item) => {
                    return conditions.every((condition) => {
                        return condition(item); /* Я ненавижу эту строчку кода, я фиксил её всю ночь и утро*/
                    })
                })
            }
            return this.items;
        }
    },
    methods: {
        filterName(item) {
            return item.name.toLowerCase().includes(this.name.toLowerCase());
        },
        filterSurname(item) {
            return item.surname.toLowerCase().includes(this.surname.toLowerCase());
        },
        filterPhoneNumber(item) {
            return item.phonenumber.toLowerCase().includes(this.phonenumber.toLowerCase());
        },
        filterAddress(item) {
            return item.address.toLowerCase().includes(this.address.toLowerCase());
        },
    }
}
</script>
<style scoped>
    
</style>