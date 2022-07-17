按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能。

craco.config.js 利用了 less-loader 的 modifyVars 来进行主题配置, 变量和其他配置方式可以参考 [配置主题](https://ant.design/docs/react/customize-theme-cn) 文档
修改后重启 yarn start，如果看到一个绿色的按钮就说明配置成功了。

antd 内建了深色主题和紧凑主题，你可以参照 [使用暗色主题和紧凑主题](https://ant.design/docs/react/customize-theme-cn#%E4%BD%BF%E7%94%A8%E6%9A%97%E8%89%B2%E4%B8%BB%E9%A2%98%E5%92%8C%E7%B4%A7%E5%87%91%E4%B8%BB%E9%A2%98) 进行接入。

craco 的作用: 不需要使用eject即可获得 create-react-app 和自定义配置的好处。通常可能会选择 npm run eject弹出配置后魔改。但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的 react-script 版本）