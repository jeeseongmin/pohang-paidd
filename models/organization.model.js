const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    // 고유 id
    id: {
      type: String,
      required: true,
    },
    // 기관 id : ex) org1, org2, org3, org4
    orgId: {
      type: String,
      required: true,
    },
    // ex) 장애인활동지원사업
    name: {
      type: String,
      required: true,
    },
    // ex) Home > 주요사업 > 포항시지적장애인자립지원센터 > 센터소개
    path: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // json array 형식으로 key, value를 넣기로 함.
    // [{
    //   "사업현황" : {
    //     "센터명" : "포항시지적장애인자립지원센터",
    //     "센터장" : ""
    //   },
    //   "이용안내" : {},
    //   "직원현황" : {}
    // }]
    
    // 직원 현황을 제외하고, 나머지 커스텀할 수 있는
    contents: {
      type: [Object],
      required: true,
    },
    // 가장 하단에 배치되는 직원 현황에 대한 데이터
    // 직원 현황은 contents와 구조가 좀 다르고, 또 무조건 있는 부분이기 때문에 modeling 시에 일부러 다른 컬럼에 넣었다.
    // [{
    //   "직위" : "관리책임자",
    //   "성명" : "김옥희",
    //   "전화번호" : "054-253-9500",
    //   "업무내용" : ["", "", "", ""]
    // }]
    employees: {
      type: [Object],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model("organization", organizationSchema);

module.exports = Organization;