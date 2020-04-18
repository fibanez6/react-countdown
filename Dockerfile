FROM arm32v7/node:13.12.0-stretch-slim

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
COPY docker-entrypoint.sh /usr/local/bin/

RUN npm install -g serve \
    && npm update \
    && npm run build \
    && chmod +x /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

EXPOSE 3200

ENTRYPOINT ["docker-entrypoint.sh"]