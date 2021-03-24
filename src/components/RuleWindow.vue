<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar
                dark
                color="primary"
            >
                <v-btn
                    icon
                    dark
                    @click="closeDialog"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Добавить правило</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                        dark
                        text
                        @click="saveRule"
                    >
                        Сохранить
                    </v-btn>
                </v-toolbar-items>

                <template v-slot:extension>
                    <v-tabs
                        v-model="tab"
                        align-with-title
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab
                            v-for="(component, index) in promotion.components"
                            :key="index"
                        >
                            {{ index === 0 ? 'Основные товары' : `Доп товар ${index}` }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="(component, index) in promotion.components"
                    :key="index"
                >
                    <v-card flat>
                        <div class="px-10 py-10">
                            <v-row no-gutters v-if="index === 0">
                                <v-col cols="1">Название</v-col>
                                <v-col cols="4">
                                    <v-text-field
                                        class="rounded-lg"
                                        :flat="true"
                                        v-model="ruleToEdit.name"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-row no-gutters>
                                <v-col cols="5">
                                    <v-data-table
                                        v-model="ruleToEdit.materials[index]"
                                        :headers="headers"
                                        :items="component.materialNumbers"
                                        :single-select="false"
                                        :search="search"
                                        item-key="id"
                                        show-select
                                        class="elevation-1"
                                    >
                                    </v-data-table>


                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "RuleWindow",
    props: ["dialog", "promotion", "ruleToEdit"],
    data() {
        return {
            tab: '',
            headers: [
                {
                    text: 'Id товара',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Название товара',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                }
            ],
            search: ''
        }
    },

    created() {
    },

    methods: {
        closeDialog() {
            this.$emit('closeWindow');
        },

        saveRule() {
            this.$emit('saveRule', this.ruleToEdit);
        },
    }
}
</script>

<style scoped>

</style>