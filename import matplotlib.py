import matplotlib.pyplot as plt
import numpy as np

# 数据提取和准备
categories = ['通识教育课程', '专业教育课程', '课程实践', '集中实践教学环节', '课外实践（第二课堂）']
total_credits = [52, 86, 65.25, 16.5, 12]
total_hours = [916, 1356, 1044, 35, 0]  # 课外实践（第二课堂）的小时数未给出，这里设为0

# 创建柱状图
fig, ax = plt.subplots()
ax.bar(categories, total_credits, label='学分数')
ax.bar(categories, total_hours, bottom=total_credits, label='学时数', alpha=0.5)
ax.set_xlabel('类别')
ax.set_ylabel('数量')
ax.set_title('各类别学分数与学时数对比')
ax.legend()
plt.show()

# 创建饼图
fig, ax = plt.subplots()
sizes = [52, 86, 65.25, 16.5, 12]
labels = categories
explode = (0.1, 0, 0, 0, 0)  # 将通识教育课程稍微“爆炸”出来
ax.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', startangle=140)
ax.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.title('各类别占总学分比例')
plt.show()

# 创建堆叠柱状图
fig, ax = plt.subplots()
bottom = np.zeros(len(categories))
for i, (credits, hours) in enumerate(zip(total_credits, total_hours)):
    ax.bar(categories, credits, bottom=bottom, label=f'学分数 - {categories[i]}')
    bottom += credits
    ax.bar(categories, hours, bottom=bottom - hours, label=f'学时数 - {categories[i]}', alpha=0.5)
ax.set_xlabel('类别')
ax.set_ylabel('数量')
ax.set_title('各类别学分数与学时数堆叠柱状图')
ax.legend()
plt.show()