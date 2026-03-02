const IMG_BASE = location.pathname.includes('/html/') ? '../image/history-image/' : 'image/history-image/';
const historyData = [
  {
    yearLabel: "1886",
    sortKey: 1886,
    text: {
      lines: [
        "· 미국 애틀랜타에서 존 스티스 펨버턴 박사가 코카콜라를 개발",
        "· 약국에서 최초 판매 시작",
      ],
    },
  },
  {
    yearLabel: "1888",
    sortKey: 1888,
    text: { lines: ["아사 캔들러가 브랜드 권리 인수, 본격적인 사업화 시작"] },
    image: `${IMG_BASE}history-img1.png`,
  },
  {
    yearLabel: "1892",
    sortKey: 1892,
    text: { lines: ["The Coca-Cola Company 설립"] },
    image: `${IMG_BASE}history-img2.png`,
  },
  {
    yearLabel: "1894",
    sortKey: 1894,
    text: { lines: ["코카콜라 최초로 병에 담겨 판매 시작"] },
    image: `${IMG_BASE}history-img3.png`,
  },
  {
    yearLabel: "1899",
    sortKey: 1899,
    text: { lines: ["보틀링 시스템 계약 체결, 글로벌 확장의 기반 마련"] },
    image: `${IMG_BASE}history-img4.png`,
  },
  {
    yearLabel: "1915",
    sortKey: 1915,
    text: { lines: ["오늘날까지 이어지는 컨투어 보틀(곡선 병) 디자인 개발"] },
    image: `${IMG_BASE}history-img5.png`,
  },
  {
    yearLabel: "1923",
    sortKey: 1923,
    text: { lines: ["로버트 우드러프 취임, 글로벌 브랜드 전략 강화"] },
    image: `${IMG_BASE}history-img6.png`,
  },
  {
    yearLabel: "1928",
    sortKey: 1928,
    text: { lines: ["암스테르담 올림픽 공식 후원"] },
    image: `${IMG_BASE}history-img7.png`,
  },
  {
    yearLabel: "1941 ~ 1945",
    sortKey: 1941,
    text: {
      lines: [
        "· 아사 캔들러가 브랜드 권리 인수, 본격적인 사업화 시작",
        "· 전후 세계 각지에 생산 시설 확장",
      ],
    },
    image: `${IMG_BASE}history-img8.png`,
  },
  {
    yearLabel: "1950",
    sortKey: 1950,
    text: { lines: ["코카콜라, 타임지 표지에 최초 등장"] },
    image: `${IMG_BASE}history-img9.png`,
  },
  {
    yearLabel: "1960",
    sortKey: 1960,
    text: { lines: ["환타(Fanta), 스프라이트(Sprite) 인수"] },
    image: `${IMG_BASE}history-img10.png`,
  },
  {
    yearLabel: "1971",
    sortKey: 1971,
    text: { lines: ['전설적인 광고 “I’d Like to Buy the World a Coke” 공개'] },
    image: `${IMG_BASE}history-img11.png`,
  },
  {
    yearLabel: "1982",
    sortKey: 1982,
    text: { lines: ["다이어트 코크(Diet Coke) 출시"] },
    image: `${IMG_BASE}history-img12.png`,
  },
  {
    yearLabel: "1985",
    sortKey: 1985,
    text: { lines: ["뉴 코크(New Coke) 출시"] },
    image: `${IMG_BASE}history-img13.png`,
  },
  {
    yearLabel: "1993",
    sortKey: 1993,
    text: { lines: ["폴라베어(북극곰) 광고 캠페인 시작"] },
    image: `${IMG_BASE}history-img14.png`,
  },
  {
    yearLabel: "2005",
    sortKey: 2005,
    text: { lines: ["코카콜라 제로(Coca-Cola Zero) 출시"] },
    image: `${IMG_BASE}history-img15.png`,
  },
  {
    yearLabel: "2011",
    sortKey: 2011,
    text: { lines: ['글로벌 캠페인 “Share a Coke” 시작'] },
    image: `${IMG_BASE}history-img16.png`,
  },
  {
    yearLabel: "2016",
    sortKey: 2016,
    text: { lines: ["코카콜라, 제로, 라이트 통합 브랜드 운영"] },
    image: `${IMG_BASE}history-img17.png`,
  },
  {
    yearLabel: "2018",
    sortKey: 2018,
    text: { lines: ["음료 기업으로의 전환 선언, 커피·차·워터 브랜드 강화"] },
    image: `${IMG_BASE}history-img18.png`,
  },
  {
    yearLabel: "2020",
    sortKey: 2020,
    text: { lines: ["브랜드 포트폴리오 구조조정 및 지속가능경영 전략 강화"] },
    image: `${IMG_BASE}history-img19.png`,
  },
  {
    yearLabel: "2021",
    sortKey: 2021,
    text: { lines: ["Coca-Cola Zero Sugar 리뉴얼 글로벌 확대"] },
    image: `${IMG_BASE}history-img20.png`,
  },
  {
    yearLabel: "2022",
    sortKey: 2022,
    text: { lines: ["친환경 패키징·재활용 목표 강화"] },
    image: `${IMG_BASE}history-img21.png`,
  },
  {
    yearLabel: "2023 ~ 2024",
    sortKey: 2023,
    text: {
      lines: [
        "· AI·디지털 기반 마케팅 확대",
        "· 지속가능성, 저당·무당 제품 중심 포트폴리오 전개",
      ],
    },
    image: `${IMG_BASE}history-img22.png`,
  },
];
