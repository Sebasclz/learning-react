import { useState } from 'react';

export function TwitterFollowCard({
  children,
  userName = 'unknown',
  initialIsFollowing = false,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'tw-followCard-follow is-following'
    : 'tw-followCard-follow';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de SebasKTS"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-name">
          <strong>{children}</strong>
          <span className="tw-followCard-name-handle">
                        @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-following">{text}</span>
          <span className="tw-followCard-stopFollowing">
                        Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
