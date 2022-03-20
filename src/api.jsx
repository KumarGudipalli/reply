export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Whats the status?",
      username: "Albert",
      userId: "1",
      parentId: null,
      createdAt: "Sun Aug 02 2020 18:08:45 GMT+0530",
    },
    {
      id: "2",
      body: "Wrote the test suites, waiting for approval?",
      username: "haren",
      userId: "2",
      parentId: null,
      createdAt: "Sun Aug 02 2020 18:12:45 GMT+0530",
    },
    {
      id: "3",
      body: "looking forward for the demo!",
      username: "Nrupul",
      userId: "2",
      parentId: "1",
      createdAt: "Sun Aug 02 2020 18:15:45 GMT+0530",
    },
    {
      id: "4",
      body: "Thanks for the update!",
      username: "albert",
      userId: "2",
      parentId: "2",
      createdAt: "Sun Aug 02 2020 18:10:45 GMT+0530",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};