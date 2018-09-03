import _ from 'lodash';

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


     const stubAPI = {
         getAll: () => {
            return posts;
          },
         add: (t, l) => {
              if (!(t && l)) return false;
              let id = 1;
              const last = _.last(posts);
              if (last) {
                 id = last.id + 1;
              }
              let len = posts.length;
              let newLen = posts.push({
                  'id': id,
                 'title': t, 'link': l, 'author': '', 'comments': [], 'upvotes': 0});
               return newLen > len?id:-1;
              },
         upvote: (id) => {
             const index = _.findIndex(posts,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                  posts[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getPost: (id) => {
            let result = null;
            const index = _.findIndex(posts,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                result = posts[index];
                    }
            return result;
            },
         addComment: (postId, c, n) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            let id = 1;
            if (post) {
            const last = _.last(post.comments);
            if (last) {
               id = last.id + 1;
            }
            post.comments.push({'id': id,
                     'comment': c, 'author': n, 'upvotes': 0} );
            result = true;
            }
          return result;
            },
         upvoteComment: (postId, commentId) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            if (post) {
            const index = _.findIndex(post.comments, (c) => {
                      return c.id == commentId;
                    });
             if (index !== -1) {
                 post.comments[index].upvotes += 1;
                 result = true;
                }
              }
            return result;
          },
      };
    export default stubAPI;