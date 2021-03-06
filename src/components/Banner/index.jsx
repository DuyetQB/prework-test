import React, { useState, useEffect } from 'react';
import * as S from './styled';

import { Heading3, Text } from 'components/common/Typo';
import BannerShopImage from 'images/house-place.png';
import BgShopHouse from 'images/layer-bgshop-house.png';
import BgBanner from 'images/bg-banner.png';
import Button from 'components/Button';
import IconEmail from 'images/icon-email.png';
import IconPhone from 'images/icon-phone.png';

import Input from 'components/Form/InputField';

export default function index() {
  const [countdownDate, ] = useState(new Date('12/25/2022').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const shopHouseStyle = {
    backgroundImage: `url(${BgShopHouse})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const bannerStyle = {
    backgroundImage: `url(${BgBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div>
        <S.WrapBanner style={bannerStyle}>
          <div className="row">
            <div className="col-md-6">
              <S.WrapText>
                <Heading3 isWhite>GI???I PH??P C??CH M???NG 4.0 CHO NG??NH B??N L???</Heading3>
                <Text isWhite margin="20px 0px">
                  Gi???i ph??ng h???u h???t c??c c??ng vi???c c???a ch??? c???a h??ng, nh??n vi??n ma Gi???i ph??ng h???u h???t c??c c??ng vi???c c???a
                  ch??? c???a h??ng, nh??n vi??n marketing, c??c c???p qu???n l?? cho ?????n c??c nh??n vi??n th??ng th?????ng.
                </Text>
                <div className="d-flex">
                  <Text isWhite>Free</Text>
                  <Text isBold isWhite className="ms-2 me-2">
                    1 th??ng{' '}
                  </Text>
                  <Text isWhite>s??? d???ng g??i Starter cho</Text>
                  <Text isWhite isBold className="ms-2 me-2">
                    50 box
                  </Text>
                  <Text isWhite>?????u ti??n</Text>
                </div>
                <div className="d-flex">
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.days || '0'}
                    </Heading3>
                    <S.Text>Ng??y</S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.hours || '0'}
                    </Heading3>
                    <S.Text>Gi??? </S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.minutes || '0'}
                    </Heading3>
                    <S.Text>Ph??t </S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.seconds || '0'}
                    </Heading3>
                    <S.Text>Gi??y </S.Text>
                  </S.Circle>
                </div>
              </S.WrapText>
            </div>

            <div className="col-md-6">
              <S.BgHouse style={shopHouseStyle}>
                <img src={BannerShopImage} alt="" />
              </S.BgHouse>
            </div>
          </div>
          <S.WrapForm>
            <div className="row">
              <div className="col-md-3">
                <Input $type="email" placeholder="Email c???a b???n" icon={IconEmail} />
              </div>
              <div className="col-md-3">
                <Input $type="number" placeholder="S??? ??i???n tho???i" icon={IconPhone} />
              </div>
              <div className="col-md-4">
                <Button $type="yellow">????ng k?? s??? d???ng</Button>
              </div>
            </div>
          </S.WrapForm>
        </S.WrapBanner>
      </div>
    </>
  );
}
