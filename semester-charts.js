document.addEventListener('DOMContentLoaded', function() {
    // 学分分布图
    const creditsChart = new Chart(
        document.getElementById('creditsChart'),
        {
            type: 'bar',
            data: {
                labels: ['第一学期', '第二学期', '第三学期', '第四学期', '第五学期', '第六学期', '第七学期', '第八学期'],
                datasets: [
                    {
                        label: '通识教育必修',
                        data: [16.75, 11.75, 10.75, 7.25, 0.25, 1.25, 0.25, 0.25],
                        backgroundColor: '#FF6384',
                    },
                    {
                        label: '通识教育选修',
                        data: [0, 0, 2, 2, 2, 2, 0, 0],
                        backgroundColor: '#36A2EB',
                    },
                    {
                        label: '专业教育必修',
                        data: [10.5, 10, 12, 7, 7, 7, 0, 0],
                        backgroundColor: '#FFCE56',
                    },
                    {
                        label: '专业教育选修',
                        data: [0, 0, 2, 9, 9, 10, 0, 0],
                        backgroundColor: '#4BC0C0',
                    },
                    {
                        label: '集中实践',
                        data: [1, 0, 1, 8.5, 0, 2, 7, 5],
                        backgroundColor: '#9966FF',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: '学分'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '各学期学分分布（不含课外实践4学分）'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        }
    );

    // 周学时分布图
    const hoursChart = new Chart(
        document.getElementById('hoursChart'),
        {
            type: 'bar',
            data: {
                labels: ['第一学期', '第二学期', '第三学期', '第四学期', '第五学期', '第六学期', '第七学期', '第八学期'],
                datasets: [
                    {
                        label: '通识教育必修',
                        data: [18, 14, 8, 8, 1, 2, 1, 1],
                        backgroundColor: '#FF6384',
                    },
                    {
                        label: '通识教育选修',
                        data: [0, 0, 2, 2, 2, 2, 0, 0],
                        backgroundColor: '#36A2EB',
                    },
                    {
                        label: '专业教育必修',
                        data: [10, 10, 12, 16, 16, 16, 0, 0],
                        backgroundColor: '#FFCE56',
                    },
                    {
                        label: '专业教育选修',
                        data: [0, 0, 2, 18, 18, 18, 0, 0],
                        backgroundColor: '#4BC0C0',
                    },
                    {
                        label: '集中实践',
                        data: [2, 0, 3, 0, 0, 2, 16, 12],
                        backgroundColor: '#9966FF',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: '周学时'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '各学期周学时分布'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        }
    );
}); 