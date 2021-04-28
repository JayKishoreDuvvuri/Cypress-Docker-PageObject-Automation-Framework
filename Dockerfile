#FROM cypress/base:12.1.0

#RUN mkdir /app
#WORKDIR /app

#COPY . /app

#RUN npm install

#RUN $(npm bin)/cypress verify

#RUN ["npm", "run", "test"]

###################################################
FROM cypress/included:4.1.0

RUN mkdir /app
WORKDIR /app

# INSTALL LIBRARIES & FONTS 
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  fonts-arphic-bkai00mp \
  fonts-arphic-bsmi00lp \
  fonts-arphic-gbsn00lp \
  fonts-arphic-gkai00mp \
  fonts-arphic-ukai \
  fonts-arphic-uming \
  ttf-wqy-zenhei \
  ttf-wqy-microhei \
  xfonts-wqy \
  && rm -rf /var/lib/apt/lists/*

# INSTALL YARN 
RUN npm install -g yarn@latest --force
RUN yarn --version

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm i && npm run pretest
RUN npm run test