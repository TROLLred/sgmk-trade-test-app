<template>
    <v-container class="form-card elevation-2">
        <v-row class="d-flex">
            <v-col 
                cols="12"
                sm="4"
            >
                <v-text-field 
                    v-model="name" 
                    label="Имя" 
                    placeholder="Рамзан" 
                    :rules="[rules.required, rules.counter]"
                    counter
                    maxlength="20"
                />
            </v-col>
            <v-col 
                cols="12"
                sm="4"
            >
                <v-text-field 
                    v-model="surname" 
                    label="Фамилия" 
                    placeholder="Кадыров" 
                    :rules="[rules.required, rules.counter]"
                    counter
                    maxlength="20"
                />
            </v-col>
            <v-col 
                cols="12"
                sm="4"
            >
                <v-text-field 
                    v-model="phoneNumber" 
                    label="Телефон" 
                    placeholder="+7 (777) 777-77-77" 
                    :rules="[rules.required, rules.numberFormat]"
                    counter
                    maxlength="17"
                />
            </v-col>
            <v-col 
                cols="12"
                sm="8"
            >
                <v-text-field 
                    v-model="address" 
                    label="Адрес" 
                    placeholder="ул. Ленина, д. 1" 
                    :rules="[rules.required]"
                    counter
                    maxlength="30"
                />
            </v-col>
            <v-col 
                cols="12"
                sm="4"
                class="btn-container"
            >
                <v-btn @click="addItem">Добавить</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        name: '',
        surname: '',
        phoneNumber: '',
        address: '',
        rules: {
            required: value => !!value || 'Обязательное поле',
            counter: value => value.length <= 20 || 'Не может превышать 20 символов',
            numberFormat: value => {
                /* eslint-disable-next-line */
                const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/; /* Еще раз спасибо, eslint */
                return pattern.test(value) || 'Невалидный номер'
            },
        },
    }),
    methods: {
        addItem() {
            try {
                /* Отлавливаем ошибку */
                if (this.name.trim() === '') {
                    throw new Error('Вы не ввели имя')
                }
                if (this.surname.trim() === '') {
                    throw new Error('Вы не ввели фамилию')
                }
                if (this.phoneNumber.trim() === '') {
                    throw new Error('Вы не ввели телефон')
                }
                if (this.address.trim() === '') {
                    throw new Error('Вы не ввели адрес')
                }
                /* Создаем эксемпляр объекта */
                const item = {
                    id: Date.now(),
                    name: this.name,
                    surname: this.surname,
                    phoneNumber: this.phoneNumber,
                    address: this.address,
                };
                /* Прокидываем его колбэком наверх */
                this.$emit("addItem", item);
                /* Очищаем поля */
                this.name = ' ';
                this.surname = ' ';
                this.phoneNumber = ' ';
                this.address = ' ';
            } catch (err) {
                alert(`Осторожно, ${err.message}. Будьте внимательнее.`);
            } finally {
                /* this.name = '';
                this.surname = '';
                this.phoneNumber = '';
                this.address = ''; */
            }
        }
    }
}
</script>
<style scoped>
    .form-card {
        border-radius: 4px;
        /*padding: 8px 28px;*/
        padding: 8px 28px;
        margin-bottom: 10px;
    }
    /*.v-input {
        margin-top: 16px;
        margin-right: 16px;
    }*/
    .btn-container {
        display: flex;
        justify-content: flex-end;
    }
    .v-btn {
        align-self: center;
    }
</style>