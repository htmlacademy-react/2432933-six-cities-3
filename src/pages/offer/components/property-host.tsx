import clsx from 'clsx';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { shallowEqual } from 'react-redux';

const PropertyHost = () => {
  const { host, description} = useAppSelector(
    (state) => ({
      host: state.offer.offer?.host ,
      description: state.offer.offer?.description,
    }),
    shallowEqual
  );

  if (!host) {
    return null;
  }

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={clsx('offer__avatar-wrapper user__avatar-wrapper', {'offer__avatar-wrapper--pro': host.isPro})}>
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

export default PropertyHost;
