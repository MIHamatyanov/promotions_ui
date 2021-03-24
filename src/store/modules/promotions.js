//import rest from "../../restUtils";

//const path = '';

const promotions = [
    {
        id: '1176421',
        name: 'promo1',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '1187331',
                materialNumbers: [
                    {id: '111432', name: 'name1'}, {id: '133112', name: 'name2'}, {id: '1557732', name: 'name3'}
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    {id: '2131237', name: 'name4'}, {id: '2332123', name: 'name5'}, {id: '388434', name: 'name6'}
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    {id: '397123', name: 'name7'}, {id: '38471231', name: 'name8'}, {id: '3746291', name: 'name9'}
                ]
            }
        ]
    },
    {
        id: '1176422',
        name: 'promo2',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    '397123', '38471231', '3746291'
                ]
            },
            {
                componentId: '445123',
                materialNumbers: [
                    '497123', '48471231', '4746291'
                ]
            }
        ]
    },
    {
        id: '1176423',
        name: 'promo3',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            }
        ]
    },
    {
        id: '1176424',
        name: 'promo4',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    '397123', '38471231', '3746291'
                ]
            },
            {
                componentId: '445123',
                materialNumbers: [
                    '497123', '48471231', '4746291'
                ]
            },
            {
                componentId: '545123',
                materialNumbers: [
                    '597123', '58471231', '5746291'
                ]
            }
        ]
    },
    {
        id: '1176425',
        name: 'promo5',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    '397123', '38471231', '3746291'
                ]
            },
            {
                componentId: '445123',
                materialNumbers: [
                    '497123', '48471231', '4746291'
                ]
            },
            {
                componentId: '545123',
                materialNumbers: [
                    '597123', '58471231', '5746291'
                ]
            }
        ]
    },
    {
        id: '1176426',
        name: 'promo6',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    '397123', '38471231', '3746291'
                ]
            }
        ]
    },
    {
        id: '1176427',
        name: 'promo7',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            }
        ]
    },
    {
        id: '1176428',
        name: 'promo8',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            }
        ]
    },
    {
        id: '1176429',
        name: 'promo9',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            }
        ]
    },
    {
        id: '1176420',
        name: 'promo0',
        startDate: '2020-01-01',
        endDate: '2020-10-10',
        components: [
            {
                componentId: '182747',
                materialNumbers: [
                    '1231234124', '12345122', '12356345'
                ]
            },
            {
                componentId: '227462',
                materialNumbers: [
                    '2131237', '2332123', '388434'
                ]
            },
            {
                componentId: '3375632',
                materialNumbers: [
                    '397123', '38471231', '3746291'
                ]
            }
        ]
    },
];

export default {
    namespace: true,
    state: {},

    actions: {
        async getPromotions() {
            try {
                //let promotions = await rest.doGet(`${path}`);
                return {
                    success: true,
                    data: promotions
                };
            } catch (error) {
                return {
                    success: false,
                    data: error.response.data
                };
            }
        },

        // eslint-disable-next-line no-unused-vars
        async getPromotion({context}, id) {
            try {
                //let promotions = await rest.doGet(`${path}`);
                for (let i = 0; i < promotions.length; i++) {
                    if (promotions[i].id === id) {
                        return {
                            success: true,
                            data: promotions[i]
                        }
                    }
                }
                return {
                    success: false,
                    data: null
                };
            } catch (error) {
                return {
                    success: false,
                    data: error.response.data
                };
            }
        },

        // eslint-disable-next-line no-unused-vars
        async savePromotion({context}, data) {
            try {
                for (let i = 0; i < promotions.length; i++) {
                    if (promotions[i].id === data.id) {
                        promotions[i] = data;
                        return {
                            success: true,
                            data: promotions[i]
                        }
                    }
                }
                return {
                    success: false,
                    data: null
                };
            } catch (error) {
                return {
                    success: false,
                    data: error.response.data
                };
            }
        }
    },

    mutations: {},

    getters: {}
}