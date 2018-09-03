import postModel from './api/zombies/postsModel';

const posts = [
         {id: 1,
            title: 'World War Z.',
            author: 'Max Brooks',
            comments: [],
            upvotes: 10,
          },
         {
            id: 2,
            title: 'Day BY Day: Armageddon',
            author: 'J L Bourne',
            comments: [],
            upvotes: 12,
          },
          {
            id: 3,
            title: 'Warm Bodies',
            author: 'Isac Marrion',
            comments: [],
            upvotes: 12,
          },
          {
            id: 4,
            title: 'Feed',
            author: 'Mira Grant',
            comments: [],
            upvotes: 2,
          },
      ];
export const loadPosts = () => {
postModel.find({}).remove(function() {
    postModel.collection.insert(posts, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Post Data`);
    } else {
      console.info(`${posts.length} posts were successfully stored.`);
    }
  });
});
};