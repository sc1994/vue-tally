# ѡ��nginx����
FROM nginx:latest
# copy����
COPY . /src
# ���nginx�����ļ�
COPY nginx.conf /etc/nginx/nginx.conf
# ȥ��Ĭ�ϵ�nginx�����ļ�
RUN rm /etc/nginx/conf.d/default.conf 