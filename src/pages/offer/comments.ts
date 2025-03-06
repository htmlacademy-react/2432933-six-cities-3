
type User = {
 name: string;
 avatarUrl: string;
 isPro: boolean;
}

type Comments = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;

}

const comments : Comments[] = [
  {
    'id': '54efbd05-68e1-4b49-a322-0b4711913a82',
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2025-02-10T21:00:00.701Z',
    'rating': 1,
    'user': {
      'name': 'Sophie',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      'isPro': false
    }
  },
  {
    'id': '5f93e955-f564-4e08-ba1c-9890c86dc1e9',
    'comment': 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    'date': '2025-02-07T21:00:00.701Z',
    'rating': 4,
    'user': {
      'name': 'Max',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      'isPro': true
    }
  }
];

export {comments};
