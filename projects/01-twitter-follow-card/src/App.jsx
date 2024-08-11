import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
  const users = [
    {
      userName: 'SebasKTS',
      name: 'Sebas',
      initialIsFollowing: true,
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      initialIsFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
