/* 6. Write a function groupByPost(comments) that returns an object grouping comments by postId: 
const comments = [
  { postId: 1, text: "Great Post!" },
  { postId: 2, text: "Thanks!" },               
  { postId: 1, text: "Very helpful" },
];

Output : 
{ 
  '1': [ 'Great Post!', 'Very helpful' ], 
  '2': [ 'Thanks!' ] 
}
*/

const comments = [
  { postId: 1, text: "Great Post!" },
  { postId: 2, text: "Thanks!" },
  { postId: 1, text: "Very helpful" },
];

function groupByPost(comments) {
  let groupedComments = {};

  comments.forEach((item) => {
    let { postId, text } = item;
    if (groupedComments.hasOwnProperty(postId)) {
      groupedComments[postId].push(text);
    } else {
      groupedComments[postId] = [text]; // Create karo array or data create kro
    }
  });

  return groupedComments;
}

console.log(groupByPost(comments));
