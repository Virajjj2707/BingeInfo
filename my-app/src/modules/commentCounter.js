// comments will be directly sent to the virajs formspree account
const countComments = () => {
  const count = document.querySelectorAll('.comment-card');
  return count.length;
};

export default countComments;