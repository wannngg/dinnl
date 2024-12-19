document.addEventListener('DOMContentLoaded', function() {
    // 定义各个非遗项目的时间轴数据
    const timelineData = {
        'shadowPlay': [
            { year: 1644, event: '衡山影子戏开创：彭凤举创立老龙会', category: '开创' },
            { year: 1935, event: '影型制作突破，增高至一尺二寸', category: '发展' },
            { year: 1940, event: '影型进一步增高至一尺三寸，花纹更精细', category: '发展' },
            { year: 1949, event: '艺人集资购买新式皮影棚架和新影型', category: '发展' },
            { year: 1980, event: '衡山县文化馆成立皮影剧团并巡回演出', category: '发展' },
            { year: 1982, event: '皮影剧团因车祸解散', category: '变革' },
            { year: 2006, event: '列入省级非物质文化遗产名录', category: '保护' },
            { year: 2008, event: '入选国家级非物质文化遗产名录', category: '保护' },
            { year: 2014, event: '作为中国皮影入选UNESCO非遗名录', category: '保护' },
            { year: 2015, event: '开展普查收集、培训传承、创新表演等保护工作', category: '保护' }
        ],
        'templeFair': [
            { year: -200, event: '西汉时期舜在衡山祭祀活动开始', category: '起源' },
            { year: 1127, event: '南宋时期庙会正式成形', category: '早期' },
            { year: 1200, event: '皇帝多次派特使高官到南岳庙主祭', category: '发展' },
            { year: 1368, event: '明清时期庙会规模扩大', category: '发展' },
            { year: 1950, event: '因战乱等原因庙会活动暂停', category: '变革' },
            { year: 1985, event: '庙会的宗教、祭祀活动恢复', category: '复兴' },
            { year: 1990, event: '与国际寿文化节合办', category: '创新' },
            { year: 2000, event: '推动文旅融合，打造夜间消费场景', category: '发展' },
            { year: 2020, event: '发展为宗教、民俗、文体、经贸于一体的节日', category: '创新' }
        ],
        'fishDrum': [
            { year: 618, event: '唐代道情形成，道士用渔鼓传道', category: '起源' },
            { year: 1127, event: '南宋开始使用渔鼓和简板伴奏', category: '发展' },
            { year: 1644, event: '清代衡阳渔鼓兴起，王船山作《愚古词》', category: '发展' },
            { year: 1950, event: '衡阳渔鼓进行音乐革新', category: '创新' },
            { year: 1960, event: '增加多种乐器和板式变化', category: '发展' },
            { year: 1990, event: '祁东渔鼓发展为综合性艺术', category: '创新' },
            { year: 2000, event: '引入布景道具，艺人队伍扩大', category: '发展' }
        ],
        'bronzeGong': [
            { year: 220, event: '三国时期张飞驻守坛下引入冶炼技术', category: '起源' },
            { year: 250, event: '发现铜锡配比制作的铜锣声音响亮', category: '发展' },
            { year: 1644, event: '清代坛下圩以加工铜器闻名', category: '发展' },
            { year: 1990, event: '现代工艺改进开始', category: '创新' },
            { year: 1996, event: '罗冬元创办冬元锣鼓厂', category: '发展' },
            { year: 2000, event: '引入机械化设备，提高生产效率', category: '创新' },
            { year: 2010, event: '申请专利，扩大产品种类', category: '发展' }
        ]
    };

    // 添加按钮点击事件处理
    document.querySelectorAll('.heritage-btn').forEach(button => {
        button.addEventListener('click', function() {
            const heritageType = this.dataset.heritage;
            const data = timelineData[heritageType];
            const title = this.textContent.replace('世界级', '');
            
            if (data) {
                createTimeline(data, title);
            }
        });
    });

    // 优化createTimeline函数
    function createTimeline(data, title) {
        // 移除已存在的模态框
        const existingModal = document.querySelector('.timeline-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'timeline-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${title}发展历程</h2>
                <div class="timeline-legend"></div>
                <canvas id="timelineChart"></canvas>
            </div>
        `;
        
        document.body.appendChild(modal);

        // 创建图例
        const legendContainer = modal.querySelector('.timeline-legend');
        const categories = [...new Set(data.map(item => item.category))];
        const categoryColors = {
            '起源': '#FF6384',
            '发展': '#36A2EB',
            '创新': '#FFCE56',
            '保护': '#4BC0C0',
            '变革': '#9966FF',
            '复兴': '#FF9F40',
            '早期': '#4BC0C0'
        };

        categories.forEach(category => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = `
                <span class="legend-color" style="background-color: ${categoryColors[category]}"></span>
                <span class="legend-label">${category}</span>
            `;
            legendContainer.appendChild(legendItem);
        });

        const ctx = document.getElementById('timelineChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    data: data.map(item => ({
                        x: item.year,
                        y: Math.random() * 0.5 + 0.25,
                        event: item.event,
                        category: item.category
                    })),
                    backgroundColor: data.map(item => categoryColors[item.category]),
                    pointRadius: 8,
                    pointHoverRadius: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: '年份',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '年';
                            }
                        }
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const point = context.raw;
                                return [
                                    `年份：${point.year}年`,
                                    `事件：${point.event}`,
                                    `类别：${point.category}`
                                ];
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });

        // 添加关闭功能
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
}); 