# Http中keep-alive的作用
在http中请求每一个资源， 都需要建立tcp/ip连接， 每次处理完资源， 都需要关闭连接。 这样请求多个
资源就需要频繁的开关连接。

http中开启长连接， 即keep-alive， 可以使得请求多个资源的时候， 复工同一个tcp/ip连接， 减少了
连接开关的次数。
