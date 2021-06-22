import './index.css';
import React from 'react';
import OtherItem from './other-item';
import SuperToolDay from '../../assets/img/super-tool-day.png';
import Location from '../../assets/img/ic_location_b.png';
import Help from '../../assets/img/ic_helpcenter.png';
import Platt from '../../assets/img/ic_platt-u.png';

const OtherInfo = () => {
  return (
    <div className="other-wrapper">
      <OtherItem
        icon={SuperToolDay}
        text='Super Tool Day & Dynamic Data Day'
      />
      <OtherItem icon={Location} text="Branch Locations" />
      <OtherItem icon={Help} text="Help Center" />
      <OtherItem icon={Platt} text="Platt University" />
    </div>
  );
};

export default OtherInfo;
