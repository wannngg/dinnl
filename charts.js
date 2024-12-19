document.addEventListener('DOMContentLoaded', function() {
    // 学分分布饼图
    const creditsPieChart = new Chart(
        document.getElementById('creditsPieChart'),
        {
            type: 'pie',
            data: {
                labels: [
                    '通识教育必修课',
                    '通识教育选修课',
                    '专业基础课',
                    '专业核心课',
                    '方向限选课',
                    '专业任选课',
                    '集中实践教学环节',
                    '课外实践'
                ],
                datasets: [{
                    data: [44, 8, 36, 21, 21, 8, 16.5, 4],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#FF6384',
                        '#36A2EB'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: '学分分布（总计158.5学分）'
                    }
                }
            }
        }
    );

    // 课时分布柱状图
    const hoursBarChart = new Chart(
        document.getElementById('hoursBarChart'),
        {
            type: 'bar',
            data: {
                labels: ['通识教育课程', '专业教育课程'],
                datasets: [{
                    label: '课时数',
                    data: [916, 1356],
                    backgroundColor: ['#36A2EB', '#FF6384']
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );

    // 理论与实践对比图
    const theoryPracticeChart = new Chart(
        document.getElementById('theoryPracticeChart'),
        {
            type: 'doughnut',
            data: {
                labels: ['理论课程', '实践课程'],
                datasets: [{
                    data: [87.3, 54.0],
                    backgroundColor: ['#4BC0C0', '#FFCE56']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: '理论与实践课程比例（%）'
                    }
                }
            }
        }
    );
}); 