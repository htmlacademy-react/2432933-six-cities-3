import clsx from 'clsx';
import { Host } from '../../../types/offer-type/host';

type HostProps = {
  host: Host;
  description: string;
  }

const PropertyHost = ({host, description} :HostProps) => (
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

export default PropertyHost;
