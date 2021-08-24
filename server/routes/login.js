const router = require("express").Router();
let User = require("../models/user.model");

router.route("/login").post((req, res) => {
	// 요청된 이메일을 데이터베이스에서 있는지 찾는다.
	User.findOne({ email: req.body.email }, (err, user) => {
		if (!user) {
			return res.json({ loginSuccess: false, message: "이메일이 없습니다." });
		}
	});
	// 요청된 이메일이 데이터베이스에 있다면 맞는 비밀번호인지 확인.
	// 비밀번호까지 맞다면 토큰을 생성한다.
});

module.exports = router;
