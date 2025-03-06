
type HostProps = {
  host : {
    isPro : boolean;
    name: string;
    avatarUrl: string;
   };
   description: string;
  }

const Host = ({host, description} :HostProps) => {
  const proClass = host.isPro ? 'offer__avatar-wrapper--pro' : '';
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${proClass} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {host.name}
        </span>
        <span className="offer__user-status">
          {host.isPro ? 'Pro' : ''}
        </span>
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Host;
