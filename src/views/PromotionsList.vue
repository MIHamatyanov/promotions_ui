<template>
    <v-container>
        <v-card class="mt-10" elevation="2" outlined>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                            <span class="table_header">№</span>
                        </th>
                        <th class="text-left">
                            <span class="table_header">Id акции</span>
                        </th>
                        <th class="text-left">
                            <span class="table_header">Название</span>
                        </th>
                        <th class="text-left">
                            <span class="table_header">Дата начала</span>
                        </th>
                        <th class="text-left">
                            <span class="table_header">Дата окончания</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(promotion, index) in promotions"
                        :key="index"
                        @click="editPromotion(promotion)"
                        style="cursor: pointer"
                    >
                        <td class="num">
                            {{/*searchSettings.currentPage * searchSettings.pageSize*/ + index + 1}}
                        </td>
                        <td>
                            {{ promotion.id }}
                        </td>
                        <td>
                            {{ promotion.name }}
                        </td>
                        <td>
                            {{ new Date(promotion.startDate).toLocaleDateString("ru-RU") }}
                        </td>
                        <td>
                            {{ new Date(promotion.endDate).toLocaleDateString("ru-RU") }}
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "PromotionsList",
    data() {
        return {
            promotions: []
        }
    },

    created() {
        this.getPromotions();
    },

    methods: {
        async getPromotions() {
            let response = await this.$store.dispatch('getPromotions');
            if (response.success) {
                this.promotions = response.data;
            }
        },

        editPromotion(promotion) {
            this.$router.push({name: 'EditPromotion', params: {id: promotion.id}});
        }
    }
}
</script>

<style scoped>
.table_header {
    font-weight: bold;
    font-size: 16px;
}
</style>