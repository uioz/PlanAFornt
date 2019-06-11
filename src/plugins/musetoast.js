import museToast from 'muse-ui-toast';

museToast.config({
  closeIcon: '',               // 关闭的图标
  close: false,
  successIcon: '',      // 成功信息图标
  infoIcon: '',                 // 信息信息图标
  warningIcon: '',     // 提醒信息图标
  errorIcon: ''
});

export const Toast = museToast;