document.addEventListener('DOMContentLoaded', function() {
    const timelineData = {
        '衡山影子戏': {
            level: 'world',
            events: [
                { year: 1644, event: '衡山影子戏开创：彭凤举创立老龙会', category: '开创' },
                { year: 1935, event: '影型制作突破，增高至一尺二寸', category: '发展' },
                { year: 1940, event: '影型进一步增高至一尺三寸，花纹更精细', category: '发展' },
                { year: 1949, event: '艺人集资购买新式皮影棚架和新影型', category: '发展' },
                { year: 1980, event: '衡山县文化馆成立皮影剧团并巡回演出', category: '发展' },
                { year: 1982, event: '皮影剧团因车祸解散', category: '变革' },
                { year: 2006, event: '列入省级非物质文化遗产名录', category: '保护' },
                { year: 2008, event: '入选国家级非物质文化遗产名录', category: '保护' },
                { year: 2014, event: '作为中国皮影入选UNESCO非遗名录', category: '保护' }
            ]
        },
        '南岳庙会': {
            level: 'world',
            events: [
                { year: -200, event: '西汉时期舜在衡山祭祀活动开始', category: '起源' },
                { year: 1127, event: '南宋时期庙会正式成形', category: '早期' },
                { year: 1200, event: '皇帝多次派特使高官到南岳庙主祭', category: '发展' },
                { year: 1368, event: '明清时期庙会规模扩大', category: '发展' },
                { year: 1950, event: '因战乱等原因庙会活动暂停', category: '变革' },
                { year: 1985, event: '庙会的宗教、祭祀活动恢复', category: '复兴' },
                { year: 1990, event: '与国际寿文化节合办', category: '创新' },
                { year: 2000, event: '推动文旅融合，打造夜间消费场景', category: '发展' }
            ]
        },
        '湖南渔鼓': {
            level: 'world',
            events: [
                { year: 618, event: '唐代道情形成，道士用渔鼓传道', category: '起源' },
                { year: 1127, event: '南宋开始使用渔鼓和简板伴奏', category: '发展' },
                { year: 1644, event: '清代衡阳渔鼓兴起，王船山作《愚古词》', category: '发展' },
                { year: 1950, event: '衡阳渔鼓进行音乐革新', category: '创新' },
                { year: 1960, event: '增加多种乐器和板式变化', category: '发展' },
                { year: 2008, event: '入选国家级非物质文化遗产名录', category: '保护' }
            ]
        },
        '耒阳坛下乡铜锣': {
            level: 'world',
            events: [
                { year: 220, event: '三国时期张飞驻守坛下引入冶炼技术', category: '起源' },
                { year: 250, event: '发现铜锡配比制作的铜锣声音响亮', category: '发展' },
                { year: 1644, event: '清代坛下圩以加工铜器闻名', category: '发展' },
                { year: 1996, event: '罗冬元创办冬元锣鼓厂', category: '发展' },
                { year: 2008, event: '入选国家级非物质文化遗产名录', category: '保护' }
            ]
        },
        '蔡伦古法造纸技艺': {
            level: 'national',
            events: [
                { year: 105, event: '蔡伦改进造纸术，使用树皮、麻头、破布等原料制造纸张', category: '起源' },
                { year: 200, event: '造纸工艺不断改进，形成了完整的制作流程', category: '发展' },
                { year: 1000, event: '耒阳成为重要的造纸工艺传承地', category: '发展' },
                { year: 2006, event: '列入第一批国家级非物质文化遗产名录', category: '保护' }
            ]
        },
        '岳北山歌': {
            level: 'provincial',
            events: [
                { year: 1500, event: '艺术形成：岳北山歌在民间自发形成', category: '起源' },
                { year: 1800, event: '形成了独特的演唱风格和曲调特点', category: '发展' },
                { year: 1950, event: '开始对山歌进行系统的收集和整理工作', category: '发展' },
                { year: 2010, event: '被列入湖南省非物质文化遗产名录', category: '保护' }
            ]
        },
        '南岳朝圣': {
            level: 'provincial',
            events: [
                { year: -200, event: '朝圣起源：秦汉时期，最初以祭祀山神为主', category: '起源' },
                { year: 600, event: '唐代开始，南岳衡山成为重要的道教、佛教圣地', category: '发展' },
                { year: 1000, event: '形成了独特的南岳朝圣文化，融合多种宗教元素', category: '发展' },
                { year: 2008, event: '南岳朝圣被列入湖南省非物质文化遗产名录', category: '保护' }
            ]
        }
    };

    let currentChart = null;
    let zoomLevel = 1;
    let currentMaxYear = 300; // 初始最大年份
    const initialMinYear = -200; // 初始最小年份
    const yearIncrement = 500; // 每次增加的年份
    const finalMaxYear = 2024; // 最终最大年份
    const minZoom = 0.5;
    const maxZoom = 3;

    // 添加缩放控制按钮和缩放指示器
    const timelineContainer = document.querySelector('.timeline-container');
    const zoomControls = document.createElement('div');
    zoomControls.className = 'zoom-controls';
    zoomControls.innerHTML = `
        <div class="zoom-indicator">
            <span class="zoom-level">100%</span>
        </div>
        <div class="zoom-buttons">
            <button class="zoom-in" title="放大 (Ctrl + 滚轮向上)">
                <i class="fas fa-search-plus"></i>
            </button>
            <button class="zoom-out" title="缩小 (Ctrl + 滚轮向下)">
                <i class="fas fa-search-minus"></i>
            </button>
            <button class="zoom-reset" title="重置缩放">
                <i class="fas fa-undo"></i>
            </button>
        </div>
        <div class="zoom-hint">
            按住Ctrl键使用滚轮缩放，或拖动时间轴平移
        </div>
    `;
    timelineContainer.insertBefore(zoomControls, timelineContainer.firstChild);

    const zoomLevelDisplay = zoomControls.querySelector('.zoom-level');

    function updateZoomLevel(chart) {
        const zoomState = chart.getZoomLevel();
        zoomLevel = zoomState;
        const percentage = Math.round(zoomState * 100);
        zoomLevelDisplay.textContent = `${percentage}%`;
        
        // 更新按钮状态
        document.querySelector('.zoom-in').disabled = zoomState >= maxZoom;
        document.querySelector('.zoom-out').disabled = zoomState <= minZoom;
    }

    // 添加时间范围指示器
    const timeControls = document.createElement('div');
    timeControls.className = 'time-controls';
    timeControls.innerHTML = `
        <div class="time-indicator">
            <span class="time-range">显示范围：公元前200年 ~ 300年</span>
        </div>
        <div class="time-hint">
            向下滚动显示更多历史<br>
            向上滚动缩短时间范围
        </div>
    `;
    timelineContainer.insertBefore(timeControls, timelineContainer.firstChild);

    const timeRangeDisplay = timeControls.querySelector('.time-range');

    // 更新时间范围显示
    function updateTimeRange() {
        timeRangeDisplay.textContent = `显示范围：${initialMinYear < 0 ? '公元前' + Math.abs(initialMinYear) : initialMinYear}年 ~ ${currentMaxYear}年`;
    }

    // 处理滚轮事件
    let scrollTimeout;
    window.addEventListener('wheel', (e) => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0 && currentMaxYear < finalMaxYear) { // 向下滚动，增加年份
                currentMaxYear = Math.min(currentMaxYear + yearIncrement, finalMaxYear);
                updateTimeRange();
                createTimeline(document.querySelector('.category-button.active').dataset.category);
            } else if (e.deltaY < 0 && currentMaxYear > initialMinYear + yearIncrement) { // 向上滚动，减少年份
                currentMaxYear = Math.max(currentMaxYear - yearIncrement, initialMinYear + yearIncrement);
                updateTimeRange();
                createTimeline(document.querySelector('.category-button.active').dataset.category);
            }
        }, 100);
    }, { passive: true });

    function createTimeline(category = 'all') {
        const ctx = document.getElementById('timelineChart').getContext('2d');
        
        if (currentChart) {
            currentChart.destroy();
        }

        let filteredData = Object.entries(timelineData).filter(([_, data]) => {
            if (category === 'all') return true;
            return data.level === category;
        });

        let chartData = [];
        filteredData.forEach(([name, data]) => {
            data.events.forEach(event => {
                // 只显示在当前时间范围内的事件
                if (event.year >= initialMinYear && event.year <= currentMaxYear) {
                    chartData.push({
                        x: event.year,
                        y: Math.random() * 0.5 + 0.25,
                        name: name,
                        event: event.event,
                        category: event.category,
                        level: data.level
                    });
                }
            });
        });

        // 获取当前显示数据的时间范围
        const years = chartData.map(item => item.x);
        const minYear = Math.min(initialMinYear, ...years);
        const maxYear = currentMaxYear;

        currentChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    data: chartData,
                    backgroundColor: chartData.map(item => {
                        switch(item.category) {
                            case '起源': return 'rgba(255, 99, 132, 0.8)';
                            case '开创': return 'rgba(255, 99, 132, 0.8)';
                            case '发展': return 'rgba(54, 162, 235, 0.8)';
                            case '保护': return 'rgba(75, 192, 192, 0.8)';
                            case '创新': return 'rgba(255, 206, 86, 0.8)';
                            case '复兴': return 'rgba(153, 102, 255, 0.8)';
                            case '变革': return 'rgba(255, 159, 64, 0.8)';
                            case '早期': return 'rgba(75, 192, 192, 0.8)';
                            default: return 'rgba(255, 159, 64, 0.8)';
                        }
                    }),
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    pointStyle: 'rect',
                    pointRadius: 15,
                    pointHoverRadius: 20
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
                            font: { size: 14, weight: 'bold' }
                        },
                        min: minYear,
                        max: maxYear,
                        ticks: {
                            callback: function(value) {
                                if (value < 0) {
                                    return '公元前' + Math.abs(value);
                                }
                                return value;
                            },
                            stepSize: Math.ceil((maxYear - minYear) / 20)
                        }
                    },
                    y: { 
                        display: false,
                        min: 0,
                        max: 1
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false // 禁用默认tooltip
                    },
                    legend: { display: false },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                modifierKey: 'ctrl',
                                speed: 0.1
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                            onZoom: function(context) {
                                updateZoomLevel(context.chart);
                            }
                        },
                        pan: {
                            enabled: true,
                            mode: 'x',
                            modifierKey: null
                        },
                        limits: {
                            x: {
                                min: minYear - (maxYear - minYear) * 0.2,
                                max: maxYear + (maxYear - minYear) * 0.2,
                                minRange: (maxYear - minYear) * 0.1
                            }
                        }
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeInOutQuart'
                },
                // 添加自定义绘制
                plugins: [{
                    id: 'customDraw',
                    afterDraw: (chart) => {
                        const ctx = chart.ctx;
                        const xAxis = chart.scales.x;
                        const yAxis = chart.scales.y;
                        
                        chart.data.datasets[0].data.forEach(point => {
                            const x = xAxis.getPixelForValue(point.x);
                            const y = yAxis.getPixelForValue(point.y);
                            
                            // 绘制方框
                            ctx.save();
                            ctx.beginPath();
                            ctx.fillStyle = point.backgroundColor;
                            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
                            ctx.lineWidth = 1;
                            const width = 180;  // 增加宽度
                            const height = 80;  // 增加高度
                            ctx.fillRect(x - width/2, y - height/2, width, height);
                            ctx.strokeRect(x - width/2, y - height/2, width, height);
                            
                            // 绘制文本
                            ctx.fillStyle = '#000';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            
                            // 项目名称 (较大字体)
                            ctx.font = 'bold 14px Arial';
                            ctx.fillText(point.name, x, y - 25);
                            
                            // 年份
                            ctx.font = '12px Arial';
                            const yearText = point.x < 0 ? 
                                `公元前${Math.abs(point.x)}年` : 
                                `${point.x}年`;
                            ctx.fillText(yearText, x, y - 5);
                            
                            // 事件描述 (自动换行)
                            ctx.font = '11px Arial';
                            const maxWidth = width - 20;
                            const words = point.event.split('');
                            let line = '';
                            let lines = [];
                            let y1 = y + 10;
                            
                            // 每行显示12个字
                            for (let i = 0; i < words.length; i += 12) {
                                lines.push(words.slice(i, i + 12).join(''));
                            }
                            
                            // 绘制每一行文本
                            lines.forEach((line, index) => {
                                ctx.fillText(line, x, y1 + (index * 15));
                            });
                            
                            ctx.restore();
                        });
                    }
                }],
                // 禁用默认tooltip
                tooltip: {
                    enabled: false
                }
            }
        });

        return currentChart;
    }

    // 缩放按钮事件处理
    document.querySelector('.zoom-in').addEventListener('click', () => {
        if (currentChart && zoomLevel < maxZoom) {
            currentChart.zoom(1.2);
            updateZoomLevel(currentChart);
        }
    });

    document.querySelector('.zoom-out').addEventListener('click', () => {
        if (currentChart && zoomLevel > minZoom) {
            currentChart.zoom(0.8);
            updateZoomLevel(currentChart);
        }
    });

    document.querySelector('.zoom-reset').addEventListener('click', () => {
        if (currentChart) {
            currentChart.resetZoom();
            updateZoomLevel(currentChart);
        }
    });

    // 初始化时间轴
    createTimeline();

    // 添加分类按钮事件监听
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.category-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            createTimeline(this.dataset.category);
        });
    });
}); 