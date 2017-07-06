/**
 * @file publish-subscribe
 * @author foshou
 * 一个topicName可以订阅多个事件，都放在数组里，发布时依次从数组里取出注册的回调并执行
 */
'use strict';

class PublishSubscribe {
    constructor() {
        this.events = {};
    }

    listen(topicName, callback) {
        let topic = this.events[topicName];
        if (!topic) {
            this.events[topicName] = [];
        }
        this.events[topicName].push(callback);
    }

    remove(topicName) {
        delete this.events[topicName];
    }

    trigger(topicName, ...arg) {
        let topic = this.events[topicName];
        if (topic) {
            topic.forEach(callback => {
                callback(...arg);
            });
        }
    }
}

let ps = new PublishSubscribe();

ps.listen('speak', () => {
    console.log('say hello');
});
ps.listen('speak', () => {
    console.log('say world');
});
ps.listen('talk', () => {
    console.log('talk');
});

// ps.trigger('speak');
ps.trigger('talk');
