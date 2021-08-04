import React from 'react';
import * as S from './styled';
import EnterpriseCard from 'components/common/Card';
import BuildBussiness from 'images/build-bussiness-image.png';
import EmployeeProcedures from 'images/employee-procedures-image.png';
import FindCustommers from 'images/find-custommers-image.png';
import GetCustommers from 'images/get-custommers-image.png';
import MarketingImage from 'images/marketing-image.png';
import ProtechImage from 'images/protech-image.png';
import TargetImage from 'images/target-image.png';
import VipCustommers from 'images/vip-custommers-image.png';
import { Heading3, Heading4, Text } from 'components/common/Typo';

export default function EnterpriseCardWrap() {
  return (
    <div className="container">
      <S.Content>
        <Heading3 padding="60px 0px 10px 0px">Giá trị cho doanh nghiệp</Heading3>
        <div className="row">
          <div className="col-md-3">
            <EnterpriseCard $src={TargetImage}>
              <Heading4 padding="20px 0px" textAlign="center">
                Xác định khách hàng mục tiêu
              </Heading4>

              <Text isOverFlow isGray1>
                Với chức năng đếm số lượng khách hàng vào ra, nhận diện độ tuổi, giới tính của khách hàng tại từng khu
                vực, REVA giúp nắm bắt được luồng khách hàng chính của từng sản phẩm. Từ đó, đưa ra được những chiến
                lược phù hợp với từng phân khúc khách hàng.
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={FindCustommers}>
              <Heading4 padding="20px 0px" textAlign="center">
                Nắm bắt nhu cầu thị hiếu của khách hàng
              </Heading4>
              <Text isOverFlow isGray1>
                Thông qua bản đồ nhiệt giúp thống kê các khu vực tập trung nhiều khách hàng và lộ trình di chuyển của
                họ, việc nắm bắt nhu cầu của số lượng lớn khách hàng không còn là điều khó khăn.Nhờ vậy mà có thể cải
                tiến bố trí mặt bằng và sắp xếp mặt hàng cho phù hợp.
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={GetCustommers}>
              <Heading4 padding="20px 0px" textAlign="center">
                Nắm bắt tâm lý khách hàng
              </Heading4>
              <Text isOverFlow isGray1>
                REVA chính là một thước đo giúp doanh nghiệp đánh giá mức độ hài lòng của khách hàng đối với sản phẩm,
                dịch vụ bằng cách thống kê thời gian khách hàng ở lại cửa hàng, nhận diện khuôn mặt, phân tích cảm xúc
                nhằm đưa ra những thay đổi kịp thời.
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={VipCustommers}>
              <Heading4 padding="20px 0px" textAlign="center">
                Nhận diện khách hàng VIP
              </Heading4>
              <Text isOverFlow isGray1>
                Ngay lập tức nhận diện khách hàng VIP giúp kịp thời phán đoán và có cách thức phục vụ, ưu đãi phù hợp.
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={BuildBussiness}>
              <Heading4 padding="20px 0px" textAlign="center">
                Xây dựng chiến lược kinh doanh
              </Heading4>
              <Text isOverFlow isGray1>
                Với năng lực chuyên sâu về xử lý lượng lớn dữ liệu, REVA sẵn sàng tư vấn, phân tích tình trạng kinh
                doanh giúp cửa hàng cải tiến, gia tăng hiệu quả
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={MarketingImage}>
              <Heading4 padding="20px 0px" textAlign="center">
                Đo lường hiệu quả chiến dịch Marketing
              </Heading4>
              <Text isOverFlow isGray1>
                Thấu hiểu các chủ cửa hàng, manager hoặc những giám đốc marketing không thể luôn luôn theo dõi hình ảnh
                realtime của cửa hàng mình, REVA tự động gửi báo cáo theo ngày/tháng đảm bảo khách hàng luôn chủ động
                nắm bắt được thông tin.
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={EmployeeProcedures}>
              <Heading4 padding="20px 0px" textAlign="center">
                Đánh giá quy trình của nhân viên
              </Heading4>
              <Text isOverFlow isGray1>
                Thay vì bạn liên tục phải theo dõi, giám sát hiệu quả làm việc của nhân viên trong cửa hàng thì REVA tự
                động phát hiện việc tuân thủ quy định về đồng phục, trang thiết bị, quy trình làm việc,...
              </Text>
            </EnterpriseCard>
          </div>
          <div className="col-md-3">
            <EnterpriseCard $src={ProtechImage}>
              <Heading4 padding="20px 0px" textAlign="center">
                Chống thất thoát và an ninh
              </Heading4>
              <Text isOverFlow isGray1>
                Chống thất thoát doanh thu bằng cách tích hợp hệ thống POS, phát hiện kẻ gian, báo cháy, báo khói,...
              </Text>
            </EnterpriseCard>
          </div>
        </div>
      </S.Content>
    </div>
  );
}
