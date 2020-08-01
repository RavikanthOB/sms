const USER = {
  Teacher: {
    user: 'Teacher',
    password: '1234',
  },
  Student: {
    user: 'Student',
    password: '1234',
  },
};

const Attachments = [
  {icon: 'image', name: 'Gallery', type: 'image', color: '#6D2B8C'},
  {icon: 'headphones', name: 'Audio', type: 'audio', color: '#EF7C05'},
  {icon: 'file-document', name: 'Document', type: 'document', color: '#5F67CA'},
];

const unquieID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};


export default {
  KEY_AUTH_KEY: 'auth_key',
  USER,
  Attachments,
  data: 'data',
  unquieID,
};
