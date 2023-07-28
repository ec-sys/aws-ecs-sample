import express from 'express';
import os from 'os';

import http from 'http';

const app = express();
const port = process.env.SERVER_PORT || 8080;

const SEVICE_USER_URL = process.env.SEVICE_USER_URL || 'http://localhost:8081/user';
const SEVICE_EMAIL_URL = process.env.SEVICE_USER_URL || 'http://localhost:8082/email';

app.get('/', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello Root!!");

  res.json({
    serviceName: 'LongDD_JP Demo ECS Ver2',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName
  });
})

app.get('/user', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello User Service!!");

  const userNames = ['long', 'phong', 'dung', 'lan', 'van', 'thoa', 'minh', 'hoang'];
  let idx = Math.floor(Math.random() * userNames.length); // 0 to user name length

  res.json({
    serviceName: 'LongDD_JP Demo ECS User Service',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName,
    userName: userNames[idx]
  });
})

app.get('/email', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello Email Service!!");

  const userEmails = ['long.test@gmail.com', 'phong.test@gmail.com', 'dung.test@gmail.com', 'lan.test@gmail.com', 'van.test@gmail.com', 'thoa.test@gmail.com', 'minh.test@gmail.com', 'hoang.test@gmail.com'];
  let idx = Math.floor(Math.random() * userEmails.length); // 0 to user email length

  res.json({
    serviceName: 'LongDD_JP Demo ECS Email Service',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName,
    userEmail: userEmails[idx]
  });
})

app.get('/order', async (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello Order Service!!");
  let http_promise_user = getPromise(SEVICE_USER_URL);
  let response_body_user = await http_promise_user;
  console.log(response_body_user);

  res.json({
    serviceName: 'LongDD_JP Demo ECS Order Service',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName,
    dataServiceUser: response_body_user
  });
})

// function returns a Promise
function getPromise(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let chunks_of_data = [];

      response.on('data', (fragments) => {
        chunks_of_data.push(fragments);
      });

      response.on('end', () => {
        let response_body = Buffer.concat(chunks_of_data);
        resolve(response_body.toString());
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

app.listen(port, () => {
  console.log(`App started on port ${port}`);
  console.log(`Service-User-Url ${SEVICE_USER_URL}`);
  console.log(`Service-Email-Url ${SEVICE_EMAIL_URL}`);
})
