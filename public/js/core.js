var app = angular.module('scotchTodo', ['todoController', 'todoService', 'ezfb', 'ngRoute'])

.constant('SOCIAL_PLUGINS', [
  'like', 'share-button', 'send', 'post', 'video', 
  'comments', 'comments2', 'page', 'follow', 'send-to-messenger', 'messengermessageus'
])

.config(function (ezfbProvider, $routeProvider, SOCIAL_PLUGINS) {
  ezfbProvider.setInitParams({
    appId: '682513971908584',
    version: 'v2.8'
  });
});
