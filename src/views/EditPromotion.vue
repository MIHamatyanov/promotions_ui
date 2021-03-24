<template>
    <v-container>
        <v-card>
            <div class="px-10 py-10">
                <v-row no-gutters>
                    <span class="form_title">Редактировать комплектную акцию</span>
                </v-row>
                <v-row no-gutters class="mt-10">
                    <v-col cols="1">Акция</v-col>
                    <v-col cols="4">
                        <v-text-field
                            class="rounded-lg"
                            :flat="true"
                            v-model="promotion.id"
                            readonly
                            filled
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mt-10">
                    <v-col cols="1">Название</v-col>
                    <v-col cols="4">
                        <v-text-field
                            class="rounded-lg"
                            :flat="true"
                            v-model="promotion.name"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row no-gutters class="mt-10">
                    <v-col cols="1">Дата начала</v-col>
                    <v-col cols="2">
                        <v-text-field
                            class="rounded-lg"
                            :flat="true"
                            v-model="promotion.startDate"
                            readonly
                            filled
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="1">Дата окончания</v-col>
                    <v-col cols="2">
                        <v-text-field
                            class="rounded-lg"
                            :flat="true"
                            v-model="promotion.endDate"
                            readonly
                            filled
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row no-gutters class="mt-10">
                    <v-col cols="1">Приоритет</v-col>
                    <v-col cols="1">
                        <v-text-field
                            class="rounded-lg"
                            :flat="true"
                            v-model="promotion.priority"
                            outlined
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row no-gutters class="mt-10">
                    <v-col cols="12">Правила</v-col>

                    <v-col cols="12">
                        <ol>
                            <li v-for="(rule, index) in promotion.rules" :key="index">
                                <a @click="editRule(rule)">{{rule.name}}</a>
                            </li>
                        </ol>
                        <v-row no-gutters v-if="!promotion.rules || promotion.rules.length === 0">
                            <v-col cols="12" class="d-flex justify-center">
                                <span class="table_empty_label">Правил нет</span>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" class="mt-10">
                        <v-btn @click="addRule">Добавить правило</v-btn>
                    </v-col>
                </v-row>
            </div>

            <v-btn @click="save">Сохранить</v-btn>
        </v-card>

        <RuleWindow v-if="ruleDialog" :dialog="ruleDialog" :ruleToEdit="ruleToEdit" :promotion="promotion" @closeWindow="ruleDialog = false" @saveRule="saveRule"/>
    </v-container>
</template>

<script>
import RuleWindow from "@/components/RuleWindow";

export default {
    name: "EditPromotion",
    components: {RuleWindow},
    data() {
        return {
            promotion: {},
            ruleDialog: false,
            ruleToEdit: {
                materials: []
            }
        }
    },

    created() {
        this.getPromotion();
    },

    methods: {
        async getPromotion() {
            let id = this.$route.params.id;
            if (id) {
                let response = await this.$store.dispatch("getPromotion", id);
                if (response.success) {
                    this.promotion = response.data;
                    if (!this.promotion.rules) {
                        this.promotion.rules = [];
                    }
                }
            }
        },

        editRule(rule) {
            this.ruleToEdit = rule;
            this.ruleDialog = true;
        },

        addRule() {
            this.ruleToEdit = {
                materials: []
            };

            this.ruleDialog = true;
        },

        saveRule(rule) {
            this.promotion.rules.push(rule);
            this.ruleDialog = false;
        },

        async save() {
            let response = await this.$store.dispatch("savePromotion", this.promotion);
            if (response.success) {
                alert('Сохранено');
            }
        }
    }
}
</script>

<style scoped>
.form_title {
    font-weight: bold;
    font-size: 26px;
}

.table_header {
    font-weight: bold;
    font-size: 16px;
}

.table_empty_label {
    font-size: 26px;
    margin-top: 30px;
}
</style>