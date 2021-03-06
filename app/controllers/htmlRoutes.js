module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/survey', function(req, res){
    var questions = [
      {question: 'Your mind is always buzzing with unexplored ideas and plans.', id: 'q'}, 
      {question: 'Generally speaking, you rely more on your experience than your imagination.'},
      {question: 'You find it easy to stay relaxed and focused even when there is some pressure.'},
      {question: 'You rarely do something just out of sheer curiosity.'},
      {question: 'People can rarely upset you.'},
      {question: 'It is often difficult for you to relate to other people’s feelings.'},
      {question: 'In a discussion, truth should be more important than people’s sensitivities.'},
      {question: 'You rarely get carried away by fantasies and ideas.'},
      {question: 'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.'}, 
      {question: 'You feel more energetic after spending time with a group of people.'}];


    res.render('survey', {questions: questions});
  })
}