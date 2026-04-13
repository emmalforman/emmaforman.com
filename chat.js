(function () {
  var chatForm = document.getElementById('chat-form');
  var chatInput = document.getElementById('chat-input');
  var suggestions = document.getElementById('chat-suggestions');
  var responseArea = document.getElementById('ask-response');

  var responses = [
    { keys: ['event', 'upcoming', 'happening', 'next'], answer: 'Our next FoodHack NYC meetup is coming up soon! Check mycacollective.com for the latest schedule, and keep an eye on our newsletter for member-only dinners and workshops.' },
    { keys: ['involved', 'join', 'contribute', 'help', 'volunteer'], answer: 'We\u2019d love to have you more involved! You can attend our events, contribute to community discussions, or reach out about hosting a gathering. Start by visiting mycacollective.com or contacting Emma directly.' },
    { keys: ['regenerative', 'agriculture', 'soil', 'farming', 'regen'], answer: 'Regenerative agriculture focuses on restoring soil health, increasing biodiversity, and sequestering carbon. It\u2019s a key topic in our community\u2014we regularly host conversations with farmers, scientists, and founders working in this space.' },
    { keys: ['myca', 'collective', 'what is', 'about'], answer: 'Myca Collective is a community for women reimagining food, climate, and agriculture. Founded by Emma Forman, it brings together founders, operators, and changemakers through events, dinners, and shared knowledge.' },
    { keys: ['doordash', 'labs', 'robotics', 'automation'], answer: 'DoorDash Labs is where Emma helps lead automation and robotics efforts to power the future of commerce. It\u2019s at the cutting edge of how technology meets everyday logistics.' },
    { keys: ['foodhack', 'nyc', 'food hack'], answer: 'FoodHack NYC connects founders, funders, and operators shaping the next generation of food systems. Emma organizes these events to bring the foodtech ecosystem together.' },
    { keys: ['climate', 'sustainability', 'carbon', 'environment'], answer: 'Climate and sustainability are central to everything Myca does. From regenerative agriculture to sustainable food systems, our community explores how food can be a force for environmental change.' },
  ];

  function getResponse(text) {
    var lower = text.toLowerCase();
    for (var i = 0; i < responses.length; i++) {
      for (var j = 0; j < responses[i].keys.length; j++) {
        if (lower.indexOf(responses[i].keys[j]) !== -1) {
          return responses[i].answer;
        }
      }
    }
    return 'Great question! That\u2019s something our community is actively exploring. Check out mycacollective.com for more, or come to one of our upcoming events to dive deeper.';
  }

  function ask(text) {
    if (!text.trim()) return;
    chatInput.value = '';
    suggestions.hidden = true;
    responseArea.hidden = false;
    responseArea.textContent = getResponse(text);
  }

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    ask(chatInput.value);
  });

  suggestions.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      ask(btn.textContent);
    });
  });
})();
