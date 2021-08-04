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
                <Heading3 isWhite>GIẢI PHÁP CÁCH MẠNG 4.0 CHO NGÀNH BÁN LẺ</Heading3>
                <Text isWhite margin="20px 0px">
                  Giải phóng hầu hết các công việc của chủ cửa hàng, nhân viên ma Giải phóng hầu hết các công việc của
                  chủ cửa hàng, nhân viên marketing, các cấp quản lý cho đến các nhân viên thông thường.
                </Text>
                <div className="d-flex">
                  <Text isWhite>Free</Text>
                  <Text isBold isWhite className="ms-2 me-2">
                    1 tháng{' '}
                  </Text>
                  <Text isWhite>sử dụng gói Starter cho</Text>
                  <Text isWhite isBold className="ms-2 me-2">
                    50 box
                  </Text>
                  <Text isWhite>đầu tiên</Text>
                </div>
                <div className="d-flex">
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.days || '0'}
                    </Heading3>
                    <S.Text>Ngày</S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.hours || '0'}
                    </Heading3>
                    <S.Text>Giờ </S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.minutes || '0'}
                    </Heading3>
                    <S.Text>Phút </S.Text>
                  </S.Circle>
                  <S.Circle className="me-3 mt-3">
                    <Heading3 isBold isBlue2>
                      {state.seconds || '0'}
                    </Heading3>
                    <S.Text>Giây </S.Text>
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
                <Input $type="email" placeholder="Email của bạn" icon={IconEmail} />
              </div>
              <div className="col-md-3">
                <Input $type="number" placeholder="Số điện thoại" icon={IconPhone} />
              </div>
              <div className="col-md-4">
                <Button $type="yellow">Đăng ký sử dụng</Button>
              </div>
            </div>
          </S.WrapForm>
        </S.WrapBanner>
      </div>
    </>
  );
}
