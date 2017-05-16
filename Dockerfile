FROM node:7-onbuild

MAINTAINER Sebastian Salata R-T <SA.SalataRT@GMail.com>

ENV NODE_ENV=production

EXPOSE 9000

CMD ["npm", "start"]
