FROM fusuf/whatsasena:latest
RUN git clone https://github.com/inrl-official/inrl-bot-md /root/inrl/
WORKDIR /root/inrl/
RUN yarn install --no-audit
CMD ["node", "index.js"]
