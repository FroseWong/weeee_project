const { createApp } = Vue

        createApp({
            data() {
                return {
                    cardlist: [
                        {
                            src: "/img/sightseeing/fa_19_1.jpg",
                            title: '新北港煙火 情侶行程',
                            label: '家庭行程',
                            content: '新北港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。',
                            score: 4.5,
                            scorepeople: '(2300)',
                            order: 1000,
                            price: 6450,
                            city: '新北',
                            cardid: 1,
                        },
                        {
                            src:"/img/sightseeing/fa_19_2.jpg",
                            title: '基隆港煙火 情侶行程',
                            label: '家庭行程',
                            content: '基隆港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。',
                            score: 4.5,
                            scorepeople: '(2300)',
                            order: 50,
                            price: 5500,
                            city: '基隆',
                            cardid: 2,
                        },
                        {
                            src: "/img/sightseeing/fa_19_3.jpg",
                            title: '台北港煙火 情侶行程',
                            label: '寵物行程',
                            content: '台北港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。',
                            score: 4.5,
                            scorepeople: '(2300)',
                            order: 350,
                            price: 2250,
                            city: '台北',
                            cardid: 3,
                        },
                        {
                            src: "/img/sightseeing/fa_20_1.jpg",
                            title: '台北港煙火 情侶行程',
                            label: '情侶行程',
                            content: '台北港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。',
                            score: 4.5,
                            scorepeople: '(2300)',
                            order: 1750,
                            price: 1450,
                            city: '台北',
                            cardid: 4,
                        },
                        {
                            src: "/img/sightseeing/fa_20_2.jpg",
                            title: '基隆港煙火 情侶行程',
                            label: '朋友行程',
                            content: '基隆港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。',
                            score: 4.5,
                            scorepeople: '(2300)',
                            order: 150,
                            price: 450,
                            city: '基隆',
                            cardid: 5,
                        },
                    ],
                    prices: [],

                }
            },
            methods: {
                open_city() {
                    let city = document.getElementsByClassName('about2__city')[0].classList;
                    let fa = document.getElementsByClassName('fa-solid')[0];
                    if (city.contains('about2__block')) {
                        city.remove('about2__block');
                        city.add('about2__none');
                        fa.classList.remove('fa-circle-chevron-down');
                        fa.classList.add('fa-circle-chevron-up');
                    }
                    else {
                        city.remove('about2__none');
                        city.add('about2__block');
                        fa.classList.remove('fa-circle-chevron-up');
                        fa.classList.add('fa-circle-chevron-down');
                    }
                },
                filterCity(e) {
                    let path = e.path[0].textContent;
                    let card = document.getElementsByClassName('about2__card--group')[0];
                    for (j = 0; j < this.cardlist.length; j++) {
                        document.getElementById(j + 1).style.display = 'flex';

                    }
                    for (i = 0; i < this.cardlist.length; i++) {
                        if (path == this.cardlist[i].city) {
                            let cardid = this.cardlist[i].cardid;
                            document.getElementById(cardid).style.display = 'none';
                        }
                    }
                },
                filterPrice() {
                    let arr = this.cardlist;
                    const eitherSort = (arr = []) => {
                        const sorter = (a, b) => {
                            return +a.price - +b.price;
                        };
                        arr.sort(sorter);
                    };
                    eitherSort(arr);
                    this.classList = arr;
                },
                filterOrder() {
                    let arr = this.cardlist;
                    const eitherSort = (arr = []) => {
                        const sorter = (a, b) => {
                            return +a.order - +b.order;
                        };
                        arr.sort(sorter);
                    };
                    eitherSort(arr);
                    this.classList = arr;
                }
            },

            mounted() {
            }
        }).mount('#app')