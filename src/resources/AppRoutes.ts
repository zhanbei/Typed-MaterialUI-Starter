'use strict';

const home = '';
export const ROUTE_HOME = home + '/';
export const ROUTE_ABOUT = home + '/about';
export const ROUTE_TOPICS = home + '/topics';
export const ROUTE_TOPIC = home + '/topics/:topicId';

export const getTopicPath = (topicID: string) => `/topics/${topicID}`;

