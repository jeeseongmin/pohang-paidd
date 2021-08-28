const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").post((req, res) => {
	// 요청된 이메일과 패스워드가 데이터베이스에서 있는지 찾는다.
	User.findOne(
		{ email: req.body.email, password: req.body.password },
		(err, user) => {
			if (!user) {
				return res.json({
					loginToken: false,
					message: "로그인 정보가 일치하지 않습니다.",
				});
			} else {
				return res.json({
					loginToken: true,
					message: "관리자 계정으로 로그인되었습니다!",
				});
			}
		}
	);
	// 요청된 이메일이 데이터베이스에 있다면 맞는 비밀번호인지 확인.
	// 비밀번호까지 맞다면 토큰을 생성한다.
});

module.exports = router;
