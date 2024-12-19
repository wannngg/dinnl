// 添加到main.js开头
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error:', msg);
    console.error('URL:', url);
    console.error('Line:', lineNo);
    console.error('Column:', columnNo);
    console.error('Error object:', error);
    return false;
};

// 将详细信息数据和显示函数移到全局作用域
window.heritageDetails = {
    '衡山影子戏': {
        description: '表演内容丰富，艺人通过操纵皮影人偶，配合说唱和音乐，演绎各种故事，其人偶制作精美，表演生动传神。',
        features: ['人偶制作精美', '表演生动传神', '音乐说唱结合', '故事内容丰富'],
        history: '清顺治年间至今',
        location: '衡山县'
    },
    '南岳庙会': {
        description: '从农历腊月初八持续至正月十五，除夕夜的跨年敲钟是南岳大庙重要的祈福活动之一，此外还有祭祀祝融、投龙祈福许愿等仪式。文艺表演：包括南岳神戏、朝圣歌舞等，还有舞龙狮、踩高跷、扒旱船等民俗表演，以及威风锣鼓、扭秧歌等庞大阵容表演，而元宵舞龙争霸赛、火灯巡游等活动也精彩纷呈。',
        features: [
            '跨年敲钟祈福',
            '祭祀祝融仪式',
            '南岳神戏表演',
            '民俗表演活动',
            '元宵舞龙争霸',
            '火灯巡游'
        ],
        history: '唐代至今',
        location: '南岳衡山'
    },
    '湖南渔鼓': {
        description: '湖南渔鼓起源可追溯至唐代的"道情"，当时是道士传道化募时叙述道家之事与情的方式，湖南渔鼓曲目丰富，有"唐三千，宋八百"之说，可分为大传、私访、小记三类，多取材于历史故事、神话传说、民间故事等',
        features: [
            '道情传承',
            '曲目丰富多样',
            '三类表演形式',
            '历史故事题材',
            '神话传说题材',
            '民间故事题材'
        ],
        history: '唐代至今',
        location: '湖南衡阳'
    },
    '耒阳坛下乡铜锣': {
        description: '起源于三国时期，刘备派张飞驻守耒阳坛下，随军工匠将北方金属冶炼技术传入，为传统手工制作，工艺严谨复杂，各道工序环环相扣、一气呵成，对火候和技艺手法要求精准，其音质清脆纯净、洪亮悠远、音准好、经久耐用，有"一锤定音"的美誉。',
        features: [
            '传统手工制作',
            '工艺严谨复杂',
            '火候控制精准',
            '音质清脆纯净',
            '音准好耐用',
            '一锤定音'
        ],
        history: '三国时期至今',
        location: '耒阳市坛下乡'
    },
    '裕熹油纸伞': {
        description: '油纸伞历史悠久，裕熹油纸伞作为我国工艺伞流派之一，它制作过程繁琐，需全手工完成，主要包括骨架和伞面制作。先选六年以上冬竹，经锯料、浸泡等处理后劈成竹条，制成伞骨并钻孔；伞面则用上好桃花纸，在生柿子漆里浸透后，一张张贴在伞骨上，随后绘上图案、涂上桐油，在室内吊起阴干， 80多道工序耗时6天左右。',
        features: [
            '全手工制作',
            '选用六年冬竹',
            '使用桃花纸',
            '生柿子漆工艺',
            '手绘图案',
            '80多道工序'
        ],
        history: '清代至今',
        location: '衡山县黄花新区'
    },
    '衡州花鼓戏': {
        description: '衡州花鼓戏以小生、小旦、小丑"三小"行为主，尤以"丑行"为首。表演充满生活气息，演员常农忙时务农，闲暇时唱戏，与观众互动性强，具有较强的即兴表演成分。有165曲之多，包括《打铁》《南岳八大怪》《书房调叔》等，剧本通俗易懂，杂用土语乡音，生活气息浓郁，多反映劳动、爱情、家庭生活等，体现了湘南地区的民俗文化和风土人情。',
        features: [
            '三小行当',
            '丑行为主',
            '互动性强',
            '即兴表演',
            '165曲目',
            '生活气息浓'
        ],
        history: '明朝嘉靖年间至今',
        location: '衡阳市'
    },
    '祁剧': {
        description: '祁剧兼有高腔、昆腔、弹腔三种声腔。高腔演唱时，演员独唱，鼓师帮腔，声调高亢激昂，节奏自由；昆腔则较为婉转细腻，注重唱腔的韵味和旋律的优美；弹腔分为南路和北路，南路柔和婉转，北路高亢刚劲。其伴奏乐器有高音战鼓、帽形燥鼓、硬弓祁胡等，它剧目繁多，有《目连传》《精忠传》《观音戏》《西游记》《夫子戏》《杨门女将》《孟丽君》等，涵盖历史故事、神话传说、民间故事等',
        features: [
            '三种声腔',
            '高腔激昂',
            '昆腔婉转',
            '弹腔南北',
            '特色乐器',
            '剧目丰富'
        ],
        history: '明代中叶至今',
        location: '祁阳县'
    },
    '九市稻草龙': {
        description: '九市稻草龙以稻草为主要材料，精心编织而成，造型逼真，色彩鲜艳，龙身骨骼分明，龙头不怒自威，且嘴能张合，舌能伸缩，眼能睁闭，尾能摇摆，其活泼灵动的形象和欢快的音乐给人们带来热情与欢乐。九市稻草龙具有娱人、祀神、表演三重身份，代表着人们不屈服于自然灾害又与自然和谐相处，更代表着人们对美好生活的向往和力量，体现了当地劳动人民的聪明智慧，有利于融洽邻里关系，对衡阳县经济的蓬勃发展起着独特的作用。',
        features: [
            '造型逼真',
            '色彩鲜艳',
            '动作灵活',
            '三重身份',
            '文化意义',
            '社会价值'
        ],
        history: '清代康熙年间至今',
        location: '衡阳县台源镇台九村'
    },
    '大桥剪纸': {
        description: '大桥剪纸是衡东县大桥镇的传统民间艺术，以其独特的艺术风格和精湛的技艺闻名。剪纸作品题材广泛，包括传统吉祥图案、民间故事、生活场景等，具有浓郁的乡土气息和艺术价值。',
        features: [
            '技艺精湛',
            '题材丰富',
            '民间特色',
            '艺术价值高',
            '传承有序',
            '文化底蕴深'
        ],
        history: '清代至今',
        location: '衡东县大桥镇'
    },
    '蔡伦古法造纸技艺': {
        description: '蔡伦古法造纸技艺是由东汉蔡伦发明并完善的传统造纸工艺，在耒阳市得到完整传承。工艺包括选料、浸泡、捣碎、抄纸、晾晒等多道工序，每个环节都需要严格把控，以确保纸张品质。',
        features: [
            '工序繁复',
            '技艺精准',
            '原料考究',
            '品质上乘',
            '传承完整',
            '历史悠久'
        ],
        history: '东汉元兴元年至今',
        location: '耒阳市蔡伦竹海'
    },
    '岳北山歌': {
        description: '岳北山歌是流传于衡山县白果镇一带的民间音乐艺术形式，以其豪放的歌声、真挚的情感和独特的唱腔著称。山歌内容丰富，包括劳动、爱情、生活等主题，体现了当地人民的精神面貌。',
        features: [
            '唱腔独特',
            '情感真挚',
            '内容丰富',
            '即兴发挥',
            '群众基础好',
            '地方特色浓'
        ],
        history: '明清时期至今',
        location: '衡山县白果镇'
    },
    '南岳朝圣': {
        description: '南岳朝圣是以南岳衡山为中心的重要民间信仰活动，香客们通过朝拜、祈福、许愿等形式表达对神灵的崇敬。活动融合了道教、佛教等多种宗教文化元素，形成了独特的朝圣文化。',
        features: [
            '信仰虔诚',
            '仪式庄重',
            '文化多元',
            '规模宏大',
            '影响深远',
            '传统延续'
        ],
        history: '秦汉时期至今',
        location: '南岳衡山'
    }
    // 可以继续添加其他非遗项目的详细信息
};

// 将showDetails函数设置为全局函数
window.showDetails = function(heritageName) {
    const details = window.heritageDetails[heritageName];
    if (!details) return;

    // 移除已存在的详情模态框
    const existingModal = document.querySelector('.details-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 创建详情模态框
    const modal = document.createElement('div');
    modal.className = 'details-modal';
    modal.innerHTML = `
        <div class="details-content">
            <span class="close-details">&times;</span>
            <h3>${heritageName}详细信息</h3>
            <div class="details-body">
                <p class="details-description">${details.description}</p>
                <div class="details-features">
                    <h4>特色亮点：</h4>
                    <ul>
                        ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="details-info">
                    <p><strong>历史传承：</strong>${details.history}</p>
                    <p><strong>所在地：</strong>${details.location}</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 添加关闭功能
    const closeBtn = modal.querySelector('.close-details');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    // 添加显示动画
    setTimeout(() => modal.classList.add('show'), 10);
};

// 将时间轴数据设置为全局变量
window.timelineData = {
    'shadowPlay': [
        {
            year: 1644,
            title: '起源与开创',
            event: '衡山福田铺乡农民彭凤举从外地学艺归来，成立影子戏民间组织"老龙会"，开创了衡山影子戏的先河，至今已有三百六十多年历史。'
        },
        {
            year: 1935,
            title: '初步发展',
            event: '影子戏艺人在影型制作上有所突破，影型增高至一尺二寸，后又增至一尺三寸高，花纹刻得更精细，龙袍、莽靠等更逼真，并出现影型制作的职业艺人，衡山影子戏成为当地民间婚、丧、喜、庆和节日的必备娱乐。'
        },
        {
            year: 1949,
            title: '繁荣时期开始',
            event: '艺人们自发集资，从外地买回新式皮影棚架和部分新影型与景片，使影子戏艺术向现代化迈进。'
        },
        {
            year: 1965,
            title: '受到重视',
            event: '国家文化部副部长徐平羽到衡山视察，点名要看衡山影子戏。'
        },
        {
            year: 1984,
            title: '规模扩大',
            event: '福田公社已有影子戏担子15副，30人，还成立了影子戏艺人理事会。'
        },
        {
            year: 1985,
            title: '获得认可',
            event: '福田艺人王春云应邀参加南岳庙会演出，上演《郭子仪征西》连台戏二十本。年末，福田铺乡被湖南省人民政府授予全省"皮影艺术之乡"称号。'
        },
        {
            year: 2000,
            title: '国家级认可',
            event: '福田铺乡被国家文化部命名为"中国民间艺术(皮影)之乡"。'
        },
        {
            year: 1989,
            title: '衰落时期',
            event: '受现代娱乐方式冲击，庙会演出市场萎缩，加上语言、文化、经济等因素限制，观众减少，艺人纷纷转行，衡山影子戏逐渐衰落。'
        },
        {
            year: 2006,
            title: '省级保护',
            event: '衡山影子戏被列入湖南省省级非遗保护名录。'
        },
        {
            year: 2014,
            title: '世界级认可',
            event: '作为"中国皮影"的一部分，被联合国教科文组织列入《人类非物质文化遗产代表作名录》。'
        },
        {
            year: 2020,
            title: '传承发展',
            event: '当地政府和文化部门积极开展挖掘搜集工作，整理艺人们的"桥路本"笔记，组织影子戏爱好者培训，传承四平腔、影型操作、锣鼓敲打等技艺。'
        }
    ],
    'templeFair': [
        {
            year: 618,
            title: '起源与早期发展',
            event: '南岳庙会起源与对祖先山神的崇拜，当以驱邪消灾、祈福求寿、社火狂欢为主的民俗活动。传说天符大帝每年农历五月十七日下凡，到衡山一带为百姓收瘟治病，南岳在这前后半个月内会举行宗教、民俗活动庆贺。'
        },
        {
            year: 712,
            title: '唐朝时期重要发展',
            event: '自唐以来，南岳大庙成为国家祭祀和民间朝圣的重要场所，庙会活动不断丰富发展。如唐玄宗曾将生辰刻于铜简上，派内侍于南岳紫盖仙洞投下金龙玉简，祈福长寿和大唐国运长盛不衰。'
        },
        {
            year: 1980,
            title: '现代发展',
            event: '南岳庙会逐渐演变为宗教、民俗、文体、经贸于一体的大型节日。20世纪80年代，南岳庙会依然是当地重要的民俗活动，吸引着大量香客和游客。'
        },
        {
            year: 2020,
            title: '创新发展',
            event: '近年来，南岳区深入挖掘历史文化底蕴，通过打造夜间消费新场景、新业态，进一步推动夜间经济发展，实现文旅深度融合，庙会活动更加丰富多彩。'
        },
        {
            year: 2021,
            title: '国家级非遗认定',
            event: '2021年6月，南岳庙会列入第五批国家级非物质文化遗产名录，成为了南岳最具特色的旅游项目之一。'
        }
    ],
    'fishDrum': [
        {
            year: 618,
            title: '起源',
            event: '湖南渔鼓起源可追溯至唐代的"道情"，当时是道士传道化募时叙述道家之事与情的方式，后被民间艺人采用，宗教内容淡化，成为说唱艺术。'
        },
        {
            year: 1127,
            title: '乐器定型',
            event: '南宋时开始用渔鼓和简板为伴奏乐器，称渔鼓。'
        },
        {
            year: 1644,
            title: '艺术形式成熟',
            event: '明清时期，渔鼓形成完整唱腔，如衡阳人王船山作《愚古词》，使其由宣扬道教思想的工具转变为娱乐性、知识性的民间说唱艺术。'
        },
        {
            year: 1945,
            title: '祁东渔鼓形成',
            event: '20世纪40年代中叶，祁东渔鼓可追溯到刘贤忠以竹筒为乐器演唱历史故事，邹祖溪成为其传人并创立祁东渔鼓。'
        },
        {
            year: 1952,
            title: '走向正式舞台',
            event: '邹祖溪将渔鼓引入官方艺术场合。'
        },
        {
            year: 1957,
            title: '发展停滞期',
            event: '20世纪50年代末到七十年代末，祁东渔鼓被当作封建旧文化受批判，发展停滞。'
        },
        {
            year: 1990,
            title: '艺术革新',
            event: '20世纪90年代，祁东渔鼓融合多种戏曲元素，表演向戏剧化转化，从艺人员增多，成立曲艺家协会。'
        },
        {
            year: 2005,
            title: '现代转型',
            event: '零陵渔鼓经唐天宝革新，内容结合时事，表演方式丰富，从农村走向城市。'
        },
        {
            year: 2014,
            title: '国家级非遗认定',
            event: '12月，祁东渔鼓、九澧渔鼓、零陵渔鼓整合为湖南渔鼓，被列入第四批国家级非物质文化遗产名录。'
        }
    ],
    'bronzeGong': [
        {
            year: 220,
            title: '起源于三国时期',
            event: '起源可追溯至三国时期，刘备派张飞驻守耒阳坛下，随军工匠将北方金属冶炼技术带入，当地盛产铜矿和锡矿，人们在生产铜制生活用具时，发现铜锡配比后的物品敲击发声响亮，于是专门用于敲击通信的铜锣诞生，至今已有1700多年历史。'
        },
        {
            year: 1850,
            title: '家族传承开始',
            event: '以家族传承为主，铜锣制作技艺依靠家族、师徒口传心授代代相传，制作全凭手工，需师傅既懂乐律，又能吃苦耐劳。'
        },
        {
            year: 1996,
            title: '传承与创新',
            event: '罗冬元作为第七代传人，创办冬元锣鼓厂，传承祖辈手艺。'
        },
        {
            year: 2000,
            title: '技艺创新与机械化改造',
            event: '罗冬元引进空气锤、压铸成型机、剪边机等机械化设备，应用于锻打、边、抛光等作环节，提高了生产效率，同时保留了如"一锤定音"等关键序，实现了传统技艺与现代技术的结合，使产量大幅提升。'
        },
        {
            year: 2021,
            title: '国家级非遗认定',
            event: '坛下乡铜锣传统制作技艺经国务院批准列入国家级非物质文化遗产代表性项目名录扩展项目名录。产品种类扩展到一百余种，在多个省会城市开设乐器连锁直销店，并远销老挝、越南、缅甸等国，为不同剧种、不同民族定制锣鼓，市场不断扩大。'
        }
    ],
    'oilPaperUmbrella': [
        {
            year: 1900,
            title: '起源与传承',
            event: '裕熹油纸伞制作工艺历史悠久，是我工伞流派之一，其独特的伞骨"满穿"工艺在湘南地区极其少见。朱倩作为裕熹油纸伞第五代传人，17年前从父亲手中接过工厂，传承家族技艺。'
        },
        {
            year: 2000,
            title: '市场危机',
            event: '尼龙伞出现后，传统油纸伞市场需求逐渐减少，裕熹油纸伞也面临困境，朱倩父亲那一代主要依靠外贸出口，但中间环节多、利润低，且产品常被打上"日本伞"标签销售。'
        },
        {
            year: 2006,
            title: '转型探索',
            event: '朱倩接手后，瞄准网络渠道，在电商平台开店铺，并根据客户需求，针对旗袍搭配、舞蹈等用途改进设计、变换材质、加固伞架，让油纸伞从文艺和装饰用途入手，逐渐在市场站稳脚跟。'
        },
        {
            year: 2021,
            title: '拓展业务',
            event: '朱倩接到2万多把油纸伞的"天空之伞"订单，引发广泛关注，此后规模化订单不断。此，公司还开了低中高三个档位的产品，满足不同顾客需求。'
        },
        {
            year: 2022,
            title: '融入潮流',
            event: '随着国潮文化兴起，朱倩将国潮国漫元素与传统手艺结合，由专业美工团队设计图纸，印制到油纸伞伞面，收获年轻喜爱，使裕熹油纸伞走向年轻化、创新化、实用化，年销量超100万把，并在各大展会和影视剧中频频亮相。'
        },
        {
            year: 2023,
            title: '传承与弘扬',
            event: '裕熹油纸伞被列入省级非物质文化遗产代表性项目扩展项目名录。如今，公司油纸伞产量连年递增，带动了本地楠竹资源销售和周边村落配件加工业发展，为非物质文化遗产与产业发展的成功范例。'
        }
    ],
    'huaguxi': [
        {
            year: 1522,
            title: '起源与形成',
            event: '衡州花鼓戏起源于明朝嘉靖年间，最早出现在湖南衡阳市衡山县、常宁市和衡东县一带，最初是在当地民间歌舞、说唱等艺术形式基础上发展起来的，后来逐渐吸收了其他剧种的精华，形成了自己独特的风格。'
        },
        {
            year: 1644,
            title: '清代发展',
            event: '清朝时期，衡州花鼓戏不断发展壮大，演出形式从早期的一丑演唱，逐渐发展到"三小"（小旦、小丑、小生）的戏剧类型，其内容也更加丰富，融入了民间传说等题材。当时的衡州花鼓戏班社多为半职业性，农忙时务农，农闲时唱戏，在衡阳、衡南、耒阳等地深受欢迎。'
        },
        {
            year: 1912,
            title: '民国时期',
            event: '虽常遭查禁，但艺人们仍通过躲在大戏班中到各地演出等方式坚持传承，形成了与其他剧种同台演出的"调戏班子"。衡阳保卫战期间，花鼓戏班子几乎解散殆尽，生存艰难。'
        },
        {
            year: 1949,
            title: '新中国成立后',
            event: '衡州花鼓戏迎来了新的发展机遇，各地纷纷成立专业剧团，培养了一批优秀的演员和创作人才，整理和创作了大量的剧目，如《补锅》《打铜锣》等，并多次参加全国性的戏曲汇演，受到广泛好评。'
        },
        {
            year: 2000,
            title: '21世纪以来',
            event: '衡州花鼓戏得到了政府和社会的高度重视与保护，被列入国家级非物质文化遗产名录。相关部门通过多种方式推动其传承与发展，如培养新一代传承人、创作新剧目、开展戏曲进校园等活动，一些剧团也积极探索创新，尝试将现代元素融入传统戏曲，使其更符合当代观众的审美需求。'
        }
    ],
    'qiju': [
        {
            year: 1450,
            title: '起源与雏形',
            event: '明代中叶，弋阳腔传入祁阳，与当地的民歌、小调相结合，形成祁剧的雏形。据记载，明成化年间，弋阳诸腔与当地丰富的民间艺术进一步结合，逐渐地方化，形成了祁阳一带的高腔。'
        },
        {
            year: 1600,
            title: '声腔丰富',
            event: '明万历年间，昆山腔风靡全国，祁阳一带的戏曲吸收了昆腔和昆腔剧目。清康熙后，祁剧先后融汇徽调、汉调和秦腔而形成弹腔，随着声腔的增多，祁剧剧目、表演艺术日益丰富，逐渐发展成为一个以弹腔为主的多声腔剧种。'
        },
        {
            year: 1700,
            title: '流派形成',
            event: '在长期流传过程中，因地域文化等因素，祁剧形成了永河、宝河两大流派，均使用祁阳官话进行表演。'
        },
        {
            year: 1750,
            title: '鼎盛时期',
            event: '清朝康熙、乾隆年间，社会太平，经济繁荣，祁剧社有较大的流传和发展，向外遍及广西、广东、江西、福建等省，达到了鼎盛时期，当时有"祁阳弟子遍天下"之称。'
        },
        {
            year: 2008,
            title: '近现代发展',
            event: '新中国成立后，定名为"祁剧"，剧团发展兴盛。1956年时，湖南全省有祁剧社团29个。"文革"期间祁剧艺术备受摧残，1978年以后渐渐恢复。2008年，祁剧被评为第二批国家级非物质文化遗产。'
        }
    ],
    'strawDragon': [
        {
            year: 1662,
            title: '起源',
            event: '始于清代康熙年间，至今已有三百多年历史。'
        },
        {
            year: 1800,
            title: '发展',
            event: '与当地农耕文化紧密相连，每年腊八后，村民们会召集男女老少，用上好的稻草精心扎制稻草龙，用以驱虫辟邪，从春节初六兴灯一直舞到元宵节，正月十六再把龙身拿到稻田里烧掉，这种习俗沿袭至今。'
        },
        {
            year: 1979,
            title: '传承与荣誉',
            event: '九市稻草龙在传承中不断发展，1979年先后参加衡阳地区和湖南省文艺汇演，均获一等奖；1988年，应邀参加"北京国际旅游年舞龙大奖赛"，获得三等奖；2012年被列入湖南省非物质文化遗产名录。'
        },
        {
            year: 2012,
            title: '现状与保护',
            event: '衡阳县政府重视其传承与保护，将稻草龙与留守儿童赋能相结合开展系列活动，并通过多种方式进行募捐以保障项目的持续性运营，让更多人了解和学习稻草龙文化，使其得以传承和发展。'
        }
    ],
    'paperCutting': [
        {
            year: 1644,
            title: '艺术起源',
            event: '大桥剪纸始于清代初期，最初用于制作窗花和婚庆装饰。'
        },
        {
            year: 1850,
            title: '技艺发展',
            event: '剪纸艺人开始创新题材和技法，形成了独特的地方特色。'
        },
        {
            year: 1950,
            title: '传承保护',
            event: '开始系统整理和记录剪纸技艺，培养新一代剪纸艺人。'
        },
        {
            year: 2008,
            title: '文化认可',
            event: '大桥剪纸被列入湖南省非物质文化遗产名录。'
        },
        {
            year: 2020,
            title: '创新发展',
            event: '结合现代元素，开发文创产品，推动剪纸艺术的传承与创新。'
        }
    ],
    'paperMaking': [
        {
            year: 105,
            title: '技艺发明',
            event: '蔡伦改进造纸术，使用树皮、麻头、破布等原料制造纸张。'
        },
        {
            year: 200,
            title: '工艺完善',
            event: '造纸工艺不断改进，形成了完整的制作流程。'
        },
        {
            year: 1000,
            title: '技艺传承',
            event: '耒阳成为重要的造纸工艺传承地，形成了独特的造纸文化。'
        },
        {
            year: 2006,
            title: '国家认定',
            event: '蔡伦古法造纸技艺被列入第一批国家级非物质文化遗产名录。'
        },
        {
            year: 2020,
            title: '保护发展',
            event: '建立蔡伦造纸博物馆，开展技艺展示和传承活动。'
        }
    ],
    'folkSong': [
        {
            year: 1500,
            title: '艺术形成',
            event: '岳北山歌在民间自发形成，最初主要在劳动时演唱。'
        },
        {
            year: 1800,
            title: '风格定型',
            event: '形成了独特的演唱风格和曲调特点。'
        },
        {
            year: 1950,
            title: '系统整理',
            event: '开始对山歌进行系统的收集和整理工作。'
        },
        {
            year: 2010,
            title: '保护传承',
            event: '被列入湖南省非物质文化遗产名录。'
        },
        {
            year: 2020,
            title: '创新发展',
            event: '举办山歌比赛和展演活动，推动艺术传承。'
        }
    ],
    'pilgrimage': [
        {
            year: -200,
            title: '朝圣起源',
            event: '南岳朝圣活动始于秦汉时期，最初以祭祀山神为主。'
        },
        {
            year: 600,
            title: '规模扩大',
            event: '唐代开始，南岳衡山成为重要的道教、佛教圣地。'
        },
        {
            year: 1000,
            title: '文化融合',
            event: '形成了独特的南岳朝圣文化，融合多种宗教元素。'
        },
        {
            year: 2008,
            title: '文化认定',
            event: '南岳朝圣被列入湖南省非物质文化遗产名录。'
        },
        {
            year: 2020,
            title: '现代发展',
            event: '结合旅游文化，推动朝圣活动的规范化和现代化。'
        }
    ]
};

// 将显示时间轴的函数设置为全局函数
window.showHeritageTimeline = function(heritageName) {
    const heritageMap = {
        '衡山影子戏': 'shadowPlay',
        '南岳庙会': 'templeFair',
        '湖南渔鼓': 'fishDrum',
        '耒阳坛下乡铜锣': 'bronzeGong',
        '裕熹油纸伞': 'oilPaperUmbrella',
        '衡州花鼓戏': 'huaguxi',
        '祁剧': 'qiju',
        '九市稻草龙': 'strawDragon',
        '大桥剪纸': 'paperCutting',
        '蔡伦古法造纸技艺': 'paperMaking',
        '岳北山歌': 'folkSong',
        '南岳朝圣': 'pilgrimage'
    };
    
    const data = window.timelineData[heritageMap[heritageName]];
    if (data) {
        createTimeline(data, heritageName);
    }
};

// 将createTimeline函数也设置为全局函数
window.createTimeline = function(data, title) {
    // 移除已存在的时间轴
    const existingTimeline = document.querySelector('.timeline-modal');
    if (existingTimeline) {
        existingTimeline.remove();
    }

    // 创建时间轴模态框
    const modal = document.createElement('div');
    modal.className = 'timeline-modal';
    modal.innerHTML = `
        <div class="timeline-content">
            <span class="close-timeline">&times;</span>
            <h3>${title}发展历程</h3>
            <div class="timeline">
                ${data.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-date">${item.year}</div>
                        <div class="timeline-info">
                            <h4>${item.title}</h4>
                            <p>${item.event}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 添加关闭功能
    const closeBtn = modal.querySelector('.close-timeline');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    // 添加显示动画
    setTimeout(() => modal.classList.add('show'), 10);
};

// 添加全局初始化函数
window.initMap = function() {
    console.log('开始初始化地图');
    
    // 检查地图容器
    const mapContainer = document.getElementById("map-container");
    if (!mapContainer) {
        console.error("找不到地图容器");
        return;
    }

    try {
        // 创建地图实例
        const map = new qq.maps.Map(mapContainer, {
            center: new qq.maps.LatLng(26.893324, 112.571722), // 衡阳市中心坐标
            zoom: 12,  // 缩放级别
            mapTypeId: qq.maps.MapTypeId.ROADMAP
        });

        // 定义非遗地点
        const heritagePoints = [
            {
                name: '衡山影子戏',
                position: new qq.maps.LatLng(27.25, 112.87),
                info: '衡山影子戏是世界级非物质文化遗产',
                level: '世界级',
                category: '表演艺术',
                customIcon: 'lmages\\imgs\\0270e4ea8f3c577b59f8fec60e5703b.jpg'
            },
            {
                name: '南岳庙会',
                position: new qq.maps.LatLng(27.232266, 112.738811),
                info: '南岳庙会是国家级非物质文化遗产',
                level: '国家级',
                category: '民俗活动',
                customIcon: 'lmages\\imgs\\fc1d023167df826d05e4ff6f955f774.jpg'
            },
            {
                name: '湖南渔鼓',
                position: new qq.maps.LatLng(26.893324, 112.571722),
                info: '湖南渔鼓是国家级非物质文化遗产',
                level: '国家级',
                category: '传统音乐',
                customIcon: 'lmages/imgs/3f9dc825a3b28035ecd177af004c266.jpg'
            },
            {
                name: '耒阳坛下乡铜锣',
                position: new qq.maps.LatLng(26.422144, 112.847672),
                info: '耒阳坛下乡铜锣传统制作技艺是国家级非物质文化遗产',
                level: '国家级',
                category: '传统技艺',
                customIcon: 'lmages\\imgs\\f080efced6f7e0305b6b86155534c50.jpg'
            },
            {
                name: '裕熹油纸伞',
                position: new qq.maps.LatLng(27.230012, 112.869955),
                info: '裕熹油纸（布）伞制作工艺是湖南省级非物质文化遗产',
                level: '省级',
                category: '传统工艺',
                customIcon: 'lmages/imgs/c62c8ed82e5f7b35c8b4db68d862b58.jpg'
            },
            {
                name: '衡州花鼓戏',
                position: new qq.maps.LatLng(26.898056, 112.583333), // 衡阳市蒸湘区大元头路崇盛晶珠广场位置
                info: '衡州花鼓戏是国家级非物质文化遗产',
                level: '国家级',
                category: '传统戏曲',
                customIcon: 'lmages/imgs/41cfdea26b4820ee63920b1b35cec8f.jpg'
            },
            {
                name: '祁剧',
                position: new qq.maps.LatLng(26.580000, 111.860000),
                info: '祁剧是国家级非物质文化遗产',
                level: '国家级',
                category: '传统戏曲',
                customIcon: 'lmages/imgs/b11c300a9d32b16eca04c8a90d43b21.jpg'  // 更新祁剧的图标路径
            },
            {
                name: '九市稻草龙',
                position: new qq.maps.LatLng(26.969722, 112.677778), // 衡阳县台源镇台九村位置
                info: '九市稻草龙是湖南省级非物质文化遗产',
                level: '省级',
                category: '民俗活动',
                customIcon: 'lmages/imgs/6f1adca3417547348d19ead7a4e5d08.jpg'
            },
            {
                name: '大桥剪纸',
                position: new qq.maps.LatLng(26.975833, 113.010556),
                info: '大桥剪纸是湖南省级非物质文化遗产',
                level: '省级',
                category: '传统工艺',
                customIcon: 'lmages/imgs/7877ff1e9066e0b1077147ecff5775c.jpg'
            },
            {
                name: '蔡伦古法造纸技艺',
                position: new qq.maps.LatLng(26.408333, 112.866667),
                info: '蔡伦古法造纸技艺是国家级非物质文化遗产',
                level: '国家级',
                category: '传统工艺',
                customIcon: 'lmages/imgs/16892254cd0483217ed1c59eaee091c.jpg'
            },
            {
                name: '岳北山歌',
                position: new qq.maps.LatLng(27.283333, 112.866667),
                info: '岳北山歌是湖南省级非物质文化遗产',
                level: '省级',
                category: '传统音乐',
                customIcon: 'lmages/imgs/6596558b22c23dea97a386dae25cda8.jpg'
            },
            {
                name: '南岳朝圣',
                position: new qq.maps.LatLng(27.254167, 112.738889),
                info: '南岳朝圣是湖南省级非物质文化遗产',
                level: '省级',
                category: '民俗活动',
                customIcon: 'lmages/imgs/ef8939560c9d94170f658eb938836c6.jpg'
            }
        ];

        // 存储标记点
        const markers = {};

        // 添加标记点
        heritagePoints.forEach(point => {
            // 创建标记
            let iconUrl = point.customIcon;
            if (point.name === '湖南渔鼓') {
                iconUrl = 'lmages/imgs/3f9dc825a3b28035ecd177af004c266.jpg';
            }

            const marker = new qq.maps.Marker({
                position: point.position,
                map: map,
                icon: new qq.maps.MarkerImage(
                    iconUrl,
                    new qq.maps.Size(40, 40),
                    new qq.maps.Point(0, 0),
                    new qq.maps.Point(20, 20)
                )
            });

            // 创建信息窗口内容
            const content = `
                <div class="custom-info-window">
                    <div class="info-header">
                        <h4>${point.name}</h4>
                        <span class="level-tag ${point.level === '世界级' ? 'world' : 'national'}">${point.level}</span>
                    </div>
                    <div class="info-content">
                        <p>${point.info}</p>
                        <span class="category-tag">${point.category}</span>
                    </div>
                    <div class="info-actions">
                        <button onclick="window.showHeritageTimeline('${point.name}')" class="timeline-btn">
                            查看发展历程
                        </button>
                        <button onclick="window.showDetails('${point.name}')" class="details-btn">
                            详细信息
                        </button>
                        <button onclick="window.openNavigation(${point.position.lat}, ${point.position.lng}, '${point.name}')" class="nav-btn">
                            导航去这里
                        </button>
                    </div>
                </div>
            `;

            // 创建信息窗口
            const infoWindow = new qq.maps.InfoWindow({
                map: map,
                content: content,
                position: point.position,
                zIndex: 10
            });

            // 默认关闭信息窗口
            infoWindow.close();

            // 存储标记点信息
            markers[point.name] = {
                marker,
                infoWindow,
                position: point.position
            };

            // 添加点击事件
            qq.maps.event.addListener(marker, 'click', function() {
                // 关闭所有其他信息窗口
                Object.values(markers).forEach(m => m.infoWindow.close());
                // 打开当前信息窗口
                infoWindow.open();
                infoWindow.setPosition(point.position);
            });

            // 添加鼠标悬停效果
            qq.maps.event.addListener(marker, 'mouseover', function() {
                marker.setAnimation(qq.maps.MarkerAnimation.BOUNCE);
            });

            qq.maps.event.addListener(marker, 'mouseout', function() {
                marker.setAnimation(null);
            });
        });

        // 修改按钮点击事件
        document.querySelectorAll('.heritage-btn').forEach(button => {
            button.addEventListener('click', function() {
                // 获取按钮的data-heritage属性值
                const heritageType = this.getAttribute('data-heritage');
                let heritageName;
                
                // 根据data-heritage属性值映射到对应的名称
                switch(heritageType) {
                    case 'shadowPlay':
                        heritageName = '衡山影子戏';
                        break;
                    case 'templeFair':
                        heritageName = '南岳庙会';
                        break;
                    case 'fishDrum':
                        heritageName = '湖南渔鼓';
                        break;
                    case 'bronzeGong':
                        heritageName = '耒阳坛下乡铜锣';
                        break;
                    case 'oilPaperUmbrella':
                        heritageName = '裕熹油纸伞';
                        break;
                    case 'huaguxi':
                        heritageName = '衡州花鼓戏';
                        break;
                    case 'qiju':
                        heritageName = '祁剧';
                        break;
                    case 'strawDragon':
                        heritageName = '九市稻草龙';
                        break;
                    case 'paperCutting':
                        heritageName = '大桥剪纸';
                        break;
                    case 'paperMaking':
                        heritageName = '蔡伦古法造纸技艺';
                        break;
                    case 'folkSong':
                        heritageName = '岳北山歌';
                        break;
                    case 'pilgrimage':
                        heritageName = '南岳朝圣';
                        break;
                }
                
                if (markers[heritageName]) {
                    const {marker, infoWindow, position} = markers[heritageName];
                    
                    // 关闭所有其他信息窗口
                    Object.values(markers).forEach(m => m.infoWindow.close());
                    
                    // 平滑移动到标记点位置
                    map.panTo(position);
                    map.setZoom(15);
                    
                    // 打开信息窗口
                    setTimeout(() => {
                        infoWindow.open();
                        infoWindow.setPosition(position);
                        marker.setAnimation(qq.maps.MarkerAnimation.BOUNCE);
                        setTimeout(() => {
                            marker.setAnimation(null);
                        }, 2000);
                    }, 500);
                }
            });
        });

        return {
            map,
            markers
        };
    } catch (e) {
        console.error("初始化地图时发生错误:", e);
        console.error(e);
    }
};

// 添加图表初始化函数
function initCharts() {
    const districtChartDom = document.getElementById('districtChart');
    const levelChartDom = document.getElementById('levelChart');

    if (!districtChartDom || !levelChartDom) {
        console.error('找不到图表容器');
        return;
    }

    // 初始化区域分布图表
    const districtChart = echarts.init(districtChartDom);
    const districtOption = {
        title: {
            text: '衡阳各区县非遗项目分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['省级', '市级', '区县级'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['珠晖区', '衡阳县', '雁峰区', '石鼓区', '耒阳市', '祁东县', '南岳区', '常宁市', '衡山县', '衡南县', '衡东县', '蒸湘区'],
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            name: '项目数量'
        },
        series: [
            {
                name: '省级',
                type: 'bar',
                stack: 'total',
                data: [1, 6, 5, 3, 3, 2, 2, 2, 2, 2, 1, 1]
            },
            {
                name: '市级',
                type: 'bar',
                stack: 'total',
                data: [4, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '区县级',
                type: 'bar',
                stack: 'total',
                data: [3, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    };
    districtChart.setOption(districtOption);

    // 初始化级别分布饼图
    const levelChart = echarts.init(levelChartDom);
    const levelOption = {
        title: {
            text: '衡阳非遗项目级别分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: 'middle'
        },
        series: [
            {
                name: '级别分布',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                    formatter: '{b}: {c}项'
                },
                data: [
                    { value: 2, name: '国家级' },
                    { value: 23, name: '省级' },
                    { value: 17, name: '市级' },
                    { value: 58, name: '区县级' }
                ]
            }
        ]
    };
    levelChart.setOption(levelOption);

    // 添加窗口大小改变时的自适应
    window.addEventListener('resize', function() {
        districtChart.resize();
        levelChart.resize();
    });
}

// 在页面加载完成后初始化图表
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    initMap();
});

// 添加导航函数
window.openNavigation = function(lat, lng, name) {
    // 使用腾讯地图导航
    const url = `https://apis.map.qq.com/uri/v1/routeplan?type=drive&to=${name}&tocoord=${lat},${lng}&referer=你的腾讯地图应用名称`;
    window.open(url, '_blank');
};

// 添加图片上传功能
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const imageUpload = document.getElementById('imageUpload');
    const uploadedImages = document.getElementById('uploadedImages');

    // 点击上传区域触发文件选择
    uploadArea.addEventListener('click', () => {
        imageUpload.click();
    });

    // 处理拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#e63946'; // 使用具体的颜色值替代CSS变量
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#ddd';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ddd';
        
        if (e.dataTransfer.files.length) {
            handleFiles(e.dataTransfer.files);
        }
    });

    // 处理文件选择
    imageUpload.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFiles(e.target.files);
        }
    });

    // 处理文件上传
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const div = document.createElement('div');
                    div.className = 'uploaded-image';
                    
                    // 创建图片容器
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'image-container';
                    
                    // 创建图片元素
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = '上传的非遗图片';
                    
                    // 创建删除按钮
                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-image';
                    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
                    deleteBtn.onclick = () => div.remove();
                    
                    // 组装元素
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(deleteBtn);
                    div.appendChild(imgContainer);
                    
                    // 添加到图片列表的开头
                    uploadedImages.insertBefore(div, uploadedImages.firstChild);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// 修改景点点击交互
document.querySelectorAll('.spot-image-container').forEach(container => {
    container.addEventListener('click', function(e) {
        // 如果点击的是控制按钮，不显示模态框
        if (e.target.closest('.spot-controls')) return;
        
        const img = this.querySelector('img');
        const info = this.closest('.spot-item').querySelector('.spot-info');
        const title = info.querySelector('h5').textContent;
        const description = info.querySelector('.spot-description').textContent;
        
        showSpotModal(img.src, title, description);
    });
});

// 修改模态框显示函数
function showSpotModal(imgSrc, title, description) {
    const modal = document.createElement('div');
    modal.className = 'spot-modal';
    modal.innerHTML = `
        <div class="spot-modal-content">
            <span class="spot-modal-close">&times;</span>
            <img src="${imgSrc}" alt="${title}" class="spot-modal-image">
            <div class="spot-modal-info">
                <h3 contenteditable="true">${title}</h3>
                <p contenteditable="true">${description}</p>
                <div class="modal-actions">
                    <button class="save-edit-btn">保存修改</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // 添加关闭功能
    const closeBtn = modal.querySelector('.spot-modal-close');
    closeBtn.onclick = () => closeSpotModal(modal);
    modal.onclick = (e) => {
        if (e.target === modal) closeSpotModal(modal);
    };

    // 添加保存功能
    const saveBtn = modal.querySelector('.save-edit-btn');
    const modalTitle = modal.querySelector('h3');
    const modalDesc = modal.querySelector('p');
    
    saveBtn.addEventListener('click', () => {
        // 找到对应的景点卡片并更新内容
        const spotItems = document.querySelectorAll('.spot-item');
        spotItems.forEach(item => {
            const itemTitle = item.querySelector('h5');
            if (itemTitle.textContent === title) {
                itemTitle.textContent = modalTitle.textContent;
                item.querySelector('.spot-description').textContent = modalDesc.textContent;
            }
        });
        closeSpotModal(modal);
    });

    // 显示模态框
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });
}

// 关闭模态框
function closeSpotModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
}

// 添加景点上传功能
document.addEventListener('DOMContentLoaded', function() {
    const addSpotBtn = document.querySelector('.add-spot-btn');
    const spotImageUpload = document.getElementById('spotImageUpload');
    const spotList = document.querySelector('.spot-list');

    // 点击添加按钮触发文件选择
    addSpotBtn.addEventListener('click', () => {
        spotImageUpload.click();
    });

    // 处理文件选择
    spotImageUpload.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                addNewSpot(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // 添加新景点函数
    function addNewSpot(imageUrl) {
        const spotItem = document.createElement('div');
        spotItem.className = 'spot-item';
        spotItem.innerHTML = `
            <div class="spot-image-container">
                <img src="${imageUrl}" alt="新景点" class="spot-image">
                <div class="spot-overlay">
                    <span>点击查看详情</span>
                </div>
                <div class="spot-controls">
                    <button class="edit-spot"><i class="fas fa-edit"></i></button>
                    <button class="delete-spot"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="spot-info">
                <h5 contenteditable="true">新景点名称</h5>
                <p class="spot-description" style="display: none;">点击编辑景点描述</p>
            </div>
        `;

        // 添加删除功能
        spotItem.querySelector('.delete-spot').addEventListener('click', () => {
            spotItem.remove();
        });

        // 添加点击查看详情功能
        const imageContainer = spotItem.querySelector('.spot-image-container');
        imageContainer.addEventListener('click', function(e) {
            if (e.target.closest('.spot-controls')) return;
            
            const img = this.querySelector('img');
            const info = this.closest('.spot-item').querySelector('.spot-info');
            const title = info.querySelector('h5').textContent;
            const description = info.querySelector('.spot-description').textContent;
            
            showSpotModal(img.src, title, description);
        });

        // 将新景点添加到列表开头
        spotList.insertBefore(spotItem, spotList.firstChild);
    }
}); 