import express from 'express';
import os from 'os';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello Root!!");

  res.json({
    serviceName: 'LongDD_JP Demo ECS',
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

  res.json({
    serviceName: 'LongDD_JP Demo ECS User Service',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName
  });
})

app.get('/email', (req, res) => {
  const clientIp = req.header('x-forwarded-for');
  const elbIp = req.socket.remoteAddress;
  const containerIp = req.socket.localAddress;
  const containerName = os.hostname();

  console.log("Hello Email Service!!");

  res.json({
    serviceName: 'LongDD_JP Demo ECS Email Service',
    clientIp: clientIp,
    elbIp: elbIp,
    containerIp: containerIp,
    containerName: containerName
  });
})

app.listen(port, () => {
  console.log(`App started on port ${port}`);
})
