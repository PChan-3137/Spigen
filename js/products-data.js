// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '갤럭시S25 FE 먼지없는 강화유리 액정 보호 필름 글라스tR 이지핏',
            price: 37000,
            salePrice: 25900,
            discount: 30,
            rating: 4.5,
            reviews: 1234,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250929/4d58214803c79ba719353e82c036be22.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250929/4d58214803c79ba719353e82c036be22.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250929/4f1372133b10fa9578b4b45955b5cfac.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250929/2c544372e3e4a767cff3e211277a472b.jpg',
            ],
            badge: 'sale',
            badgeText: '30%',
            description: `
                <h3>프리미엄 알루미나코어 강화유리</h3>
                <p>프리미엄 강화유리의 새로운 기준, 알루미나코어</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>10배 이상의 무게를 버티는 강화된 강도</li>
                    <li>9H+ 강한 표면 경도</li>
                    <li>고순도 유리로 느껴지는 극강의 선명함</li>
                    <li>가벼운 손길에도 탁월한 터치감</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>글라스tR 이지핏 X 2</li>
                    <li>스퀴지</li>
                    <li>수평유지 패드</li>
                    <li>클리너 천</li>
                    <li>먼지제거 스티커 X 2</li>
                    <li>습식 클리너 X 2</li>
                </ul>
            `,
            spec: {
                '슈피겐 케이스 호환': '',
                '오염방지 올레포빅 코팅': '',
                '비산방지 코팅': ''
            },
            reviewList: [
                {
                    id: 1,
                    author: '김철수',
                    rating: 5,
                    date: '2024.01.15',
                    content: '갤럭시S25FE, 투명 보호 필름은 항상 사용하는제품으로 좋아요',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이영희',
                    rating: 4,
                    date: '2024.01.12',
                    content: '예전에도 좋았지만, 깔끔하게 붙이기 더 좋아진것 같아요. 잡티하나 없이 정확한 위치에 붙였습니다. 남은 한장을 쓸일이 있을까 싶을 정도로 잘 붙었고, 케이스와 궁합도 완벽합니다.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '박민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '누구나도 깔끔하게 부착할 수 잇는 제품이어서 대만족입니다. 감사합니다',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '최지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '핸드폰 화면에 촤악 알맞게 잘 부착했어요. 가이드라인 있어서 참 좋았습니다!!',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '정대현',
                    rating: 5,
                    date: '2024.01.05',
                    content: '이전에 제품보다 부착이 매우 쉽습니다.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '갤럭시 Z폴드7 Qi2 충전 맥세이프 케이스 초슬림 에어스킨 맥핏',
            price: 48000,
            salePrice: 39900,
            discount: 17,
            rating: 4.6,
            reviews: 892,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/5d310619411f70c1602f08d359385d56.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/5d310619411f70c1602f08d359385d56.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/fe0e9b3e1022774f13b3c10509a375f6.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/3ea7a9c49ad71745fd5f6e4717d868e0.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/702455ec1561262f9b34b78971689cac.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/81deff0b41aa4764e1325cd26158ac0b.jpg'
            ],
            badge: 'hot',
            badgeText: 'HOT',
            description: `
                <h3>에어스킨 맥핏</h3>
                <p>슬림핏 투명 맥세이프 케이스</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>Qi2 충전에 가장 적합한 케이스</li>
                    <li>다양한 맥핏 호환성</li>
                    <li>외부 돌출없이 깔끔한 마그넷링</li>
                    <li>숨김 없이 돋보이는 맑은 투명함</li>
                    <li>끼운 듯, 안 끼운 듯 최상의 그립감</li>
                    <li>앱 알림, 전화, 메시지 수신 및 발신</li>
                </ul>
            `,
            spec: {
                '케이스': '147 X 163 X 17mm',
                '포트': '14mm X 세로 상단 오픈형',
                '두께': '후면 2.2mm X 측면 1.4mm',
                '무게': '39g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.14',
                    content: '생각한만큼 깔끔하고 좋아요 강추드립니다',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '강태영',
                    rating: 4,
                    date: '2024.01.11',
                    content: '깔끔하네요~ 처음 생각했던거 보다 괜찮은것 같습니다',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '윤서연',
                    rating: 5,
                    date: '2024.01.09',
                    content: '삼성 정품보다 더 만족스럽습니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 4,
                    author: '조현우',
                    rating: 4,
                    date: '2024.01.07',
                    content: '케이스가 딱 맞아요 믿고쓰는 슈피겐~~^^',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: '맥세이프 카드 지갑 파우치 틴탭zip 맥핏',
            price: 35900,
            salePrice: 32310,
            discount: 10,
            rating: 4.8,
            reviews: 567,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260102/bf1fe3b2bcc015dfa6ff05d8b04d8576.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260102/bf1fe3b2bcc015dfa6ff05d8b04d8576.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260102/1c1e062979eda426468c1c1ac46f92a0.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260102/d0d346455349c60050aa7d462f382fc2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260102/6f06ea38803f6519e6a265573b26a84e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260102/1d9b6777ecf849415322ed675f98f82c.jpg'
            ],
            badge: 'sale',
            badgeText: '10%',
            description: `
                <h3>zip zip, CARRY IT ALL!</h3>
                <p>가볍게 담아보는 오늘 하루, 지금 바로 만나보세요.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>카드, 에어팟, 카치, 립밤까지 한방에 zip!</li>
                    <li>카드는 최대 20장까지 zip!</li>
                    <li>스트랩으로 자유로운 길이 조절</li>
                </ul>
            `,
            spec: {
                '무게': '본품 80g / 차폐카드 4.5g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '장성호',
                    rating: 5,
                    date: '2024.01.13',
                    content: '카드,무선이어폰 등 여기저기 주머니를 차지하던 것들을 한번에 정리할수있어 좋아요.',
                    helpful: 289,
                    verified: true
                },
                {
                    id: 2,
                    author: '한소영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '배송 빠르고 생각보다 여러모로 쓸모있을꺼같아요',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '오준혁',
                    rating: 4,
                    date: '2024.01.09',
                    content: '뒤에 버클? 부분 도색이 약한거 말고는 좋아요',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '아이폰17 맥세이프 케이스 슬림 투명 에어스킨하이브리드맥핏',
            price: 45000,
            salePrice: 32900,
            discount: 27,
            rating: 4.7,
            reviews: 892,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251010/57fa41ad51d74e579564818c48a44edd.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251010/57fa41ad51d74e579564818c48a44edd.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251010/d0dbaee79db52e2cc5d7922cd39d2272.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251010/f5df9a8ec90b4c5c3818ab7d9ab4773e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251010/d0a8c4868ffd870ebf5001c0b575e49f.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251010/616ac36fc338d7d04714e911621bb1c2.jpg'
            ],
            badge: 'best',
            badgeText: 'BEST',
            description: `
                <h3>AIRSKIN HYBRID</h3>
                <p>가볍고 확실한 보호, 에어스킨하이브리드 맥핏</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>슬림함과 보호력을 다 갖춘 하이브리드 케이스</li>
                    <li>외부 충격에도 걱정없는 강한 보호력</li>
                    <li>스크래치 걱정 없는 카메라 컨트롤 커버</li>
                </ul>
            `,
            spec: {
                '케이스': '74 X 152 X 13mm',
                '포트': '14 X 7mm',
                '두께': '1.2 X 1.8mm',
                '무게': '29g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '송미라',
                    rating: 5,
                    date: '2024.01.12',
                    content: '핏 좋고 까밀끔해요. 좋습니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤태준',
                    rating: 4,
                    date: '2024.01.10',
                    content: '믿고사는 슈피겐 역시는 역시입니다',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.08',
                    content: '이전 핸드폰 쓸때도 슈피겐 사용했었는데 이번에두 넘 좋아용 역시 슈피겐^^',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: '슈피겐 맥세이프 그립톡 양면 자석 듀얼팝 맥핏',
            price: 30500,
            salePrice: 22900,
            discount: 25,
            rating: 4.5,
            reviews: 456,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/e477145597c1b7b56450dfe8fa9d7ee7.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/e477145597c1b7b56450dfe8fa9d7ee7.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/0f03267cf997c772cf9e8acb182f9c4e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/3808c25d7a9be4c2962db850f54d8e8c.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/893b2b73b9b4fb8aaf7a1071ba1b88bd.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>Dual Pop Mag Fit</h3>
                <p>실리콘 양면 맥세이프 홀더</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>안쪽도, 바깥쪽도 묵직한 자력</li>
                    <li>각도 조절로 찾는 최적의 그립감</li>
                    <li>부드러운 실리콘 소재로 편안한 그립</li>
                </ul>
            `,
            spec: {
                '사이즈': '59 X 59 X 3mm / 58 X 58 X 4mm',
                '무게': '16g / 22g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '박지훈',
                    rating: 5,
                    date: '2024.01.11',
                    content: '얅고 잘 붙고 쓸만 합니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '바깥쪽 자석은 안쪽에 비하면 조금 약하지만, 약한 자력이 필요할때 사용하면 좋아요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '배송 바로 왔구요 케이스가 튼튼해서 맘에 드네여',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: '레노버 리전탭 Y700 4세대 3세대 2세대 저반사 강화유리 먼지제거 액정필름 이지핏라이트 AR',
            price: 39000,
            salePrice: 29000,
            discount: 26,
            rating: 4.6,
            reviews: 234,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260105/7f492e67402f1fde8e631eef444f0e7e.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260105/7f492e67402f1fde8e631eef444f0e7e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/8310bf7a15b86b33cb343fd16409f351.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/99cb053d0f5a2f55b34ef7cbf1ab5bff.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/9bddc0e2f92708c518fb2a8f9d20ce7c.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>GlastR EZ Fit Lite AR</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>빛반사를 줄여주는 AR 저반사 액정보호필름</li>
                    <li>태양광 아래에서도 선명한 화질 그대로</li>
                    <li>가이드 툴로 오차 없이 정확하게</li>
                    <li>한번의 부착으로 먼지까지 제거</li>
                </ul>
            `,
            spec: {
                '4세대 전용 수평유지 패드': '',
                '습식 클리너 X 2': '',
                '먼지제거 스티커': '',
                '스퀴지': ''
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '성능이 뛰어나요',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '갤럭시S25 엣지 케이스 리퀴드에어',
            price: 25800,
            salePrice: 19900,
            discount: 23,
            rating: 4.8,
            reviews: 678,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/6324e583efa13d98d231910a3f1f781a.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/6324e583efa13d98d231910a3f1f781a.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/4ca710c82e69b8c63bffe82907ececaf.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/e26e850f9579a7a5a23a40b38d4cde41.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/15dccca46807bf0d3ce2d4b894cf8833.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/ea245e05fc18e5ca59d574627c8db4e9.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>촉감은 부드럽고, 라인은 선명하게</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>매력적인 드로이드 패턴</li>
                    <li>깔끔한 슬림핏</li>
                    <li>손에 쏙 들어오는 편안한 그립감</li>
                    <li>미끄럼방지 측면 슬라이드 패턴</li>
                </ul>
            `,
            spec: {
                '케이스': '79 X 162 X 12mm',
                '포트': '15 X 7mm',
                '두께': '1.8 X 1.8mm',
                '무게': '34g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정우진',
                    rating: 5,
                    date: '2024.01.12',
                    content: '손에서 잘 안 미끄러지고, 그립감이 아주 좋습니다.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '한미영',
                    rating: 5,
                    date: '2024.01.10',
                    content: '리퀴드에어의 명품같은 블랙 외관과 착붙는 그립감이 만족스럽다. 장기신뢰성은 사용해보면서 관찰해보기로~@',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '강민수',
                    rating: 4,
                    date: '2024.01.08',
                    content: '투명은 쓰기 싫고 그립감으로 얇아서 샀는데 역시 후회 없습니다. 다만 아무래도 보호감은 좀 걱정이 됩니다.',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: '갤럭시S25 플러스 케이스 리퀴드에어',
            price: 25500,
            salePrice: 19900,
            discount: 22,
            rating: 4.4,
            reviews: 345,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/6b195515323501303d2f8bf96fc5e6e7.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/6b195515323501303d2f8bf96fc5e6e7.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/96bcbbc40aaa5ed5c02a6155723fe211.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/b11a449c493f401f9519e1f64efb2c43.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/93084fec387e091bf3df618ba0e75f7e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/9535f6be561c5e223fc2ad3433d24ba4.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>LIQUID AIR</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>타임리스 드로이드 패턴</li>
                    <li>깔끔한 슬림핏</li>
                    <li>손에 쏙 들어오는 편안한 그립감</li>
                    <li>외부 충격에 걱정없는 강한 보호력</li>
                </ul>
            `,
            spec: {
                '케이스': '79 X 162 X 10mm',
                '포트': '15 X 7mm',
                '두께': '1.8 X 1.8mm',
                '무게': '33g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.11',
                    content: '역시나 가볍고, 안정감이 있네요',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '역시 믿고 사용하는 제품~~ 아주 만족합니다',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '배송도빠르고 가격도싸고 좋아요',
                    helpful: 156,
                    verified: true
                }
            ]
        }
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '핸드폰 스트랩 DA30L 도난방지 자석형 크로스바디 핸드폰줄',
            price: 50000,
            salePrice: 35500,
            discount: 29,
            rating: 4.5,
            reviews: 567,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260205/b931ef61d55a8bbce9945a7c5f9ad6a2.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260205/b931ef61d55a8bbce9945a7c5f9ad6a2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260205/0ebda7c4058d92537c8afa894ae6dc22.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260205/6bab7cd332e471a20f2c83230e3a1fd2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260205/a2fba10a83558be2a5e9546c8665d965.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260205/750ec3dd023b76bd4d55abe6c4e038ac.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>핸즈프리 심플 라이프의 시작</h3>
                <p>여행에서 일상까지. 스트랩 하나로 완성되는 핸즈프리 경험</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>길이 조절은 직관적으로</li>
                    <li>고정은 깔끔하게</li>
                    <li>가벼운 무게와 뛰어난 내구성</li>
                    <li>안정적인 부착과 유연한 소재</li>
                </ul>
            `,
            spec: {
                '사이즈' : ' 가로 27mm X 세로 1820mm X 높이 18mm',
                '무게': '74g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '튼튼한 스트랩이라 안심하고 사용할 수 있어요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '이지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '가격이 조금 비싸긴 하지만 품질이 확실히 좋아요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '아이폰 맥세이프 삼각대 카드지갑 슬림폴드 맥핏 트라이팟',
            price: 53200,
            salePrice: 39900,
            discount: 25,
            rating: 4.6,
            reviews: 234,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260128/eaca39dc18649f4f6998537caf9adeef.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260128/eaca39dc18649f4f6998537caf9adeef.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260128/c2cc565117c15511f9de4d30bf0a91a8.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260128/1517574d2a91906766d5d6b0c5c0ef82.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260128/3c2465dc5cb7b62d5a58280611b099be.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260128/ed6e2a48fced75da6002186b119f3818.jpg',
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>얇지만 완전한, 8mm의 설계</h3>
                <p>컴팩트하게 담긴 핵심 기능</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>언제 어디서든 원하는 높이로</li>
                    <li>자유로운 각도 조절</li>
                    <li>더 얇은 스탠드</li>
                    <li>깔끔한 힌지 디테일</li>
                </ul>
            `,
            spec: {
                '최대 높이': '16cm',
                '각도 조절': '0~135도',
                '소재': '폴리우레탄 가죽',
                '무게': '92g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.09',
                    content: '기존 맥세이프 카드지갑보다 세울수 있는 받침이 있어 아기에게 영상 보여주기 편해요.',
                    helpful: 167,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 4,
                    date: '2024.01.07',
                    content: '안정적이고 튼튼해요. 다만 가격이 조금 부담스럽긴 합니다.',
                    helpful: 123,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: '진공 흡착식 차량용 맥세이프 거치대 MFT36',
            price: 25000,
            salePrice: 20000,
            discount: 20,
            rating: 4.9,
            reviews: 1234,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260116/129f7acac8474c2f8de0ae11ae7faa7c.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260116/129f7acac8474c2f8de0ae11ae7faa7c.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260116/773fa6a391dc4fc74a2524ceadddd6cb.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260116/631d271ec35b6e261294f9da817e0f43.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260116/eaf95d11344b0cbabfafddfe219e6a0b.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260116/7297e3f8b26a4af9f87489e249cd04fb.jpg'
            ],
            badge: 'sale',
            badgeText: 'SALE',
            description: `
                <h3>붙이고 돌리면 완벽 부착</h3>
                <p>다이얼만 돌리면 고정되는 진공 흡착 거치대</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>빈틈없는 듀얼 고정</li>
                    <li>압도적인 지지력</li>
                    <li>가장 편한 시야각</li>
                    <li>컴팩트한 접이식 설계</li>
                    <li>씻으면 살아나는 리유저블 패드</li>
                </ul>
            `,
            spec: {
                '사이즈': '가로 68mm X 세로 68mm X 높이 45mm',
                '무게': '123g',
                
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태현',
                    rating: 5,
                    date: '2024.01.13',
                    content: '튼튼하고 폰이 무거운데도 잘 붙어있네요',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '박준영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '가격이 비싸긴 하지만 그만한 가치가 있어요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 3,
                    author: '최미라',
                    rating: 4,
                    date: '2024.01.07',
                    content: '전반적으로 만족스러워요. 다만 휴대하기는 조금 불편하긴 해요.',
                    helpful: 234,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '아이폰17 프로 맥스 맥세이프 케이스 펀치홀 클래식LS맥핏',
            price: 49000,
            salePrice: 44100,
            discount: 10,
            rating: 4.7,
            reviews: 456,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260113/9da1cb2bcb6995ff0cb84c558956a7d2.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260113/9da1cb2bcb6995ff0cb84c558956a7d2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260113/369acc1d7edc22d7c4cc347c40d6e3c8.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260113/8038f8215ca1e35dcf64f01857fd013d.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260113/8bd8c07a155e96feb5d0e91d18b1b436.jpg'
            ],
            badge: 'sale',
            badgeText: '10%',
            description: `
                <h3>An iconic design detail.</h3>
                <p>매킨토시를 닮은 아이코닉한 디자인</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>맥세이프 마그넷 내장</li>
                    <li>카메라와 스크린보다 높게 설계</li>
                    <li>카메라 컨트롤 풀커버</li>
                </ul>
            `,
            spec: {
                '케이스': '가로 84mm X 세로 170mm X 높이 15mm',
                '포트': '가로 14mm X 세로 7mm',
                '두께': '후면 2.8mm, 측면 2.9mm',
                '무게': '63g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '장민호',
                    rating: 5,
                    date: '2024.01.12',
                    content: '이걸 끼고 있는 한 아이폰이 고장날 일은 없겠다는 생각이 드는군요.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤지혜',
                    rating: 5,
                    date: '2024.01.10',
                    content: '이쁘고 마감이 훌륭하네요. 같이 구매한 스트랩까지 어서 끼워보고 싶네요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 3,
                    author: '이동욱',
                    rating: 4,
                    date: '2024.01.08',
                    content: '레트로 디자인이 맘에 들어요. 상세페이지에는 이미지가 보이던데 빨리 맥세이프 카드 지갑도 출시해 주세요~',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: 'Qi2 25W 3in1 폴더블 맥세이프 초고속 무선 충전기 EF323MQ',
            price: 114100,
            salePrice: 89000,
            discount: 22,
            rating: 4.6,
            reviews: 289,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260105/c47c0872b10c8a8f62a2b1938d7ade8e.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20260105/c47c0872b10c8a8f62a2b1938d7ade8e.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/d4c692981d03e1e23200a6fabdbd270a.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/4a88cfd221620357d6497d8ddedce561.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/4dfcff5ee2827716f10903fb8dd3338c.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20260105/02cf8ee2a8f957ccdab526f53296a3f0.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>무선 충전의 새로운 기준</h3>
                <p>Qi2.2 25W 차원이 달라진 무선충전</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>가장 빠른 아이폰 무선충전</li>
                    <li>완벽한 멀티 충전</li>
                    <li>슬라이드 한번으로 확장되는 워치 충전</li>
                    <li>폴딩으로 더 여유로운 공간</li>
                    <li>튼튼한 힌지 내구성</li>
                </ul>
            `,
            spec: {
                '구성품': '무선충전기 EF323MQ 본체 1개, USB-C to C 케이블 2m 1개 *USB 어댑터 별도 구매',
                '크기': '61 X 106.5 X 35.1 mm',
                '무게': '254g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.11',
                    content: '튼튼하고 좋습니다 추천합니다',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영수',
                    rating: 4,
                    date: '2024.01.09',
                    content: '회사에서 쓰려고 샀는데 정말 잘산거같아요 세개 다 충전해도 금방 충전되는거같고 무엇보다 선이 한개니까 책상 깨끗해보여서 이미지(?)좋아보여요 회사에서 갓템임 역시 비싼값하는거같네요 잘샀어요~',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.07',
                    content: '충전빨리되고 아주 좋습니다',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: '60W 케이블 일체형 차량용 3포트 시거잭 충전기 EV603BT',
            price: 51100,
            salePrice: 39900,
            discount: 25,
            rating: 4.6,
            reviews: 567,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251230/fbef77e8c3ffbd318388843ab95ec991.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251230/fbef77e8c3ffbd318388843ab95ec991.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251230/adf52b2a98476c7843867a8f5f3e1ab6.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251230/77089c077c778fb0814b740212f10f76.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251230/05f9840366178dd76ab1f848557a47e1.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251230/2161b785bb78be156537920a1923f312.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>케이블 일체형 3포트 시거잭 충전기</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>쓸만큼만 뽑아 쓰는 릴 타입 케이블 Built-in</li>
                    <li>안 쓸 때는 깔끔하게 Re-wind</li>
                    <li>최대 72cm까지 확장</li>
                </ul>
            `,
            spec: {
                '사이즈': '51 X 28 X 97mm',
                '입력': '12-24V DC 6.5A',
                '단일포트 출력': 'USB-C,USB-C,USB-A',
                '멀티포트 출력': 'USB-C + USB-C/USB-A',
                '무게': '약 72g',
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '슈피겐은 삼성과 같은 신뢰의 아이콘 같아요. 정교하고 고급스러운 느낌의 제품들은 항상 만족스럽습니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '정태영',
                    rating: 4,
                    date: '2024.01.08',
                    content: '편안하게 케이블을 뽑아쓰니 정말 편리합니다',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.06',
                    content: '디자인 이쁘고 기능이 심플해서 좋아요',
                    helpful: 156,
                    verified: true
                },
            ]
        }
    ],
    // 특가 상품 목록
    sale: [
        {
            id: 13,
            title: '테슬라 모델Y 주니퍼 모델3 하이랜드 암레스트 콘솔 히든박스 수납함 TO221H',
            price: 42500,
            salePrice: 31900,
            discount: 25,
            rating: 4.7,
            reviews: 2345,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/c86fb0a06941161823f086abc2b872b2.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/c86fb0a06941161823f086abc2b872b2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/afb621a47c47221e6325454d7b35e387.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/b0704a64128047b6f72513617ee1e8a2.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/cba17ed564c756b6f400e8f0d18726ab.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/859fc06a58b6a6de24ddfc8bdb5a2d29.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>히든 스토리지 박스</h3>
                <p>수납/보관함 오거나이저</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>오차없는 정확한 핏</li>
                    <li>간편한 오픈 방식</li>
                    <li>공간 보호는 기본, 오랫동안 깔끔하게</li>
                </ul>
            `,
            spec: {
                '호환 모델': '모델Y 프리미엄 2026 - / 모델Y 주니퍼 2025',
                '설치 영역': '센터콘솔 하단',
                '크기': '150 X 133 X 18mm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '홍길동',
                    rating: 5,
                    date: '2024.01.14',
                    content: '아직 차도 출고전이지만 슈피겐의 명성때문에 선구매했습니다. 너무 기대됩니다.',
                    helpful: 567,
                    verified: true
                },
                {
                    id: 2,
                    author: '김영희',
                    rating: 5,
                    date: '2024.01.12',
                    content: '딱 맞습니다. 비싸도 품질은 좋아요',
                    helpful: 489,
                    verified: true
                },
                {
                    id: 3,
                    author: '이철수',
                    rating: 4,
                    date: '2024.01.10',
                    content: '정확하게 잘장착되고 충전카드 보관하기 참 좋네요.',
                    helpful: 345,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '테슬라 모델Y 주니퍼 모델3 하이랜드 자동차 팔걸이 콘솔쿠션 암레스트 커버 TO240H 블랙',
            price: 46500,
            salePrice: 34900,
            discount: 25,
            rating: 4.8,
            reviews: 789,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/cd835aa8ffe22bed6929e791021c95fc.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/cd835aa8ffe22bed6929e791021c95fc.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/a13163296f3fdd04a6143972fe8d3b0c.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/c9b5a7f5ba1e5d750a6fa14ea3aed11b.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/13c69f53e6f9e374ae246ef492e9f3b5.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/d430efa3e4ebbbdaf82ee8a03f71573d.jpg'
            ],
            badge: 'sale',
            badgeText: '25%',
            description: `
                <h3>센터 콘솔박스 쿠션 커버</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>팔을 올려 놓는 순간, 느껴지는 편안함</li>
                    <li>완벽한 핏을 위한 정교함</li>
                </ul>
            `,
            spec: {
                '호환 모델': '모델Y 프리미엄 2026 - / 모델Y 주니퍼 2025',
                '설치 영역': '센터콘솔 하단',
                '크기': '334 X 220 X 68mm',
                '무게': '369g'
            },
            reviewList: [
                {
                    id: 1,
                    author: '최민수',
                    rating: 5,
                    date: '2024.01.13',
                    content: '아직 차도 출고전이지만 슈피겐의 명성때문에 선구매했습니다. 너무 기대됩니다.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '박지영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '깔끔하고 이질감이 없네요',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.09',
                    content: '테슬라정품인듯 통일감있네요^^',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: 'Qi2 맥세이프 기내 반입 보조배터리 5000mAh EA2205MQ',
            price: 59600,
            salePrice: 45900,
            discount: 23,
            rating: 4.6,
            reviews: 345,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251017/22e56ede4931d29cfd6feec20a352b2f.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20251017/22e56ede4931d29cfd6feec20a352b2f.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251017/b3304d5976b070656fb333771bf38782.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251017/7a532e2445bfe1ee5fd92162328ae3c1.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20251017/c48ef7a8cbac6bdd41f947d5961fe1cb.jpg'
            ],
            badge: 'sale',
            badgeText: '23%',
            description: `
                <h3>충전은 든든하게, 휴대는 슬림하게</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>15W로 즐기는 빠른 충전 속도</li>
                    <li>5,000mAh로 충전은 든든하게</li>
                    <li>휴대는 슬림하게</li>
                    <li>기종은 다라도, 편리함은 하나로</li>
                </ul>
            `,
            spec: {
                '크기': '66 X 107 X 12mm',
                '무게': '149g',
                '용량': '5000mAh 3.85V 19.25Wh'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태수',
                    rating: 5,
                    date: '2024.01.12',
                    content: '야외 업무가 빈번하여 여러 제품을 검색하다 딱 맞는 성능 좋은 제품을 찾아 너무 좋네요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '맥세이프 보조배터리 처음 써보는 중인데 일주일 쓴 아직까진 만족합니다.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: '태블릿 아이패드 갤럭시탭 마그네틱 스탠드 원탭 클램프',
            price: 109000,
            salePrice: 69900,
            discount: 36,
            rating: 4.8,
            reviews: 1234,
            image: 'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/d9d4ea6fac22365903874c8d0efa8a83.jpg',
            images: [
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/big/20250725/d9d4ea6fac22365903874c8d0efa8a83.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/2db3b708c83921a2c31b32657e7080cf.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/2b8ee2f74bbd836fcf86ddb6e3bd55bd.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/3e3b0d20d38b8d29cb423f78aec5bdc8.jpg',
                'https://ecimg.cafe24img.com/pg1856b68119313080/spigenstore/web/product/extra/big/20250725/e7293bfd18930a26ad6ce5ed1695b0fb.jpg'
            ],
            badge: 'sale',
            badgeText: '36%',
            description: `
                <h3>멀티태스커를 위한 태블릿 암 스탠드</h3>
                <h4>주요 특징</h4>
                <ul>
                    <li>강력한 클램프 고정력</li>
                    <li>튼튼함은 슈피겐 집안 내력</li>
                    <li>내 태블릿을 보조 모니터로</li>
                    <li>가볍게 붙지만 묵직한 자력</li>
                </ul>
            `,
            spec: {
                '사이즈': '97 X 97 X 782.2mm',
                '무게': '794.5g (+- 15g)',
                '최대하중': '5kg',
                '권장하중': '3kg'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.13',
                    content: '헤드 퀄리티 넘사벽, 내돈내산 솔직후기',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 5,
                    date: '2024.01.11',
                    content: '겨울철 침대에 있는게 좋아서 거치대랑 케이스 구매해서 쓰고 있는데 너무 만족해요',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '이미영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '무척 안정적이라 오랜시간 공부하는 데 집중력이 올라갑니다.',
                    helpful: 312,
                    verified: true
                },
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.sale];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
