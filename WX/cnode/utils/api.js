'use strict'
var HOST_URL = 'https://cnodejs.org/api/v1';

var CET_TOPICS = '/topics';
var CET_TOPIC_BY_ID = '/topic/';

function obj2url(obj) {
    return Object.key(obj).map(function(k){
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    }).join('&')
}

module.exports = {
    //获取数据列表
    getTopics: function(obj) {
        return HOST_URL + CET_TOPICS + '?' + obj2url(obj)
    },
    getTopicById: function(id, obj) {
        return HOST_URI + GET_TOPIC_BY_ID + id + '?' + obj2uri(obj);
    }
};



