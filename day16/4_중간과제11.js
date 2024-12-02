/* 
    중간과제11 : 공공데이터를 활용한 부평구 맛집 출력하기
        [조건]
            - table 마크업 사용하기
            - 업소명.소재지.지정메뉴.전화번호.업태 순으로 출력하기
        [제출] 강의 카카오톡방에 ip링크 제출
*/
let 부평구맛집 = {
    "currentCount": 70,
    "data": [
      {
        "소재지": "인천광역시 부평구 동암산로 10 (십정동)",
        "업 소 명": "(주)온누리푸드온누리장작구이",
        "업태": "한식",
        "연번": 1,
        "전화번호": "032-526-9292",
        "지정메뉴": "오리훈제"
      },
      {
        "소재지": "인천광역시 부평구 안남로417번길 20, 2층 (청천동)",
        "업 소 명": "1982삼계정",
        "업태": "한식",
        "연번": 2,
        "전화번호": "032-512-1982",
        "지정메뉴": "녹두삼계탕"
      },
      {
        "소재지": "인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)",
        "업 소 명": "갈비가",
        "업태": "한식",
        "연번": 3,
        "전화번호": "032-363-3787",
        "지정메뉴": "속초코다리냉면"
      },
      {
        "소재지": "인천광역시 부평구 평천로 553(삼산동)",
        "업 소 명": "경복궁삼계탕",
        "업태": "한식",
        "연번": 4,
        "전화번호": "032-511-1494",
        "지정메뉴": "들깨삼계탕"
      },
      {
        "소재지": "인천광역시 부평구 길주남로 109,1층 (부개동,송현주택)",
        "업 소 명": "곱창마당",
        "업태": "한식",
        "연번": 5,
        "전화번호": "032-271-2292",
        "지정메뉴": "한우곱창모듬구이"
      },
      {
        "소재지": "인천광역시 부평구 부평대로63번길 10-11 (부평동)",
        "업 소 명": "금강산추어탕",
        "업태": "한식",
        "연번": 6,
        "전화번호": "032-527-8118",
        "지정메뉴": "추어탕"
      },
      {
        "소재지": "인천광역시 부평구부평대로87번길 4(부평동)",
        "업 소 명": "뉴욕반점",
        "업태": "중식",
        "연번": 7,
        "전화번호": "032-516-4488",
        "지정메뉴": "삼선짬뽕,찹쌀탕수육"
      },
      {
        "소재지": "인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)",
        "업 소 명": "더히든키친",
        "업태": "양식",
        "연번": 8,
        "전화번호": "032-272-7276",
        "지정메뉴": "바질페스토파스타"
      },
      {
        "소재지": "인천광역시 부평구 마장로 402(청천동)",
        "업 소 명": "덕수갈비",
        "업태": "한식",
        "연번": 9,
        "전화번호": "032-517-4070",
        "지정메뉴": "왕갈비탕"
      },
      {
        "소재지": "인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)",
        "업 소 명": "동강해물탕",
        "업태": "한식",
        "연번": 10,
        "전화번호": "032-524-9166",
        "지정메뉴": "해물탕"
      },
      {
        "소재지": "인천광역시 부평구 백범로468번길 45 (십정동)",
        "업 소 명": "동암아구해물탕",
        "업태": "한식",
        "연번": 11,
        "전화번호": "032-435-0233",
        "지정메뉴": "해물찜,해물탕"
      },
      {
        "소재지": "인천광역시 부평구 부흥로 257-7 (부평동)",
        "업 소 명": "들내음 들깨칼국수",
        "업태": "한식",
        "연번": 12,
        "전화번호": "032-515-4151",
        "지정메뉴": "팥칼국수"
      },
      {
        "소재지": "인천광역시 부평구부평문화로80번길 16(부평동)",
        "업 소 명": "랑랑",
        "업태": "중식",
        "연번": 13,
        "전화번호": "0507-1303-3693",
        "지정메뉴": "산더미마라전골,마라샹궈"
      },
      {
        "소재지": "인천광역시 부평구 주부토로66번길 14,1층 102호(부평동)",
        "업 소 명": "명가설렁탕",
        "업태": "한식",
        "연번": 14,
        "전화번호": "032-330-8277",
        "지정메뉴": "양지,도가니,수육"
      },
      {
        "소재지": "인천광역시 부평구 부평대로17번길 21 (부평동)",
        "업 소 명": "명가한방삼계탕",
        "업태": "한식",
        "연번": 15,
        "전화번호": "032-517-5501",
        "지정메뉴": "한방삼계탕"
      },
      {
        "소재지": "인천광역시 부평구 마장로 253 (산곡동)",
        "업 소 명": "명품삼계탕",
        "업태": "한식",
        "연번": 16,
        "전화번호": "032-517-8777",
        "지정메뉴": "삼계탕"
      },
      {
        "소재지": "인천광역시 부평구 장제로 340번길 10,1층(삼산동,아이빌)",
        "업 소 명": "몽순이해물탕",
        "업태": "한식",
        "연번": 17,
        "전화번호": "032-330-3358",
        "지정메뉴": "해물탕"
      },
      {
        "소재지": "마장로384번길 12(청천동)",
        "업 소 명": "미담맛을논하다",
        "업태": "중식",
        "연번": 18,
        "전화번호": "032-511-2008",
        "지정메뉴": "중화냉면,동파육"
      },
      {
        "소재지": "인천광역시 부평구 영성서로 23-9 (삼산동)",
        "업 소 명": "미래가든",
        "업태": "한식",
        "연번": 19,
        "전화번호": "032-506-3126",
        "지정메뉴": "소양념갈비"
      },
      {
        "소재지": "인천광역시 부평구 경원대로 1130번길 7(십정동)",
        "업 소 명": "밀레",
        "업태": "양식",
        "연번": 20,
        "전화번호": "032-502-1600",
        "지정메뉴": "만조 풍기 파스타"
      },
      {
        "소재지": "인천광역시 부평구 경원대로1232번길 2 (산곡동)",
        "업 소 명": "밀채바지락칼국수",
        "업태": "한식",
        "연번": 21,
        "전화번호": "032-508-0120",
        "지정메뉴": "바지락칼국수"
      },
      {
        "소재지": "인천광역시 부평구 경원대로1367번길 42-12(부평동)",
        "업 소 명": "밥도둑간장게장",
        "업태": "한식",
        "연번": 22,
        "전화번호": "032-515-5951",
        "지정메뉴": "간장게장"
      },
      {
        "소재지": "인천광역시 부평구 산곡동 307-26",
        "업 소 명": "밥상한우",
        "업태": "한식",
        "연번": 23,
        "전화번호": "032-507-9615",
        "지정메뉴": "한우꽃등심"
      },
      {
        "소재지": "인천광역시 부평구 마장로 186-1 (산곡동,정림빌딩 1층)",
        "업 소 명": "변사또남원추어탕",
        "업태": "한식",
        "연번": 24,
        "전화번호": "032-527-7533",
        "지정메뉴": "추어탕"
      },
      {
        "소재지": "인천광역시 부평구 장제로 350, 2층,3층 (삼산동)",
        "업 소 명": "보릿골정찬",
        "업태": "한식",
        "연번": 25,
        "전화번호": "032-519-4155",
        "지정메뉴": "보리밥, 보쌈"
      },
      {
        "소재지": "인천광역시 부평구 경원대로 1270 (부평동)",
        "업 소 명": "부일식당",
        "업태": "한식",
        "연번": 26,
        "전화번호": "032-522-1700",
        "지정메뉴": "한우생등심"
      },
      {
        "소재지": "인천광역시 부평구 길주로 494번길 17(청천동)",
        "업 소 명": "부평불고기3578",
        "업태": "한식",
        "연번": 27,
        "전화번호": "032-524-3578",
        "지정메뉴": "소불고기"
      },
      {
        "소재지": "장제로 48(부평동)",
        "업 소 명": "북경소관",
        "업태": "중식",
        "연번": 28,
        "전화번호": "0507-1351-8868",
        "지정메뉴": "짬뽕,탕수육"
      },
      {
        "소재지": "인천광역시 부평구 부평문화로 51-1 (부평동)",
        "업 소 명": "북촌순두부",
        "업태": "한식",
        "연번": 29,
        "전화번호": "032-525-6600",
        "지정메뉴": "해물순두부찌개"
      },
      {
        "소재지": "인천광역시 부평구 길주로 643(삼산동)",
        "업 소 명": "삿뽀로부평점㈜엔타스",
        "업태": "일식",
        "연번": 30,
        "전화번호": "032-525-5533",
        "지정메뉴": "모듬스페셜"
      },
      {
        "소재지": "인천광역시 부평구 갈월서로 46, 상가동 지층 1호 (갈산동, 태화아파트)",
        "업 소 명": "샐돈키친",
        "업태": "양식",
        "연번": 31,
        "전화번호": "032-512-5036",
        "지정메뉴": "커플카츠"
      },
      {
        "소재지": "인천광역시 부평구 경원대로1377번길45-9(부평동)",
        "업 소 명": "서촌이가",
        "업태": "한식",
        "연번": 32,
        "전화번호": "032-529-8200",
        "지정메뉴": "모듬생선찜"
      },
      {
        "소재지": "인천광역시 부평구 부흥로 257-11(부평동)",
        "업 소 명": "세겹살",
        "업태": "한식",
        "연번": 33,
        "전화번호": "032-508-0092",
        "지정메뉴": "세겹살"
      },
      {
        "소재지": "인천광역시 부평구 부평대로 15, 7층 (부평동, 부평서파빌딩)",
        "업 소 명": "세븐스플로어",
        "업태": "양식",
        "연번": 34,
        "전화번호": "0507-1305-3027",
        "지정메뉴": "루꼴라감베리피자"
      },
      {
        "소재지": "인천광역시 부평구 길주로547번길 5 (갈산동)",
        "업 소 명": "소금빛풍천장어구이",
        "업태": "한식",
        "연번": 35,
        "전화번호": "032-513-9995",
        "지정메뉴": "복분자장어구이"
      },
      {
        "소재지": "인천광역시 부평구 장제로 206 (부평동)",
        "업 소 명": "신선설농탕 부평점",
        "업태": "한식",
        "연번": 36,
        "전화번호": "032-514-3966",
        "지정메뉴": "설렁탕"
      },
      {
        "소재지": "인천광역시 부평구 백범로 538, 2층(십정동)",
        "업 소 명": "신한우왕국정육식당",
        "업태": "한식",
        "연번": 37,
        "전화번호": "032-424-5763",
        "지정메뉴": "갈비탕"
      },
      {
        "소재지": "인천광역시 부평구 길주로595번길 21 (갈산동, 1층)",
        "업 소 명": "아라페로(A L'APERO)",
        "업태": "양식",
        "연번": 38,
        "전화번호": "0507-1341-2864",
        "지정메뉴": "오리가슴살마그레트&크림밤"
      },
      {
        "소재지": "인천광역시 부평구 부평문화로 70-2, 2층(부평동)",
        "업 소 명": "아메리칸트레이",
        "업태": "양식",
        "연번": 39,
        "전화번호": "032-511-8883",
        "지정메뉴": "과콰몰리쉬림프 오픈 샌드위치"
      },
      {
        "소재지": "인천광역시 부평구 장제로 346 (삼산동,2층,3층)",
        "업 소 명": "아우라지삼산점",
        "업태": "한식",
        "연번": 40,
        "전화번호": "032-525-4155",
        "지정메뉴": "메기매운탕"
      },
      {
        "소재지": "인천광역시 부평구 마장로 191 (산곡동)",
        "업 소 명": "양평신내서울해장국",
        "업태": "한식",
        "연번": 41,
        "전화번호": "032-504-4342",
        "지정메뉴": "내장탕,해장국"
      },
      {
        "소재지": "인천광역시 부평구 부평대로39-5(부평동, 1층)",
        "업 소 명": "에그브레이크",
        "업태": "양식",
        "연번": 42,
        "전화번호": null,
        "지정메뉴": "에그베네딕트"
      },
      {
        "소재지": "인천광역시 부평구 경원대로1363번길 8  (부평동, 1층)",
        "업 소 명": "에픽",
        "업태": "양식",
        "연번": 43,
        "전화번호": "032-512-6692",
        "지정메뉴": "마레크레마"
      },
      {
        "소재지": "인천광역시 부평구 경원대로1377번길 47 (부평동)",
        "업 소 명": "오구당당논우렁쌈밥",
        "업태": "한식",
        "연번": 44,
        "전화번호": "032-505-3388",
        "지정메뉴": "우렁쌈밥, 쭈꾸미해물찜"
      },
      {
        "소재지": "인천광역시 부평구 안남로 447 (청천동)",
        "업 소 명": "옥천식당",
        "업태": "한식",
        "연번": 45,
        "전화번호": "032-502-2623",
        "지정메뉴": "도가니탕"
      },
      {
        "소재지": "인천광역시 부평구  부흥북로5번길 19(부평동)",
        "업 소 명": "옹기네무지락",
        "업태": "한식",
        "연번": 46,
        "전화번호": "032-507-8892",
        "지정메뉴": "김치전골"
      },
      {
        "소재지": "인천광역시 부평구 원길로 28 (청천동)",
        "업 소 명": "용마루집",
        "업태": "한식",
        "연번": 47,
        "전화번호": "032-522-1199",
        "지정메뉴": "보쌈,두부"
      },
      {
        "소재지": "인천광역시 부평구 안남로 261(산곡동, 전방프라자 206호)",
        "업 소 명": "우정숯불갈비",
        "업태": "한식",
        "연번": 48,
        "전화번호": "032-507-0709",
        "지정메뉴": "수제돼지갈비(국내산)"
      },
      {
        "소재지": "인천광역시 부평구 충선로203번길 12, 2층 (삼산동, 뉴존프라자 201호)",
        "업 소 명": "우프",
        "업태": "양식",
        "연번": 49,
        "전화번호": "032-515-1154",
        "지정메뉴": "만조리조또"
      },
      {
        "소재지": "인천광역시 부평구 부평문화로115번길 17 (부평동)",
        "업 소 명": "원조감나무집참옻닭오리전문점",
        "업태": "한식",
        "연번": 50,
        "전화번호": "032-507-6769",
        "지정메뉴": "참옻닭"
      },
      {
        "소재지": "인천광역시 부평구 부흥로 257-13(부평동)",
        "업 소 명": "육시락부평점",
        "업태": "한식",
        "연번": 51,
        "전화번호": "032-506-2268",
        "지정메뉴": "한우물육회"
      },
      {
        "소재지": "인천광역시 부평구 화랑로47번길 24(산곡동)",
        "업 소 명": "은수저",
        "업태": "한식",
        "연번": 52,
        "전화번호": "032-502-0633",
        "지정메뉴": "연잎밥알찬밥상정식"
      },
      {
        "소재지": "인천광역시 부평구 주부토로 33(부평동,(1층))",
        "업 소 명": "일미 숯불고추장삼겹살(구:돈앤우숯불소금구이)",
        "업태": "한식",
        "연번": 53,
        "전화번호": "032-361-9229",
        "지정메뉴": "곱창구이"
      },
      {
        "소재지": "인천광역시 부평구 길주남로 119-1 (부개동)",
        "업 소 명": "전석기푸드",
        "업태": "한식",
        "연번": 54,
        "전화번호": "032-527-7878",
        "지정메뉴": "전통왕족발"
      },
      {
        "소재지": "인천광역시 부평구 주부토로 29 (부평동)",
        "업 소 명": "전통복회관",
        "업태": "일식",
        "연번": 55,
        "전화번호": "032-527-3300",
        "지정메뉴": "복어지리"
      },
      {
        "소재지": "인천광역시 부평구동암남로 29, 102호(십정동)",
        "업 소 명": "정기향옛날육개장",
        "업태": "한식",
        "연번": 56,
        "전화번호": "032-432-6787",
        "지정메뉴": "육개장"
      },
      {
        "소재지": "인천광역시 부평구 부흥로385번길 7(부개동)",
        "업 소 명": "제주최강흑돼지",
        "업태": "한식",
        "연번": 57,
        "전화번호": "032-507-3392",
        "지정메뉴": "제주흑돼지오겹살"
      },
      {
        "소재지": "인천광역시 부평구 시장로71번길 5(부평동)",
        "업 소 명": "조은삼계탕",
        "업태": "한식",
        "연번": 58,
        "전화번호": "032-515-5252",
        "지정메뉴": "능이오리백숙"
      },
      {
        "소재지": "신트리로6번길 3(부평동)",
        "업 소 명": "진향 중화요리",
        "업태": "중식",
        "연번": 59,
        "전화번호": "0507-1463-9006",
        "지정메뉴": "유니짜장면,누룽지탕"
      },
      {
        "소재지": "인천광역시 부평구 대정로 17(부평동)",
        "업 소 명": "착한낙지",
        "업태": "한식",
        "연번": 60,
        "전화번호": "032-507-9007",
        "지정메뉴": "낙지볶음덮밥"
      },
      {
        "소재지": "인천광역시 부평구 부흥로 309, 1층 (부평동)",
        "업 소 명": "참맛원주추어탕",
        "업태": "한식",
        "연번": 61,
        "전화번호": "032-505-5819",
        "지정메뉴": "추어탕"
      },
      {
        "소재지": "인천광역시 부평구 열우물로49번길 28 (십정동)",
        "업 소 명": "천리향양꼬치구이",
        "업태": "중식",
        "연번": 62,
        "전화번호": "032-422-6888",
        "지정메뉴": "찹쌀해물누룽지탕"
      },
      {
        "소재지": "인천광역시 부평구 청농로 2 (청천동)",
        "업 소 명": "철원양평해장국",
        "업태": "한식",
        "연번": 63,
        "전화번호": "032-501-0353",
        "지정메뉴": "해장국"
      },
      {
        "소재지": "인천광역시 부평구 부평북로 111 (청천동)",
        "업 소 명": "풍년가(家)",
        "업태": "한식",
        "연번": 64,
        "전화번호": "032-521-3077",
        "지정메뉴": "돼지갈비"
      },
      {
        "소재지": "인천광역시 부평구 백범로468번길 32 (십정동)",
        "업 소 명": "함경 1990",
        "업태": "한식",
        "연번": 65,
        "전화번호": "032-434-2759",
        "지정메뉴": "꿩만두"
      },
      {
        "소재지": "인천광역시 부평구 마장로 10,2~3층(십정동)",
        "업 소 명": "함흥관",
        "업태": "한식",
        "연번": 66,
        "전화번호": "032-527-4004",
        "지정메뉴": "활전복갈비탕"
      },
      {
        "소재지": "인천광역시 부평구 동수로 107 (부평동)",
        "업 소 명": "해조톳오리",
        "업태": "한식",
        "연번": 67,
        "전화번호": "032-523-5511",
        "지정메뉴": "오리,누룽지백숙"
      },
      {
        "소재지": "인천광역시 부평구 마장로 265, (산곡동,1층)",
        "업 소 명": "현미순두부 두부명가",
        "업태": "한식",
        "연번": 68,
        "전화번호": "032-546-6116",
        "지정메뉴": "현미순두부"
      },
      {
        "소재지": "인천광역시 부평구 마장로 245, 1층,2층(산곡동)",
        "업 소 명": "황가복",
        "업태": "중식",
        "연번": 69,
        "전화번호": "032-330-0353",
        "지정메뉴": "돼지짬뽕"
      },
      {
        "소재지": "인천광역시 부평구 마장로 138 (산곡동)",
        "업 소 명": "흥남면옥",
        "업태": "한식",
        "연번": 70,
        "전화번호": "032-504-9332",
        "지정메뉴": "소숯불갈비"
      }
    ],
    "matchCount": 70,
    "page": 1,
    "perPage": 500,
    "totalCount": 70
  }
console.log( 부평구맛집 );
console.log( 부평구맛집.data );

let tbody = document.querySelector( 'table > tbody' )
let html = '';
for( index = 0 ; index <= 부평구맛집.data.length - 1 ; index++){
    let info = 부평구맛집.data[index];
    console.log( info );
    html += `<tr> 
                <td> ${ info["업 소 명"]} </td>
                <td> ${ info.소재지} </td>
                <td> ${ info.지정메뉴 } </td>
                <td> ${ info.전화번호 } </td>
                <td> ${ info.업태 } </td>
    </tr>`
}
tbody.innerHTML = html;