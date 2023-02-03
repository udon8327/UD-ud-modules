var vm = new Vue({
    el: "#app",
    data: {
        isModalShow: false,
        user: {
            name: "",
            phone: ["", "", ""],
            note: "",
            age: "",
            birthday: "",
            radio: "",
            checkbox: [],
            select: "",
            selectLink: ["", "", ""],
            selectLinkSp: ["", "", "", ""],
            twzip: ["", ""],
            date: ["", "", ""],
            isActive: false,
            captcha: "",
            captchaCode: "",
            isAgree: false,
        },
        rules: {
            name: [{ type: "required" }, { type: "name" }],
            phone: [{ type: "required" }],
            note: [{ type: "required" }],
            age: [{ type: "required" }, { type: "number" }],
            birthday: [{ type: "required" }, { type: "date" }],
            radio: [{ type: "required" }],
            checkbox: [{ type: "required" }],
            select: [{ type: "required" }],
            selectLink: [{ type: "required" }],
            selectLinkSp: [{ type: "required" }],
            twzip: [{ type: "required" }],
            date: [{ type: "required" }],
            isActive: [{ type: "required" }],
            isAgree: [{ type: "required", message: "請先同意相關使用條款" },],
            captcha: [{ type: "required" }, { type: "equal", equalTo: "captchaCode", caseIgnore: "true" }],
        },
        options: [
            { label: "甲", value: "a" },
            { label: "乙", value: "b" },
            { label: "丙", value: "c" },
        ],
        storeOptions: [
            { label: "台北市", value: "01", children: [
                    { label: "中正區", value: "011", children: [
                            { label: "中正01", value: "0111", disabled: "true" },
                            { label: "中正02", value: "0112", children: [
                                    { label: "中正02甲", value: "01121" },
                                    { label: "中正02乙", value: "01122" },
                                ] }
                        ] },
                    { label: "大安區", value: "012", disabled: true, children: [
                            { label: "大安01", value: "0121" },
                            { label: "大安02", value: "0122" },
                        ] },
                    { label: "信義區", value: "013", children: [
                            { label: "信義01", value: "0131" },
                            { label: "信義02", value: "0132" },
                        ] },
                ] },
            { label: "台中市", value: "02", children: [
                    { label: "西屯區", value: "021", children: [
                            { label: "中正01", value: "0211" },
                            { label: "中正02", value: "0212" },
                        ] },
                    { label: "北屯區", value: "022", children: [
                            { label: "大安01", value: "0221" },
                            { label: "大安02", value: "0222" },
                        ] },
                    { label: "中區", value: "023", children: [
                            { label: "信義01", value: "0231" },
                            { label: "信義02", value: "0232" },
                        ] },
                ] },
        ],
    },
    mounted: function () {
        this.postData();
    },
    computed: {},
    methods: {
        formSubmit: function () {
            var _this = this;
            this.$refs.form.validate(function () {
                _this.udAlert({ msg: "驗證成功!!" });
            });
        },
        getData: function () {
            udAxios.get('test')
                .then(function (res) {
                console.log('res: ', res);
            });
        },
        postData: function () {
            udAxios.post('test', {
                name: "UDON"
            })
                .then(function (res) {
                console.log('res: ', res);
            });
        },
        upload: function (param) {
            console.log('param: ', param);
            // let file = this.$refs.file.files[0];
            var formData = new FormData();
            formData.append('image', param.file);
            udAxios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    Authorization: "Client-ID " + '0259aa13deafaac' //放置你剛剛申請的Client-ID
                },
            }).then(function (res) { return console.log(res); })
                .catch(function (err) { return console.log(err); });
        },
        // tools
        toUrl: function (url) {
            location.href = url;
        },
    }
});
//# sourceMappingURL=demo.js.map