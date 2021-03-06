import { setup, mock,Random } from "mockjs";

setup({
  timeout: '200-600'
});

mock('/api/assets', 'get', {
  stateCode: 200,
  message: '',
  data: {
    systemName: '@word',
    clientName: '@word',
    systemMessage: '@word',
    clientMessage: '@word',
    systemBackground: Random.image('200x100', '#4A7BF7', 'Hello'),
    clientBackground: Random.image('200x100', '#4A7BF7', 'Hello'),
    logo: Random.image('200x100', '#4A7BF7', '选专业系统 ')
  }
});

mock(/^\/api\/student\/info/, 'get', {
  stateCode: 200,
  message: '',
  data: {
    "信息工程系": {
      "计算机技术": ["计算机应用技术", "移动应用开发"],
      "环境艺术设计": ["室内设计"]
    },
    "艺术系": ["动漫制作"]
  }
});
// mock(/^\/api\/student\/info/, 'get', {
//   stateCode: 200,
//   message: '',
//   data: {
//     "计算机应用技术": [
//       "这个技术",
//       "哪个技术"
//     ],
//     "deepdark": {
//       "hello": [
//         "world",
//         "CDEF"
//       ],
//       "deepdark": [
//         "fantasy"
//       ]
//     }
//   }
// });

mock(/^\/api\/student\/result/, 'get', {
  stateCode: 200,
  message: "",
  data: {
    "speciality": "计算机类",
    "specialityPath": [],
    "picked": "计算机应用技术"
  }
});

mock(/^\/api\/student\/result/, 'post', {
  "stateCode": 200,
  "message": "",
  "data": false
});