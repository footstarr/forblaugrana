function goBack() {
  window.history.back();
}

function toggleCommentSection(imageNumber) {
  var commentSection = document.getElementById('commentSection' + imageNumber);
  var caption = document.querySelector('.caption');
  if (commentSection.style.opacity === '1') {
    commentSection.style.opacity = '0';
    caption.style.opacity = '0';
  } else {
    commentSection.style.opacity = '1';
    caption.style.opacity = '1';
  }
}

function postComment(imageNumber) {
  var commentInput = document.getElementById('commentInput' + imageNumber).value;
  if (commentInput.trim() !== '') {
    var commentContainer = document.getElementById('comments' + imageNumber);
    var commentElement = document.createElement('p');
    commentElement.innerText = commentInput;
    commentContainer.appendChild(commentElement);
    document.getElementById('commentInput' + imageNumber).value = '';
  }
}
