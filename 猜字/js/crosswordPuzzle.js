const app = new Vue({
    el: '#app',
    data: {
        a: ['啊', '啊', '啊', '啊', '啊', '啊', '啊',],
        key: "9f4e0e6d-33dc-4090-9929-92109440b18f",
        questionAnswers: [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        ],
        answer: {
            downAnswer1: [],
            downAnswer2: [],
            downAnswer3: [],
            downAnswer4: [],
            downAnswer5: [],
            downAnswer6: [],
            downAnswer7: [],
            downAnswer8: [],
            downAnswer9: [],
            downAnswer10: [],
            acrossAnswer1: [],
            acrossAnswer2: [],
            acrossAnswer3: [],
            acrossAnswer4: [],
            acrossAnswer5: [],
            acrossAnswer6: [],
            acrossAnswer7: [],
            acrossAnswer8: [],
            acrossAnswer9: [],
            acrossAnswer10: [],
        },
        H: 0,
        firstTitle: '庆祝澳门回归二十一周年',
        firstList: [],
        secondTitle: '中国文化常识',
        secondList: [],
        tipsL: [
            '一、在中國詩歌發展史上占有重要地位的作品。',
            '二、1840年，英國對中國發動的侵略戰爭。',
            '三、澳門除懸掛中華人民共和國國旗和國徽外，還可懸掛什麽?',
            '四、甘肅境內中國最大的石窟。',
            '五、隨朝創立的選人制度。',
            '六、正月十五稱為燈節、也稱為什麽?',
            '七、杜甫“隨風潜入夜，潤物細無聲”詩句的詩歌名稱。',
            '八、王之渙名句“欲窮千里目”的下半句。',
            '九、巴金撰寫的“激流三部曲”所指的作品。',
            '十、中國的共同語，在中國大陸稱為“普通話”,在台灣稱為什麽?',
        ],
        tipsR: [
            '1.中國政府解決香港澳門問題的基本方針。',
            '2.中華人民共和國的象徵，也是祖國獨立主權的標誌。',
            '3.項羽、劉邦為爭奪帝位，進行了四年的戰爭。',
            '4.位於河南省洛陽市內被稱為三大石窟之一。',
            '5.赵樹理短篇小說代表作。',
            '6.唐朝建立的年代。',
            '7.中國四大直轄市之一。',
            '8.中國最大最隆重的傳統節目。',
            '9.戴望舒的詩歌代表作。',
            '10.中國的三大傳統節日之一。'
        ]
    },
    methods: {
        handelBtn() {
            //点击按钮，获取输入的答案
            //竖排输入的答案
            this.answer.downAnswer1 = this.getDownAnswer(6, 14, 10,)
            this.answer.downAnswer2 = this.getDownAnswer(15, 21, 11,)
            this.answer.downAnswer3 = this.getDownAnswer(17, 21, 6,)
            this.answer.downAnswer4 = this.getDownAnswer(5, 9, 5,)
            this.answer.downAnswer5 = this.getDownAnswer(5, 10, 8,)
            this.answer.downAnswer6 = this.getDownAnswer(1, 7, 12,)
            this.answer.downAnswer7 = this.getDownAnswer(5, 7, 2,)
            this.answer.downAnswer8 = this.getDownAnswer(1, 3, 14,)
            this.answer.downAnswer9 = this.getDownAnswer(1, 3, 17,)
            this.answer.downAnswer10 = this.getDownAnswer(8, 11, 12,)

            //横排输入的答案
            this.answer.acrossAnswer1 = this.getAcrossAnswer(6, 12, '#item18',)
            this.answer.acrossAnswer2 = this.getAcrossAnswer(3, 7, '#item20',)
            this.answer.acrossAnswer3 = this.getAcrossAnswer(8, 12, '#item20',)
            this.answer.acrossAnswer4 = this.getAcrossAnswer(1, 6, '#item8',)
            this.answer.acrossAnswer5 = this.getAcrossAnswer(8, 11, '#item12',)
            this.answer.acrossAnswer6 = this.getAcrossAnswer(12, 15, '#item2',)
            this.answer.acrossAnswer7 = this.getAcrossAnswer(14, 18, '#item1',)
            this.answer.acrossAnswer8 = this.getAcrossAnswer(10, 15, '#item4',)
            this.answer.acrossAnswer9 = this.getAcrossAnswer(10, 13, '#item9',)
            this.answer.acrossAnswer10 = this.getAcrossAnswer(11, 13, '#item17',)

            let a = 0
            for (let index in this.answer) {
                //把答案数组转成字符串
                this.questionAnswers[a].customerAnswer = this.answer[index].join("")
                this.questionAnswers[a].questionId = a + 1
                a++
            }

            console.log(this.questionAnswers)

            // axios({
            //     method: 'post',
            //     url: 'http://8.129.111.60/knowledge/servlet/basiclaw/answer/api/advancedTest/calculateScore',
            //      data: {
            //         key: this.key,
            //         questionAnswers: this.questionAnswers
            //     },
            // }).then(function (response) {
            //     console.log(response);
            // }).catch(function (error) {
            //     console.log(error);
            // });

            request({
                url: '/knowledge/servlet/basiclaw/answer/api/advancedTest/calculateScore',
                method: 'post',
                data: {
                    key: this.key,
                    questionAnswers: this.questionAnswers
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })

        },


        getDownAnswer(startNum, endNum, X,) {
            //获取竖排答案
            let a = []
            for (let i = startNum; i < endNum; i++) {
                let iid = '#item' + i + X
                let t = document.querySelector(iid)
                if (t.innerHTML === '国' || t.innerHTML === '一' || t.innerHTML === '门' || t.innerHTML === '二' || t.innerHTML === '庆' || t.innerHTML === '年') {
                    a.push(...t.innerHTML)
                } else {
                    a.push(t.children[0].value)
                }
            }
            return a
        },
        getAcrossAnswer(startNum, endNum, id,) {
            //获取横排答案
            let b = []
            for (let i = startNum; i < endNum; i++) {
                let t = document.querySelector(id + i)
                b.push(t.children[0].value)
            }
            return b
        },
        downId(Y) {
            return "downId" + Y
        },
        item(Y, X) {
            return "item" + Y + X
        },
        getArr(StringL) {
            //分割固定字符串
            let newArr = [];
            let a = [...StringL].reduce(function (prev, cur, index, arr) {
                newArr.push(cur)
                return newArr
            }, 1);
            return newArr
        },

        fixedText(startNum, endNum, id, list) {
            //获取有文字固定的格子
            setTimeout(() => {
                //格子内固定提示
                for (let i = startNum; i < endNum; i++) {
                    let t = document.querySelector(id + i)
                    t.style.backgroundColor = '#BC3B3C'
                    t.style.color = 'white'
                    t.innerHTML = list[i - startNum]

                }
            })
        },
        acrossInputText(startNum, endNum, id, topic) {
            //获取横排输入
            setTimeout(() => {
                // 获取题号
                let titleIid = id + (startNum - 1)
                let title = document.querySelector(titleIid)
                title.innerHTML = '<p style="margin: 0">' + topic + '</p>'

                for (let i = startNum; i < endNum; i++) {
                    let t = document.querySelector(id + i)
                    t.style.backgroundColor = '#D19E65'
                    let iid = id + i
                    let inputId = 'input' + id + i
                    t.innerHTML = '<input style="background-color: #D19E65;width: 80%;padding: 0;color:white;height:42px;font-size:28px;border: none" type="text" :name=' + iid + ' :id = ' + inputId + '  MAXLENGTH="1"/>'

                }
            })
        },
        downInputText(startNum, endNum, X, topic) {
            //获取竖排输入
            setTimeout(() => {
                // 获取题号
                let titleIid = '#item' + (startNum - 1) + X
                let title = document.querySelector(titleIid)
                title.innerHTML = '<p style="margin: 0">' + topic + '</p>'
                const a = document.querySelector('#item510')
                a.innerHTML = '1.'
                const b = document.querySelector('#item1411')
                b.innerHTML = '2.'

                for (let i = startNum; i < endNum; i++) {
                    let iid = '#item' + i + X
                    let inputId = 'input' + iid
                    let t = document.querySelector(iid)
                    t.style.backgroundColor = '#D19E65'
                    t.innerHTML = '<input id=' + inputId + ' style="background-color: #D19E65;width: 80%;padding:0;color:white;height:42px;font-size:28px;border: none" type="text" :name=iid MAXLENGTH="1"/>'
                }
            })
        }
    },
    created() {
        //竖排输入
        this.downInputText(7, 14, 10, '1.')
        this.downInputText(16, 21, 11, '2.')
        this.downInputText(17, 21, 6, '3.')
        this.downInputText(5, 9, 5, '4.')
        this.downInputText(5, 10, 8, '5.')
        this.downInputText(1, 6, 12, '6.')
        this.downInputText(5, 6, 2, '7.')
        this.downInputText(1, 3, 14, '8.')
        this.downInputText(1, 3, 17, '9.')
        this.downInputText(8, 11, 12, '10.')

        //分割固定字符串
        this.firstList = this.getArr(this.firstTitle)
        this.secondList = this.getArr(this.secondTitle)

        //有固定文字的格子
        this.fixedText(10, 16, '#item15', this.secondList)
        this.fixedText(2, 13, '#item6', this.firstList)

        //横排输入
        this.acrossInputText(6, 12, '#item18', '一、')
        this.acrossInputText(3, 7, '#item20', '二、')
        this.acrossInputText(8, 12, '#item20', '三、')
        this.acrossInputText(1, 6, '#item8', '四、')
        this.acrossInputText(8, 11, '#item12', '五、')
        this.acrossInputText(12, 15, '#item2', '六、')
        this.acrossInputText(14, 18, '#item1', '七、')
        this.acrossInputText(10, 15, '#item4', '八、')
        this.acrossInputText(10, 13, '#item9', '九、')
        this.acrossInputText(11, 13, '#item17', '十、')

    },
    mounted() {
    }
})