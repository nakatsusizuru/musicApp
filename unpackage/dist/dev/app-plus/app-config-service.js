
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/my/my","pages/playing/playing","pages/search/search","pages/set/set","pages/message/message","pages/play-list/play-list","pages/msg-detail/msg-detail","pages/search-reasult/search-reasult"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"音乐","navigationBarBackgroundColor":"#282828","backgroundColor":"#000000","navigationStyle":"custom"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"音乐","compilerVersion":"2.6.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{}},{"path":"/pages/my/my","meta":{},"window":{}},{"path":"/pages/playing/playing","meta":{},"window":{"animationType":"slide-in-bottom"}},{"path":"/pages/search/search","meta":{},"window":{"navigationStyle":"default","titleNView":{"searchInput":{"backgroundColor":"#FFF","borderRadius":"6px","placeholder":"搜索音乐"}}}},{"path":"/pages/set/set","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"设置"}},{"path":"/pages/message/message","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"消息通知"}},{"path":"/pages/play-list/play-list","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"播放列表","bounce":"none"}},{"path":"/pages/msg-detail/msg-detail","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"消息详情"}},{"path":"/pages/search-reasult/search-reasult","meta":{},"window":{"navigationStyle":"default","navigationBarTitleText":"搜索结果"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
