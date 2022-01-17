# OpenGeo frontend

# Todo

- resolve the [issue](https://github.com/PaulLeCam/react-leaflet/issues/881) that disallows targeting newer browsers (maybe?)

# Requirements 
- [node.js >= 14](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)

# Running

## Development

### Baremetal

1. Configure the backend url in *src/backend/settings.tsx*
2. `yarn install`
3. `yarn start`

### Docker

1. Configure the backend url in *src/backend/settings.tsx* and create *docker/.env* based on *docker/.env.example*
2. `docker build -t opengeo-frontend .`
3. `docker run -d -p 0.0.0.0:3000:3000/tcp --restart unless-stopped opengeo-frontend`

## Production

1. Configure the backend url in *src/backend/settings.tsx* and create *docker/.env* based on *docker/.env.example*
2. `docker build -t opengeo-frontend -f Dockerfile.production .`
3. `docker run -d -p 0.0.0.0:3000:80/tcp --restart unless-stopped opengeo-frontend`
