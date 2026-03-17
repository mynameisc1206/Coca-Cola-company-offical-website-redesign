# 🥤 코카콜라 컴퍼니(The Coca-Cola Company) 웹사이트 리뉴얼 팀 프로젝트

### 코카콜라 컴퍼니는 

1886년 5월 8일, 존 펨버턴(John Pemberton) 박사가 미국 조지아주 애틀랜타에 있는 제이콥스 약국(Jacobs’ Pharmacy)에서 코카-콜라를 처음으로 발명한 이후, 130여 년이 지난 지금, 코카-콜라 컴퍼니(The Coca‑Cola Company)는 전 세계 200여 개국 이상에 진출한 글로벌 종합음료회사로 성장했다. 스파클링, 주스, 차, 커피, 스포츠 음료 등 총 200여 개의 브랜드를 보유하고 있습니다.

### 프로젝트 링크
- **기획서 (Figma)**: [바로가기](https://www.figma.com/deck/Wb4sei9XzctPdpoa2EOhJ2/%ED%95%9C%EA%B5%AD-%EC%BD%94%EC%B9%B4-%EC%BD%9C%EB%9D%BC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%EA%B8%B0%ED%9A%8D%EC%84%9C)
- **디자인 가이드 (Figma)**: [바로가기](https://www.figma.com/proto/Z8KIZzOfrZoNq3ryVGJ5Tn/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)
- **결과물 (GitHub Pages)**: [바로가기](https://mynameisc1206.github.io/Coca-Cola-company-offical-website-redesign/)


## 🚀 프로젝트 개요


### 프로젝트 주제
왜 우리 팀은 멀쩡히 잘 돌아가는 코카-콜라의 홈페이지를 새로 만들게 되었나, 이는 현재 홈페이지가 "**브랜드의 얼굴이 되지 못하는 사이트**"라는 우리 팀의 판단이 있기 때문입니다. 공식 홈페이지는 단순히 브랜드와 제품에 대한 정보를 제공하는 채널이 아닙니다, 브랜드의 *얼굴*이자, 고객과의 가장 중요한 디지털 접점입니다. 즉, 지금의 홈페이지는 "*깔끔한 브랜드 안내 페이지*"이지 "*코카-콜라를 경험하는 디지털 공간*"이 아니라는 저희의 판단입니다.

본 프로젝트는 기존의 단순한 정보 제공형 사이트를 넘어, 코카콜라의 강력한 브랜드 정체성을 체험할 수 있는 **디지털 공간**으로 리뉴얼하는 것을 목표로 하였습니다

### 제작 목적
- **브랜드 경험(BX) 강화**: 코카콜라의 정체성을 시각적으로 극대화하여 '브랜드의 얼굴'이 되는 사이트 구축
- **인터랙티브 정보 전달**: AOS, Swiper 등 라이브러리를 활용한 역동적인 정보 제공
- **디자인 시스템 구축**: 팀 프로젝트의 일관성을 위한 디자인 가이드라인 및 메뉴얼 제작
- **반응형 웹 마스터**: 요소의 크기 및 굵기 조절을 통해 다양한 기기 환경에서 최적화된 UX 제공

### 사용 기술 스택
- **HTML5**: 시맨틱 마크업을 통한 구조 설계
- **Sass (SCSS)**: 변수, 믹스인을 활용한 효율적인 스타일 관리
- **JavaScript (Vanilla)**: 인터랙티브 요소 및 동적 UI 제어
- **AOS / Swiper.js**: 스크롤 애니메이션 및 슬라이더 구현

---

## 🏗️ 전체 구조 설명

### 본인 기여도 (약 25%)
- **디자인 (Main)**: 메인 페이지 디자인 및 서브페이지 디자인 메뉴얼 제작
- **구현 (Main)**: 메인 페이지 20% 구현 및 **지속가능성(Sustainability)** 파트 전체 구현


### 페이지 구성도

```
index.html                   → 메인 페이지 (홈)
brandintroduction.html       → 자사 소개 페이지
history.html                 → 자사 연혁 소개 페이지
brands.html                  → 산하 자회사(브랜드) 소개 페이지
brand.html                   → 자회사(브랜드) 소개 디테일 페이지
brandnews.html               → 브랜드 소식(news) 제공 페이지
sustainabilty.html           → 자사 ESG(친환경) 경영 소개 페이지
sustainabilty_campagin.html  → 자사 ESG(친환경) 경영 소개 디테일 페이지
sustainabilty_water.html     → 자사 ESG(친환경) 경영 소개 디테일 페이지
```

### 공통 레이아웃 구조

```
┌─────────────────────────────────┐
│         Header                  │
│  - 로고 / 네비게이션(GNB)        │
├─────────────────────────────────┤
│                                 |                          
│         Main Content            │
│      (페이지별 고유 콘텐츠)       │
│                                 |
├─────────────────────────────────┤
│         Footer                  │
│  - 주소 및 연락처 / 협력사 링크   │
└─────────────────────────────────┘
```


## 📄 페이지별 구현 의도 및 설명

**제가 100% 전담하여 구현한 결과물 위주로 큐레이션 하였습니다**

<img width="80%" height="80%" alt="Image" src="https://github.com/user-attachments/assets/07260a81-78e6-4311-9f94-bb1260c2a99c" />

### [메인 페이지] (brands 섹션)
**구현 목표**
- 다양한 레이아웃을 제공하여 사용자에게 시각적·경험적 충격을 제공

**구현 방법**
- *데이터 바인딩*: HTML의 data-tab 속성과 JavaScript의 getAttribute를 활용해 버튼과 콘텐츠 간의 연결 고리를 생성
- *일괄 초기화 및 선택적 활성화*: 
       1,forEach문을 사용하여 모든 요소의 active 클래스를 일괄 제거(Reset)함으로써 상태 충돌을 방지
       2,클릭된 버튼의 targetId와 일치하는 id를 가진 요소만 찾아 클래스를 추가하는 조건부 렌더링 방식 채택
- *일괄 초기화 및 선택적 활성화*: let 키워드를 사용하여 블록 스코프 내에서 변수를 안전하게 관리하고, 직관적인 네이밍을 통해 코드의 가독성 확보

**어려웠던 점**
- *다중 리스트 제어*: 버튼, 텍스트, 이미지가 각각 별도의 NodeList로 관리되어 이를 한 번에 동기화하는 로직에서 시행착오를 겪음
---> 버튼 클릭 시 발생한 targetId를 변수로 저장하고, 이를 나머지 두 리스트(textBox, imgBox)를 순회할 때 비교 조건으로 활용하여 해결 

**개선 방향**
- *확장성 고려*: 콘텐츠 영역이 늘어나더라도 대응할 수 있도록, 개별 id 매칭 방식 대신 인덱스(index)를 활용하거나 객체 형태의 데이터를 맵핑하는 공통 함수로 고도화 계획

---

<p align="center"><img width="40%" height="40%" align="top" alt="Image" src="https://github.com/user-attachments/assets/cd5a7c44-81e6-437e-9d56-4a6e609f39dd" /> &nbsp&nbsp | &nbsp&nbsp <img width="40%" height="40%" align="top" alt="Image" src="https://github.com/user-attachments/assets/d020c8fb-473b-48a1-a499-7c19950b282f" /></p>

### [지속가능성 페이지] (Sustainability_campagin/water)

**구현 목표**
- *시각적 위계 확립*: 방대한 텍스트와 이미지 중 중요한 정보가 먼저 눈에 띄도록 등장 순서와 방향을 설계하여 시각적 피드백 강화
- *스토리텔링형 정보 전달*: 사용자의 스크롤 속도에 맞춰 콘텐츠가 순차적으로 등장하게 함으로써, 코카콜라의 지속가능성 메시지를 하나의 이야기처럼 몰입감 있게 전달

**구현 방법**
- *AOS 라이브러리 최적화*:
       1,data-aos-duration 및 data-aos-delay 속성을 세밀하게 조정하여 너무 빠르거나 느리지 않은 최적의 사용자 경험(UX) 제공
       2,애니메이션에 민감하거나 시각적 방해를 느끼는 사용자를 위해 미디어 쿼리를 이용한 반응형 설계

**어려웠던 점**
  
**개선 방향**
- *스크롤 성능 최적화*: 요소가 많아질 경우 브라우저 렌더링에 부담을 줄 수 있으므로, 하드웨어 가속(will-change)을 활용하거나 꼭 필요한 섹션에만 애니메이션을 한정하여 성능 최적화 진행 예정



## 📝 학습 포인트 및 성과

- **디자인 매뉴얼의 힘**: 서브페이지 가이드라인을 직접 제작하며 팀 프로젝트에서 일관된 UX/UI 유지의 중요성을 학습
- **BX와 기술의 결합**: 단순 코딩을 넘어 브랜드 아이덴티티를 기술적으로 어떻게 녹여낼지 고민하는 과정에서 기획 역량 강화
- **협업 프로세스 이해**: 디자인과 구현의 비중을 조율하며 팀원 간의 원활한 소통 및 역할 분담의 중요성 체감

---


## 디자인 진행

- **팀 프로젝트**: 기획, 디자인, 개발 파트 협업
- **문서화**: 본인의 주력 분야인 디자인 메뉴얼 제작 및 지속가능성 페이지 구현을 중심으로 작성

#### 메인페이지: 디자인(100%) / 구현(20%): header, footer, brands-sect

<img width="90%" height="90%" alt="Image" src="https://github.com/user-attachments/assets/a845c8d1-cfc3-4523-aa14-3df940feb10b" />

- **헤더** / **배너**

<img width="90%" height="90%" alt="Image" src="https://github.com/user-attachments/assets/e338e873-db37-4c60-aea8-4e35eb8d13da" />

- **브랜드 소식** : Swiper animation(Library)

<img width="90%" height="90%" alt="Image" src="https://github.com/user-attachments/assets/b6777147-a144-4731-a219-960e0149b15c" />

- **자회사(브랜드) 소개** : TabMenu(JavaScript)

<img  width="90%" height="90%" src="https://github.com/user-attachments/assets/298b592b-7b85-49c0-bcda-7e3575d39c0c" />

- **브랜드 소개** : Scroll animation(JavaScript)

<img width="90%" height="90%" alt="Image" src="https://github.com/user-attachments/assets/f1ede9df-eb2c-44e9-b5f8-8fffe4ed89e4" />

- **브랜드 연혁 소개** : Animation(JavaScript + Css)

<img width="90%" height="90%" alt="Image" src="https://github.com/user-attachments/assets/707f5068-749b-485a-b37d-bda33c44720a" />

- **자사 ESG(친환경) 경영 소개** : Hover animation(JavaScript + Css)

---

- **전체이미지**

<p align="center">| :리뉴얼 후: | :리뉴얼 전: |</p>

<p align="center">| <img width="45%" height="45%" align="top" alt="Image" src="https://github.com/user-attachments/assets/a0c311dd-3ad4-4d00-bd02-ee57d857a3ec" /> &nbsp&nbsp | &nbsp&nbsp <img width="40%" height="40%" align="top" alt="Image" src="https://github.com/user-attachments/assets/2643ca62-ec41-46c5-ad4f-ffa038a7f481" /> |</p>

### 서브페이지(디자인 시스템(Design System) 구축)

- **디자인 시스템(Design System) 구축 및 준수**: 

프로젝트의 일관성을 유지하기 위해 상세 디자인 매뉴얼을 선제적으로 수립하였으며, 이를 기반으로 서브페이지의 UI 설계 및 프론트엔드 구현을 진행하여 시각적 완성도를 극대화했습니다.

<p  align="center">
       <img width="35%" height="35%" align="top" alt="Image" src="https://github.com/user-attachments/assets/3b828daa-0a7a-489f-9eb3-97d8efe53b54" /> 
       &nbsp | &nbsp 
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/e4afcd94-c2d0-46f8-a143-6ec1d45530cf" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/73aeee92-1344-430c-be53-8514a66fd92e" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/d8922ed4-2f65-40f6-8b58-0e22f6f62b09" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/5693afd9-6d33-467a-b9ab-52fb8ca8aef9" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/1cdaa6f0-9884-4f1d-ad4b-4df0b7a3b668" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/74098dfc-8d3b-47be-8cf0-98647bb35f1d" />
       <img width="8%" height="8%" align="top" alt="Image" src="https://github.com/user-attachments/assets/1c652e36-2cf6-4894-a3c9-e2fd29ab8e87" />
</p>


## 📝 프로젝트 성찰

### 1. 디자인 가이드라인 수립을 통한 협업 효율성 제고
팀 프로젝트의 시각적 통일성을 유지하기 위해 **상세 디자인 매뉴얼 제작을 주도**했습니다. 단순히 심미적인 요소를 넘어, 팀원들이 공통된 규격 안에서 작업할 수 있는 가이드라인을 제공함으로써 개발 과정에서의 커뮤니케이션 비용을 줄이고 프로젝트의 전체적인 완성도를 높이는 경험을 했습니다.

### 2. 브랜드 정체성을 담은 인터랙티브 UI 설계
코카콜라의 브랜드 가치를 효과적으로 전달하기 위해 메인 페이지와 **지속가능성(Sustainability) 섹션**의 기획 및 구현에 집중했습니다. AOS 라이브러리와 Swiper를 활용해 사용자가 브랜드를 직접 '경험'할 수 있는 마이크로 인터랙션을 설계하며, 기획 의도를 기술적으로 구현하는 '브릿지(Bridge)' 역할의 중요성을 깨달았습니다.

### 3. 개발 가능성을 고려한 디자인(Design for Dev)
디자인 작업 시 항상 '코드로 구현 가능한 구조인가'를 최우선으로 고민했습니다. Sass 변수와 그리드 시스템을 고려한 가이드를 제작하여 팀원들이 반응형 레이아웃을 구현할 때 겪을 수 있는 시행착오를 최소화했으며, 이를 통해 디자이너와 개발자 사이의 원활한 협업 프로세스를 학습했습니다.

### 4. 한계점 및 향후 과제
팀 프로젝트 특성상 전체 페이지의 구현 비중보다 설계와 가이드 제작에 많은 시간을 할애했습니다. 이러한 경험은 구조적인 사고를 기르는 데 큰 도움이 되었으며, 향후에는 단순히 시각적인 규칙을 넘어 **개발자가 코드 구현 시 직면하는 변수까지 고려한 '기술 친화적 디자인 시스템(Design System)' 구축**에 더 깊게 도전해보고 싶습니다. 디자인의 의도가 개발 단계에서 1%의 오차 없이 구현될 수 있도록 가이드라인의 정밀도를 높이는 것이 저의 다음 목표입니다.
