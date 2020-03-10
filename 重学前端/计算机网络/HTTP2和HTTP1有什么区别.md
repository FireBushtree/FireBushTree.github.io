# HTTP之间的区别

[参考文章](https://juejin.im/entry/5981c5df518825359a2b9476)

## HTTP1.0 和 HTTP1.1

1. 缓存 http1.1提供 `cache-control`, `ETag`
2. 长连接 http1.1默认开始keep-alive
3. host头处理
4. 错误通知管理
5. 带宽优化及网络连接的使用

## HTTP2.0 和 HTTP1.*

1. 新的二进制格式
2. 多路复用
3. 首部压缩
4. 服务器推送
