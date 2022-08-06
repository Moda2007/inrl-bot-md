FROM fusuf/whatsasena:latest
RUN git clone https://github.com/inrl-official/inrl-bot-md /root/inrl/
WORKDIR /root/inrl/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --network-concurrency 1
RUN npm install
CMD ["node", "index.js"]
